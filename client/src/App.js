import React, { Component } from 'react';
import MyNavbar from './modules/MyNavbar.jsx';
import SectionOne from './modules/SectionOne.jsx'
import SectionTwo from './modules/SectionTwo.jsx'
import SectionThree from './modules/SectionThree.jsx';

class App extends Component {
  	render() {
		return (
			<div className="App">
				<MyNavbar/>
				<SectionOne/>
				<SectionTwo/>
				<SectionThree/>
			</div>
		);
  	}
}

export default App;
