import React from "react";
import './index.scss'
import Loader from "react-loaders";

const Thirteen = () => {
    return (
        <>
        <div className="design-thirteen-page inside-design-page container">
            <h1>THIRTEEN</h1>
            <h2>
                A collection using Latex to aid fashion design with sustainability. 
                <br /> 
                Rather than the well known black, skin-tight latex looks, I decided to go for a bright colour pallete and loose pieces to show the diversity of such a sustainable fabric.
            </h2>
            <div className="shoot-pics" >
             <img src="../../images/thirteen-1.png" alt="fashion" className="designCoverImage"></img>
            <img src="../../images/thirteen-2.jpeg" alt="fashion" className="designCoverImage"></img>
             <img src="../../images/thirteen-3.JPG" alt="fashion" className="designCoverImage"></img>
            <img src="../../images/thirteen-4.JPG" alt="fashion" className="rotated-image"></img>
                        <img src="../../images/thirteen-5.JPG" alt="fashion" className="designCoverImage"></img>

            </div>
        <Loader type="pacman" />
        </div>
        </>
    )
}

export default Thirteen