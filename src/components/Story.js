import React, { Component } from "react";

//assets

import myself from "../assets/myself.jpg";
import book from "../assets/PDF/Book-AH1.pdf"
import cv from "../assets/PDF/CV-Amélie Houël-stage.pdf"

class Story extends Component {
	render() {
		return (
			<section style={{ marginLeft: "160px", marginRight: "160px" }}>
				<h2 style={{ color: "#919FC5", marginBottom: "20px" }}>Mon Histoire</h2>
				<div className='flex-row center big-container'>
					<img
						style={{ borderRadius: "20px", width: "266px", height: "auto" }}
						src={myself}
						alt='pic of me'
					/>

					<div
						className='flex-column'
						style={{
							maxWidth: "480px",
							justifyContent: "space-around",
							margin: "30px",
						}}
					>
						<p
							style={{
								maxHeight: "400px",
								overflow: "scroll",
								fontSize: "20px",
							}}
						>
							Il y a un an, j’ai démarré une reconversion professionnelle en
							intégrant un bachelor Web au sein de l’école HETIC. En 1 an, j’ai
							pu y apprendre principalement le design web mais aussi les bases
							du développement front end et back end. Aujourd’hui, je me
							spécialise dans le domaine du développement web afin de rassembler
							tout ce que je recherche pour ma future vie professionnelle.
							L’étude des comportements humains et la créativité avec l’UX/UI
							design, puis les nouvelles technologies et la technique avec le
							développement web. Afin de développer ma pratique et mes
							compétences dans ce domaine, je suis à la recherche d'un stage
							d’une durée de 01 mois à compter du 01 mars 2020.
						</p>
						<div style={{ marginTop: "10px" }} className='flex-row'>
							<a
								style={{ marginRight: "10px" }}
								className='btn'
								href={cv}
								rel="noopener noreferrer"
								target='_blank'
							>
								Mon Cv
							</a>
							<a
								className='btn'
								href={book}
								rel="noopener noreferrer"
								target='_blank'
							>
								Mon Book
							</a>
						</div>
					</div>
				</div>
			</section>
		);
	}
}

export default Story;
