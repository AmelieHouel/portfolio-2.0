import React, { Component } from "react";
import { Link } from "react-router-dom";

//assets
import Logo from "../../assets/header/Logo.svg";
import secret_key from "../../assets/header/secret_key.svg";

class Header extends Component {
	render() {
		return (
			<div className='header'>
				<Link to='/'>
					<img src={Logo} alt='logo' />
				</Link>
				<ul className='navigation'>
					<Link to='/dashboard'>Tableau de bord</Link>
					<Link to='/story'>
						<li>Histoire</li>
					</Link>
					<Link to='/projects'>
						<li>Projets</li>
					</Link>
					<Link to='/Contacts'>
						<li>Contacts</li>
					</Link>
				</ul>
				<img src={secret_key} alt='secret key' />
			</div>
		);
	}
}

export default Header;
