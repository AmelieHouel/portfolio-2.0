import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

//components
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import Dashboard from "./components/dashboard/Dashboard";
import Start from "./components/Start";

import Messenger from "./components/Messenger";
import Story from './components/Story';
import AllProjects from './components/AllProjects';
import Contacts from './components/Contacts';
import Project from './components/Project'


//css
import "./App.css";


class App extends Component {

    
	render() {

		const Home = () => {
			return <Start/>
		}

		return (
			<Router>
				<div style={{ height: "100vh" }}>
					<Header />
					<Switch>
						<Route exact path='/' component={Home} />
						<Route exact path='/Messenger' component={Messenger} />
						<Route exact path='/Dashboard' component={Dashboard} />
						<Route exact path='/Story' component={Story} />
						<Route exact path='/Projects' component={AllProjects} />
						<Route exact path='/Contacts' component={Contacts} />
						<Route exact path='/project' component={Project}/>
					</Switch>
					<Footer />

				</div>
			</Router>
		);
	}
}

export default App;
