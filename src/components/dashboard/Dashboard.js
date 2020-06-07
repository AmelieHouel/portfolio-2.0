import React, { Component } from "react";

//components

import StoryDoor from '../dashboard/StoryDoor';
import GaleryDoor from '../dashboard/GaleryDoor';
import ProjectsDoor from '../dashboard/ProjectsDoor';
import ContactDoor from '../dashboard/ContactDoor';




//components

class Dashboard extends Component {
	render() {
		return (
			<div
				className='flex-row center'
				style={{flexWrap: "wrap", justifyContent: "space-evenly", height: '80vh'}}
			>
				<div style={{height: '100%', justifyContent: 'space-evenly'}} className='flex-column center'>
					<StoryDoor />
					<GaleryDoor />
				</div>
				<ProjectsDoor />
				<ContactDoor/>

			</div>
		);
	}
}

export default Dashboard;
