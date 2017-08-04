import React, { Component } from 'react';
import MyNavbar from './modules/MyNavbar.jsx';
import Home from './modules/Home.jsx'
import {Route, Switch} from 'react-router-dom'
import Eateries from './modules/Eateries.jsx'

class App extends Component {
  	render() {
		return (
			<div>
				<MyNavbar/>
				<Switch>
					<Route exact path="/" component={Home}/>
					<Route exact path="/eateries" component={Eateries}/>
				</Switch>
			</div>
		);
  	}
}

export default App;
