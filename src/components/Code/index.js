import React from 'react'
import Loader from 'react-loaders'
import './index.scss'
import { TypeAnimation } from 'react-type-animation';
import codePageData from '../../data/codepage.json'


const Code = () => {

const renderCodePage = (codepage) => {
    return (
        <div className="images-container">
            {
                codepage.map((code, idx) => {
                    return (
                        <div className="project-box"> 
                        <div className="image-box" key={idx}>
                            <img src={code.cover} 
                            className="codepageImage"
                            alt="site view"/>
                            </div>
                            <div className="code-project-details">
                            <div className="content">
                                <p className="title">
                                    {code.title}</p>
                                    <h4 className="description" >
                                        {code.description}
                                    </h4>
                                    <button className="btn"
                                    onClick={() => window.open(code.url)} >
                                        View
                                    </button>
                                    </div>

                            
                            </div>
                        </div>
                    )
                })
            }

        </div>
    );
        }

    return (
       <>
       <div className="container code-page">
        <h1 className="page-title">
        <TypeAnimation
    sequence={[
    1000,
    'Dev Work.',
    ]}
    speed={40} 
    wrapper="span" 
    repeat={Infinity} 
  />
  <h2>
        I joined SheCodes in 2020 and absolutely fell in love with coding. <br />
        I'm self taught but that makes it more exciting, below are some projects I've been working on in my spare time. 
    </h2>
        </h1>
        <div>{renderCodePage(codePageData.codepage)}</div>
        </div>
        <Loader type="pacman" />
        </>
    )
}


export default Code 