import { faAngular, faCss3, faGitAlt, faHtml5, faJsSquare, faNodeJs, faReact } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useEffect, useState } from 'react'
import Loader from 'react-loaders'
import { TypeAnimation } from 'react-type-animation';
import AnimatedLetters from '../AnimatedLetters'
import './index.scss'

const About = () => {
    
        const [letterClass, setLetterClass] = useState('text-animate')
        

    return (
        <>
        <div className='container about-page' >
            <div className='text-zone' >
                <h1>
                    <TypeAnimation
    sequence={[
    1500,
    'About Me.',
    1000
    ]}
    speed={10} 
    wrapper="span" 
    repeat={0} 
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

            <div className='text-zone'>
                
                <div className='contact-form'>
                    <form>
                        <ul>
                            <li className='half'>
                                <input type="text" name="name" placeholder="Name" required />
                            </li>
                            <li className='half'>
                                <input type="email" name="email" placeholder="Email" required />
                            </li>
                            <li>
                                <input placeholder="Subject" type="text" name="subject" required />
                            </li>
                            <li>
                                <textarea placeholder="Message" name="message" required></textarea>
                            </li>
                            <li>
                                <input type="submit" className="flat-button" value="SEND" />
                            </li>
                        </ul>
                    </form>
                </div>
            
        </div>
        <Loader type="pacman" />
        </>
    )
}

export default About