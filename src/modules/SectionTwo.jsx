import React, { Component } from 'react';
import {Jumbotron} from 'react-bootstrap';

class SectionTwo extends Component {
    render() {
        return(
            <Jumbotron id="jumbotronTwo">
                <h2 className = "sectionTwoL1">
                    Eateries <span id="still">still</span> have <span id="unsold"> fresh, unsold</span> food everyday during <span id="closing">closing</span> time <p></p>
                    <div id="sectionTwoDiscountDivider">
                        They want to sell this at a <span id="discount">discount</span>, before it goes in the <span id="trash">trash</span> 
                        <p className="sectionTwoP1">
                        Food waste is the 3rd largest contributor to global warming, emitting greenhouse gases into the atmosphere when they decompose
                        </p>
                    </div>
                    <strong><span id="grubsnatch">grub</span>snatch</strong> <span id="helps">helps</span> you find these deals
                    <p className="sectionTwoP1">
                    You're saving money while also saving the planet
                    </p>
                </h2>
            </Jumbotron>
        )
    }
}

export default SectionTwo;