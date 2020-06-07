import React, { Component } from "react";

//assets
import projet1 from "../assets/projects/projet1.jpg";

class Project extends Component {
	render() {
		return (
			<section style={{ marginLeft: "160px", marginRight: "160px" }}>
				<h2 style={{ color: "#919FC5", marginBottom: "20px" }}>
					Musicbox by Daft Punk
				</h2>
				<div className='flex-row center wrap big-container'>
					<img
						style={{ width: "330px", height: "330px" }}
						src={projet1}
						alt=''
					/>
					<div className='flex-column' style={{justifyContent: 'space-evenly', height: '30vh'}}>
						<label style={{ fontWeight: "bold" }}> url/lien github </label>
						<p>https://loremipsum.com</p>

						<label style={{ fontWeight: "bold" }}>Techno / rôle </label>
						<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>

						<label style={{ fontWeight: "bold" }}> Description </label>
						<p style={{ width: "30vw" }}>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit.
							Pellentesque etiam duis ipsum adipiscing. Odio tortor, facilisi
							scelerisque tellus porttitor molestie arcu quis. Enim, ut bibendum
							id nullam magna non dictumst lacinia.
						</p>
					</div>
				</div>
			</section>
		);
	}
}

export default Project;
