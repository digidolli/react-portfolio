import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import './index.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faClose, faCode, faHome, faShirt, faUser } from "@fortawesome/free-solid-svg-icons"
import { faGithub, faInstagram, faLinkedin} from '@fortawesome/free-brands-svg-icons'
 

const Sidebar = () => {
    const [showNav, setShowNav] = useState(false);

    return (
    <div className='nav-bar'>
        <nav className={showNav ? 'mobile-show' : ''}>
    <NavLink 
    onClick={() => setShowNav(false)}
    exact="true" activeclassname="active" to="/">
        <FontAwesomeIcon icon={faHome} color="#204829" />
    </NavLink>
    <NavLink 
    onClick={() => setShowNav(false)}
    exact="true" activeclassname="active" className="code-link" to="/code">
        <FontAwesomeIcon icon={faCode} color="#204829" /> 
    </NavLink>
    <NavLink 
    onClick={() => setShowNav(false)}
    exact="true" activeclassname="active" className="design-link" to="/design">
        <FontAwesomeIcon icon={faShirt} color="#204829" /> 
    </NavLink >
    <NavLink onClick={() => setShowNav(false)}
    exact="true" activeclassname="active" className="about-link" to="/about">
        <FontAwesomeIcon icon={faUser} color="#204829" />
    </NavLink>
    <FontAwesomeIcon 
    onClick={() => setShowNav(false)}
    icon={faClose}
    size="3x"
    className='close-icon'
    />
    </nav>
    <ul>
        <li>
            <a target="_blank" rel='noreferrer' href="https://www.linkedin.com/in/sade-okunoren-5809631b2/">
                <FontAwesomeIcon icon= {faLinkedin} color="#0e0e1b"/>
            </a>
        </li>
        <li>
            <a target="_blank" rel='noreferrer' href="https://github.com/digidolli">
                <FontAwesomeIcon icon= {faGithub} color="#0e0e1b"/>
            </a>
        </li>
        <li>
            <a target="_blank" rel='noreferrer' href="https://www.instagram.com/digidolli">
                <FontAwesomeIcon icon= {faInstagram} color="#0e0e1b"/>
            </a>
        </li>
    </ul>
    <FontAwesomeIcon 
    onClick={() => setShowNav(true)}
    icon={faBars}  
    size="3x"
    className="hamburger-icon"
    />
    </div>
    
    )
}

export default Sidebar