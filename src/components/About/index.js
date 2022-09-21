import { faAngular, faCss3, faGitAlt, faHtml5, faJsSquare, faNodeJs, faReact } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useEffect, useState } from 'react'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import './index.scss'

const About = () => {
    
        const [letterClass, setLetterClass] = useState('text-animate')
        

    return (
        <>
        <div className='container about-page' >
            <div className='text-zone' >
                <h1>
                    <AnimatedLetters 
                    letterClass={letterClass}
                    strArray={['A', 'b', 'o', 'u', 't', ' ', 'm', 'e']} 
                    idx={15}
                    />
                </h1>
                <p>
                    I'm a very ambitious engineer looking for a role in a reputable IT company with opportunities to work with the latest technologies on challenging and diverse projects
                </p>
                <p>
                    I'm quietly confident, naturally curious and perpetually working on improving my chops one design problem at a time.
                </p>
                <p>If I need to define myself in one sentence it would be that I am a family person, engineer, friendly being, fan of cute things, photography enthusiast and tech-obsessed</p>
            </div>            
        </div>
        <Loader type="pacman" />
        </>
    )
}

export default About