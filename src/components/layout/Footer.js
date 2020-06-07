import React, { Component } from "react";
import { Link } from "react-router-dom";

//assets
import down from "../../assets/footer/down.svg";
import messenger from "../../assets/footer/messenger.svg";
import back from "../../assets/footer/back.svg";

class Footer extends Component {
	state = {
        isBack: false,
	};

	isback = () => {
		this.setState({ back: true });
    };
    
    isntback = () => {
        this.setState({ back: false });
    }

	render() {
		if (this.state.back) {
			return (
				<div className='footer'>
					<Link to='/'>
						<img
							onClick={this.isntback}
							src={back}
							className='down'
							alt='arrow-down'
						/>
					</Link>
					<Link to='/Messenger'>
						<img src={messenger} className='messenger' alt='Messenger' />
					</Link>
				</div>
			);
		}

		return (
			<div className='footer'>
				<Link to='/Dashboard'>
					<img
						onClick={this.isback}
						src={down}
						className='down'
						alt='arrow-down'
					/>
				</Link>
				<Link className='flex-row center' to='/Messenger'>
					<label style={{marginRight: '10px', textDecoration: 'none', color: 'black'}}>Le Chat</label>
					<img src={messenger} className='messenger' alt='Messenger' />
				</Link>
			</div>
		);
	}
}

export default Footer;
