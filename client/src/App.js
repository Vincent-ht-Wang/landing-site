import React, { Component } from 'react';
import MyNavbar from './modules/MyNavbar.jsx';
import Home from './modules/Home.jsx'
import {Route, Switch} from 'react-router-dom'
import Eateries from './modules/Eateries.jsx'
import ThankYou from './modules/ThankYou.jsx'
import ThankYouEatery from './modules/ThankYouEatery.jsx'

class App extends Component {
   	render() {
		return (
			<div>
				<MyNavbar/>
				<Switch>
					<Route exact path="/" component={Home}/>
					<Route exact path="/eateries" component={Eateries}/>
					<Route exact path="/thank-you" component={ThankYou}/>
					<Route exact path="/thank-you-eatery" component={ThankYouEatery}/>
				</Switch>
			</div>
		);
  	}
}

export default App;
