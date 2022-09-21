import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import AnimatedLetters from '../AnimatedLetters'
import './index.scss'
import MatrixRain from '../MatrixRain'
import Loader from 'react-loaders'

const Home = () => {
    const [letterClass, setLetterClass] = useState('text-animate')
    const nameArray = [' ', 'D', 'i', 'g', 'i', 'd', 'o', 'l', 'l', 'i']
    const jobArray = ['S', 'o', 'f', 't', 'w', 'a', 'r', 'e', ' ', 'e', 'n', 'g', 'i', 'n', 'e', 'e', 'r', '.']

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
            <AnimatedLetters letterClass={letterClass}
            strArray={jobArray} 
            idx={18}/>
            </h1>
            <h2>
            Creative Coder / 3D Print Specialist
            </h2>
            <Link to="/contact" className='flat-button'>CONTACT ME</Link>
        </div>
    </div>
    <Loader type="pacman" />
    </>
)

}

export default Home