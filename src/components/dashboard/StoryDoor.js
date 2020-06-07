import React, { Component } from "react";

//assets

import storyIcon from "../../assets/dashboard/storyIcon.svg";
import pointerClick from "../../assets/dashboard/pointerClick.svg";

class StoryDoor extends Component {
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
                    padding: "12px 20px"
				}}
			>
				<h2>Histoire</h2>
				<img src={storyIcon} alt='icon of my story' />
				<button className='btn' style={{}}>
					<img src={pointerClick} alt='pointerClick' />
				</button>
			</div>
		);
	}
}

export default StoryDoor;
