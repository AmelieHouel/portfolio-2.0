import React, { Component } from "react";

//assets

import pointerClick from "../../assets/dashboard/pointerClick.svg";
import galeryIcon from "../../assets/dashboard/galeryIcon.svg";

class GaleryDoor extends Component {
	render() {
		return (
			<div
                className='flex-column center'
				style={{
                    border: "3px solid #919FC5",
                    justifyContent: 'space-around',
                    width: '280px',
                    height: '220px',
					borderRadius: "30px",
                    padding: "12px 50px",
				}}
			>
				<h2>Galerie photos</h2>
				<img  src={galeryIcon} alt='icon of my story' />
				<button className='btn'>
					<img src={pointerClick} alt='pointerClick' />
				</button>
			</div>
		);
	}
}

export default GaleryDoor;
