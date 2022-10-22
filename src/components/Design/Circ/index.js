import React from "react";
import './index.scss'
import Loader from "react-loaders";

const Circ = () => {
    return ( 
        <>
        <div className="design-circ-page inside-design-page container">
            <h1>Circ</h1>
            <h2>
                A collection using Latex to aid fashion design with sustainability. 
                <br /> 
                Rather than the well known black, skin-tight latex looks, I decided to go for a bright colour pallete and loose pieces to show the diversity of such a sustainable fabric.
            </h2>
            <div className="shoot-pics" >
             <img src="../../images/circ1.JPG" alt="fashion" className="designCoverImage"></img>
            <img src="../../images/circ2.JPG" alt="fashion" className="designCoverImage"></img>
             <img src="../../images/circ3.JPG" alt="fashion" className="designCoverImage"></img>
            <img src="../../images/circ4.JPG" alt="fashion" className="rotated-image"></img>
            <img src="../../images/circ5.JPG" alt="fashion" className="designCoverImage"></img>
            </div>
        <Loader type="pacman" />
        </div>
        </>
     
    )
    
}
export default Circ