import React, { Component } from "react";
import { Link } from 'react-router-dom';

//assets

import projet1 from "../assets/projects/projet1.jpg";
import projet2 from "../assets/projects/projet2.jpg";
import projet3 from "../assets/projects/projet3.jpg";
import projet4 from "../assets/projects/projet4.jpg";
import projet5 from "../assets/projects/projet5.jpg";
import projet6 from "../assets/projects/projet6.jpg";

class Projects extends Component {
	render() {
		return (
			<section style={{ marginLeft: "160px", marginRight: "160px" }}>
				<h2 style={{ color: "#919FC5", marginBottom: "20px" }}>Mes projets</h2>
				<div
					className='flex-row center wrap big-container'
				>
					<div>
						<Link to='/project'><img className='img' src={projet1} alt='projet 1' /></Link>
						<img className='img' src={projet2} alt='projet 2' />
						<img className='img' src={projet3} alt='projet 3' />
					</div>
					<div>
						<img className='img' src={projet4} alt='projet 4' />
						<img className='img' src={projet5} alt='projet 5' />
						<img className='img' src={projet6} alt='projet 6' />
					</div>
				</div>
			</section>
		);
	}
}

export default Projects;
