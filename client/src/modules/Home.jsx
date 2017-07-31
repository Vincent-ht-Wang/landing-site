import React, { Component } from 'react';
import SectionOne from './SectionOne.jsx';
import SectionTwo from './SectionTwo.jsx';
import SectionThree from './SectionThree.jsx';

class Home extends Component {
    render() {
        return(
            <div>
                <SectionOne/>
                <SectionTwo/>
                <SectionThree/>
            </div>
        )
    }
}

export default Home;