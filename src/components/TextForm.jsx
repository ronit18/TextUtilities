import React, { useState } from "react";

function TextForm(props) {
	const [text, setText] = useState("");

	// event to change in text.
	const handleOnChange = (event) => {
		setText(event.target.value);
	};

	// func for uppercase
	const handleUpCaseClick = () => {
		let newText = text.toUpperCase();
		setText(newText);
		props.showAlert("Converted to upercase", "success");
		if (text === "") {
			props.showAlert(
				"Nothing in textarea to convert to upercase! Please enter something",
				"danger"
			);
		}
	};

	//func for lowercase
	const handleLowCaseClick = () => {
		let newText = text.toLowerCase();
		setText(newText);
		props.showAlert("Converted to lowercase", "success");
		if (text === "") {
			props.showAlert(
				"Nothing in textarea to convert to lowercase! Please enter something",
				"danger"
			);
		}
	};

	//func for clearing text area
	const handleClearClick = () => {
		let newText = text.replace(text, "");
		setText(newText);
		props.showAlert("Text was cleared.", "primary");
	};

	//func for coping text
	const handleCopyClick = () => {
		let copyText = document.getElementById("myBox");
		copyText.select();
		navigator.clipboard.writeText(copyText.value);
		// alert("Copied text : " + copyText.value);
		props.showAlert("Copied Text successfully.", "success");
		if (text === "") {
			props.showAlert(
				"Nothing in textarea to copy! Please enter something",
				"danger"
			);
		}
	};

	//func for extra spaces.
	const handleExtraSpaces = () => {
		let extraSpaces = text.split(/[ ]+/);
		setText(extraSpaces.join(" "));
		props.showAlert("Extra Spaces Removed.", "primary");
		if (text === "") {
			props.showAlert(
				"Nothing in textarea to remove empty spaces! Please enter something",
				"danger"
			);
		}
	};
	return (
		<>
			<div>
				<div
					style={{
						color: props.mode === "dark" ? "white" : "black",
					}}
				>
					<h1>Hello {props.yourName}</h1>
					<h1>Enter Your text here.</h1>
				</div>
				<div className="mb-3">
					<textarea
						className="form-control"
						id="myBox"
						value={text}
						rows="5"
						onChange={handleOnChange}
						style={{
							backgroundColor:
								props.mode === "dark" ? "grey" : "white",
							color: props.mode === "dark" ? "white" : "black",
						}}
					></textarea>
					<br />
					<div
						style={{
							color: props.mode === "light" ? "black" : "white",
						}}
					>
						<p>
							{text.split(" ").length} words and {text.length}{" "}
							characters.
						</p>
						<p>
							{0.008 * text.split(" ").length} minutes to read
							your text.
						</p>
					</div>
				</div>
				<div className="container text-right float-right">
					<button
						className="btn btn-primary mx-2"
						onClick={handleUpCaseClick}
					>
						Convert to uppercase
					</button>

					<button
						className="btn btn-primary mx-2"
						onClick={handleLowCaseClick}
					>
						Convert to Lowercase
					</button>
					<button
						className="btn btn-primary mx-2"
						onClick={handleClearClick}
					>
						Clear
					</button>
					<button
						className="btn btn-primary mx-2"
						onClick={handleCopyClick}
					>
						Copy Your Text
					</button>

					<button
						className="btn btn-primary mx-2"
						onClick={handleExtraSpaces}
					>
						Remove Extra Spaces
					</button>
					<br />
					<br />
				</div>
				<div
					style={{
						color: props.mode === "light" ? "black" : "white",
					}}
				>
					<h2>Preview</h2>
					{text}
				</div>
			</div>
			<br />
			<br />
			<br />
		</>
	);
}

export default TextForm;
