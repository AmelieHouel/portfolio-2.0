import React from "react";

//assets
import projectIcon from "../../assets/dashboard/projectIcon.svg";

function ProjectsDoor() {
	return (
		<div
        className='flex-column center'
			style={{
                border: "3px solid #919FC5",
                justifyContent: "space-around",
				borderRadius: "30px",
                padding: "20px 40px",
                margin: '10px',
                width: '480px',
                height: '480px'
			}}
		>
			<h2 style={{}}>Projets</h2>
			<img
				style={{}}
				src={projectIcon}
				alt='Draw of project'
			/>
			<button
				style={{
					backgroundColor: "#AFD2E9",
					border: "none",
					padding: "15px 25px",
					color: "white",
                    borderRadius: "10px",
                    marginTop: '10px'
				}}
			>
				Découvrir
			</button>
		</div>
	);
}

export default ProjectsDoor;
