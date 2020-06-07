import React, { Component } from "react";
import shapeHome from "../assets/shapeHome.svg";

class Start extends Component {
	render() {
		return (
			<div
				style={{
					display: "flex",
					width: "100%",
					height: "80%",
					justifyContent: "center",
					alignItems: "center",
				}}
			>
				<div style={{ paddingRight: "80px" }}>
					<h1
						style={{ fontWeight: "bold", color: "#919FC5", fontSize: "2.5em" }}
					>
						Amélie Houël
					</h1>
					<h2 style={{ fontWeight: "normal", fontSize: "1.875em" }}>
						Développeuse Web
					</h2>
					<h3
						style={{
							fontWeight: "lighter",
							color: "#919FC5",
							fontSize: "1.625em",
						}}
					>
						UX/UI designer
					</h3>
				</div>
				<img src={shapeHome} alt='shape_home'/>
			</div>
		);
	}
}

export default Start;
