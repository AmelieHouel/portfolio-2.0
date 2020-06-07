import React from "react";

function ContactDoor() {
	return (
		<div
            className='flex-column center'
			style={{
                border: "3px solid #919FC5",
                padding: '20px 40px',
                width: '280px',
                height: '480px',
                borderRadius: '30px',
                justifyContent: "space-evenly",
                margin: '10px'
			}}
		>
			<h2 style ={{}}>Contact</h2>
			<form className='flex-column' style={{ justifyContent: "space-evenly" }}>
                <label style={{fontSize: '18px', marginBottom: '10px'}}>
                    Votre identité :
                    </label>
				<input style={{width: '210px', height: '42px', border: '2px solid #E6E6E6', borderRadius: '10px'}} type='text' name='idenity' />
                <label style={{fontSize: '18px', marginBottom: '10px'}}>
                    Votre email :
                    </label>
				<input style={{width: '210px', height: '42px', border: '2px solid #E6E6E6', borderRadius: '10px'}} type='email' name='email' />
                <label style={{fontSize: '18px'}}>
                    Votre Message :
                    </label>
				<textarea style={{border: '2px solid #E6E6E6', borderRadius: '10px',  marginBottom: '10px'}} name='message' cols='30' rows='10'></textarea>
				<input className='btn' type='submit' value='Envoyer' />
			</form>
		</div>
	);
}

export default ContactDoor;
