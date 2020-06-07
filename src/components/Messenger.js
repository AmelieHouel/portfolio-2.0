import React, { Component } from "react";

export default class Messenger extends Component {
	render() {
		return (
			<section className='flex-column center' style={{}}>
				<h2>Besoin d'une réponse rapide comme l'éclair ?</h2>
				<div
					style={{
						width: "800px",
						height: "590px",
                        border: "3px solid #919FC5",
                        borderRadius: '20px',
					}}
				></div>
			</section>
		);
	}
}
