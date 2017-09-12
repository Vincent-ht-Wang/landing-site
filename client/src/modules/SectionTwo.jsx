import React, { Component } from 'react';
import {Jumbotron} from 'react-bootstrap';

class SectionTwo extends Component {
    render() {
        return(
            <Jumbotron id="jumbotronTwo">
                <h2 className = "sectionTwoHeader">
                    Eateries <span className="greenText">still</span> have <span className="greenText"> fresh, unsold</span> food everyday during <span className="redText">closing</span> time <p></p>
                </h2>        
                    <h4 className="sectionTwoSubtext">
                        Cafes might have sandwiches or pies left, bakeries might have pizza bread left, sushi stores have sushi rolls left, and so on
                    </h4>
                <h2 className = "sectionTwoHeader">
                They want to sell this at a <span className="greenText">discount</span>, before it goes in the <span className="redText">trash</span> 
                </h2>        
                    <h4 className="sectionTwoSubtext">
                        Food waste is the 3rd largest contributor to global warming, emitting greenhouse gases into the atmosphere when they decompose
                    </h4>
                <h2 className = "sectionTwoHeader">    
                    <strong><span className="redText">grubsnatch</span></strong> <span className="greenText">helps</span> you find these deals
                </h2>    
                    <h4 className="sectionTwoSubtext">
                        You're saving money while also saving the planet
                    </h4>
            </Jumbotron>
        )
    }
}

export default SectionTwo;