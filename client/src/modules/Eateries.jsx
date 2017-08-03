import React, { Component } from 'react';
import {Jumbotron} from 'react-bootstrap';
import SectionFour from './SectionFour.jsx';
import SectionFive from './SectionFive.jsx';
import SectionSeven from './SectionSeven.jsx';

class Eateries extends Component {
    render() {
        return(
            <div>
                <SectionFour/>
                <SectionFive/>
                <SectionSeven/>
            </div>
        )
    }
}

export default Eateries;