import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import AnimatedLetters from '../AnimatedLetters'
import './index.scss'
import { TypeAnimation } from 'react-type-animation';

import MatrixRain from '../MatrixRain'
import Loader from 'react-loaders'

const Home = () => {
    const [letterClass, setLetterClass] = useState('text-animate')
    const nameArray = [' ', 'D', 'i', 'g', 'i', 'd', 'o', 'l', 'l', 'i', '.']
    const jobArray = ['S', 'o', 'f', 't', 'w', 'a', 'r', 'e', ' ', 'E', 'n', 'g', 'i', 'n', 'e', 'e', 'r', ' ', 'a', 'n', 'd']
    const secondJobArray = ['3', 'D', ' ', 'P', 'r', 'i', 'n', 't', ' ', 'D', 'e', 's', 'i', 'g', 'n', 'e', 'r', '.']
return (
    <>
    <div className="container home-page">
        <MatrixRain />
        <div className="text-zone">
            <h1>
                <span className={letterClass}>H</span>
                <span className={`${letterClass} _12`}>i, </span>
                <br />
                <span className={`${letterClass} _13`}>I</span>
                <span className={`${letterClass} _14`}>'m</span>
            <AnimatedLetters letterClass={letterClass}
            strArray={nameArray} 
            idx={15}/>
            <br />
            <TypeAnimation
    sequence={[
    3000,
    'Software Engineer.',
    2000,
    '3D Print Designer.',
    2000,
    'Digital Artist.',
    2000,
    ' '
    ]}
    speed={40} 
    wrapper="span" 
    repeat={Infinity} 
  />
            </h1>
            <Link to="/about" className='flat-button'>CONTACT ME</Link>
        </div>
        <Link to="/about" className='flat-button-responsive'>CONTACT ME</Link>

    </div>
    <Loader type="pacman" />
    </>
)

}

export default Home