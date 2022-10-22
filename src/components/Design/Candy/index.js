import React from "react";
import './index.scss'
import Loader from "react-loaders";

const Candy = () => {
    return ( 
        <>
        <div className="design-candy-page inside-design-page container">
            <h1>CANDY</h1>
            <h2>
                A collection using Latex to aid fashion design with sustainability. 
                <br /> 
                Rather than the well known black, skin-tight latex looks, I decided to go for a bright colour pallete and loose pieces to show the diversity of such a sustainable fabric.
            </h2>
            <div className="shoot-pics" >
             <img src="../../images/candy1.JPG" alt="fashion" className="designCoverImage"></img>
            <img src="../../images/candy2.JPG" alt="fashion" className="designCoverImage"></img>
             <img src="../../images/candy3.JPG" alt="fashion" className="designCoverImage"></img>
            <img src="../../images/candy4.JPG" alt="fashion" className="designCoverImage"></img>
            <img src="../../images/candy5.JPG" alt="fashion" className="designCoverImage"></img>
            </div>
        <Loader type="pacman" />
        </div>
        </>
    )
    
}
export default Candy