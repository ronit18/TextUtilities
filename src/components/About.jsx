import React from "react";

const About = (props) => {
	return (
		<>
			<div
				className="container"
				style={{
					color: props.mode === "dark" ? "white" : "black",
				}}
			>
				<h1>About Us</h1>
				<div
					className="accordion"
					id="accordionExample"
					style={{
						color: props.mode === "dark" ? "white" : "black",
					}}
				>
					<div
						className="accordion-item"
						style={{
							backgroundColor:
								props.mode === "dark" ? "black" : "white",
							color: props.mode === "dark" ? "white" : "black",
						}}
					>
						<h2
							className="accordion-header"
							id="headingOne"
							style={{
								backgroundColor:
									props.mode === "dark" ? "black" : "white",
								color:
									props.mode === "dark" ? "white" : "black",
							}}
						>
							<button
								className="accordion-button"
								type="button"
								data-bs-toggle="collapse"
								data-bs-target="#collapseOne"
								aria-expanded="true"
								aria-controls="collapseOne"
								style={{
									backgroundColor:
										props.mode === "dark"
											? "black"
											: "white",
									color:
										props.mode === "dark"
											? "white"
											: "black",
								}}
							>
								Accordion Item #1
							</button>
						</h2>
						<div
							id="collapseOne"
							className="accordion-collapse collapse show"
							aria-labelledby="headingOne"
							data-bs-parent="#accordionExample"
						>
							<div
								className="accordion-body"
								style={{
									backgroundColor:
										props.mode === "dark"
											? "black"
											: "white",
									color:
										props.mode === "dark"
											? "white"
											: "black",
								}}
							>
								<strong>
									This is the first item's accordion body.
								</strong>{" "}
								Lorem ipsum dolor sit amet consectetur
								adipisicing elit. Dolores eaque unde quisquam
								nihil natus voluptatem ad quos. Error magnam ea
								ipsam saepe, minus ipsa in maiores fugiat
								laboriosam sit tempora consequuntur quas
								perspiciatis inventore rerum reprehenderit,
								commodi id nesciunt architecto? Ad ipsam
								exercitationem accusamus nobis.
							</div>
						</div>
					</div>
					<div
						className="accordion-item"
						style={{
							backgroundColor:
								props.mode === "dark" ? "black" : "white",
							color: props.mode === "dark" ? "white" : "black",
						}}
					>
						<h2 className="accordion-header" id="headingTwo">
							<button
								className="accordion-button collapsed"
								type="button"
								data-bs-toggle="collapse"
								data-bs-target="#collapseTwo"
								aria-expanded="false"
								aria-controls="collapseTwo"
								style={{
									backgroundColor:
										props.mode === "dark"
											? "black"
											: "white",
									color:
										props.mode === "dark"
											? "white"
											: "black",
								}}
							>
								Accordion Item #2
							</button>
						</h2>
						<div
							id="collapseTwo"
							className="accordion-collapse collapse"
							aria-labelledby="headingTwo"
							data-bs-parent="#accordionExample"
						>
							<div className="accordion-body">
								<strong>
									This is the second item's accordion body.
								</strong>{" "}
								Lorem ipsum dolor sit amet consectetur
								adipisicing elit. Labore veritatis ex, incidunt
								voluptates maxime eveniet quia provident nihil
								error voluptatum perferendis vero rem porro.
								Repellat eos, incidunt vel, accusantium
								veritatis fugiat commodi voluptatem voluptate,
								alias placeat expedita. Quisquam voluptate
								dolorem molestiae vero sed corrupti totam!
							</div>
						</div>
					</div>
					<div className="accordion-item">
						<h2 className="accordion-header" id="headingThree">
							<button
								className="accordion-button collapsed"
								type="button"
								data-bs-toggle="collapse"
								data-bs-target="#collapseThree"
								aria-expanded="false"
								aria-controls="collapseThree"
								style={{
									backgroundColor:
										props.mode === "dark"
											? "black"
											: "white",
									color:
										props.mode === "dark"
											? "white"
											: "black",
								}}
							>
								Accordion Item #3
							</button>
						</h2>
						<div
							id="collapseThree"
							className="accordion-collapse collapse"
							aria-labelledby="headingThree"
							data-bs-parent="#accordionExample"
							style={{
								backgroundColor:
									props.mode === "dark" ? "black" : "white",

								color:
									props.mode === "dark" ? "white" : "black",
							}}
						>
							<div className="accordion-body">
								Lorem ipsum dolor sit amet consectetur
								adipisicing elit. Facilis commodi repellat animi
								est velit perspiciatis quod quisquam. Tenetur
								quis quia harum deleniti magni iste, nesciunt
								debitis esse expedita doloribus saepe quas
								corrupti quaerat perferendis asperiores modi
								quasi officiis? Sequi repudiandae, suscipit
								dolorum sed eum est.
							</div>
						</div>
					</div>
				</div>
				<br />

				<br />
			</div>
		</>
	);
};

export default About;
