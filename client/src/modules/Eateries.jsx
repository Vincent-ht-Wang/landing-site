import React, { Component } from 'react';
import SectionFour from './SectionFour.jsx';
import SectionFive from './SectionFive.jsx';
import SectionSix from './SectionSix.jsx';

class Eateries extends Component {
    render() {
        return(
            <div>
                <SectionFour/>
                <SectionFive/>
                <SectionSix/>
            </div>
        )
    }
}

export default Eateries;