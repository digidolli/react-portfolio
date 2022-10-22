import './index.scss'
import { TypeAnimation } from 'react-type-animation';
import Loader from 'react-loaders';
import { Link } from 'react-router-dom';


const Design = () => {
    return (
        <>
        <div className="design-page ">
            <h1>
                <TypeAnimation
    sequence={[
    1000,
    'Design Work.',
    ]}
    speed={40} 
    wrapper="span" 
    repeat={Infinity} 
  />
    </h1>    
    <h2>
        I combine my love for tech with my knowledge of fashion to create super cute garments! <br /> My 3D printed designs are still in development, so enjoy some of my past creations. Click to explore the full collections.
    </h2>
    <div className="cover-image-container container">

        <Link exact="true" className="design-link cover-images" to="/design/candy" >
            <img src="../../images/candy-cover.JPG" alt="fashion" className="designCoverImage"></img>
            <div className="content">
                <p className="title">Candy, 2019</p>
                                    <h4 className="description" >
                                        Latex collection cosisting of candy colours. 
                                    </h4>
            </div>
        </Link>
         <Link exact="true" className="design-link cover-images" to="/design/thirteen" >
            <img src="../../images/thirteen-4.jpg" alt="fashion" className="designCoverImage"></img>
            <div className="content">
                <p className="title">THIRTEEN, 2020</p>
                                    <h4 className="description" >
                                        Collection inspired by the Thirteenth Amendment, <br /> in honour of Black History Month 
                                    </h4>
            </div>
        </Link>
        <Link exact="true" className="design-link cover-images" to="/design/circ" >
            <img src="../../images/circ.jpeg" alt="fashion" className="designCoverImage"></img>
            <div className="content">
                <p className="title">Circ, 2019 </p>
                                    <h4 className="description" >
                                        A circus themed collection 
                                    </h4>
            </div>
        </Link>
        
    </div>
    </div>

    <Loader type="pacman" />
     </>
    )
}

export default Design