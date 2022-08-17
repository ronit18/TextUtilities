import About from "./components/About";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import React, { useState } from "react";
import Alert from "./components/Alert";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
	const [mode, setMode] = useState("light");
	const [alert, setAlert] = useState(null);

	const showAlert = (message, type) => {
		setAlert({
			message: message,
			type: type,
		});
		setTimeout(() => {
			setAlert(null);
		}, 1500);
	};
	const toggleMode = () => {
		if (mode === "light") {
			setMode("dark");
			document.body.style.backgroundColor = "black";
			showAlert("Dark mode was enabled.", "success");
		} else {
			setMode("light");
			document.body.style.backgroundColor = "white";
			showAlert("Light mode was enabled.", "success");
		}
	};

	return (
		<>
			<Router>
				<Navbar mode={mode} toggleMode={toggleMode} />
				<Alert alert={alert} />
				<div className="container">
					<Routes>
						<Route
							extact
							path="/"
							element={
								<TextForm mode={mode} showAlert={showAlert} />
							}
						/>
						<Route
							extact
							path="/about"
							element={<About mode={mode} />}
						/>
					</Routes>
				</div>
			</Router>
		</>
	); //return
} //function

export default App;
