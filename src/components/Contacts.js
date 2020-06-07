import React, { Component } from "react";

//assets

import github from "../assets/social/github.svg";
import linkedin from "../assets/social/linkedin.svg";
import behance from "../assets/social/behance.svg";
import gitlab from "../assets/social/gitlab.svg";

export default class Contacts extends Component {
	render() {
		return (
			<div
				className='flex-row center wrap'
				style={{ justifyContent: "space-evenly" }}
			>
				<div className='flex-column'>
					<h2 style={{ color: "#919FC5" }}>Contact</h2>
					<form className='flex-column contact-container'>
						<label style={{ fontSize: "18px" }}>
							Votre identité :
						</label>
						<input className='input' type='text' name='identity' />
						<label style={{ fontSize: "18px" }}>
							Votre email :
						</label>
						<input className='input' type='email' name='email' />
						<label style={{ fontSize: "18px" }}>Votre Message :</label>
						<textarea
							style={{
								border: "2px solid #E6E6E6",
								borderRadius: "10px",
								marginBottom: "10px",
							}}
							name='message'
							cols='30'
							rows='10'
						></textarea>
						<input className='btn' type='submit' value='Envoyer' />
					</form>
				</div>
				<div>
					<h2 style={{ color: "#919FC5" }}>Réseaux sociaux</h2>
					<div className='flex-column center contact-container'>
						<img src={github} alt='icon of github' />
						<img
							style={{ marginTop: "5px" }}
							src={linkedin}
							alt='icon of linkedin'
						/>
						<img
							style={{ marginTop: "5px" }}
							src={gitlab}
							alt='icon of gitlab'
						/>
						<img
							style={{ marginTop: "5px" }}
							src={behance}
							alt='icon of behance'
						/>
					</div>
				</div>
			</div>
		);
	}
}
