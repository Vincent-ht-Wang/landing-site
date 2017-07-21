import React, { Component } from 'react';
import {Grid} from 'react-bootstrap';
import {Row} from 'react-bootstrap';
import {Col} from 'react-bootstrap';
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
