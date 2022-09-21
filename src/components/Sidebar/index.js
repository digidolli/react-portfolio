import { NavLink } from 'react-router-dom'
import './index.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCode, faEnvelope, faHome, faPhotoFilm, faUser } from "@fortawesome/free-solid-svg-icons"
import { faGithub, faInstagram, faLinkedin, faSpaceAwesome } from '@fortawesome/free-brands-svg-icons'
 

const Sidebar = () => (
    <div className='nav-bar'>
        <nav>
    <NavLink exact="true" activeclassname="active" to="/">
        <FontAwesomeIcon icon={faHome} color="#204829" />
    </NavLink>
    <NavLink exact="true" activeclassname="active" className="about-link" to="/about">
        <FontAwesomeIcon icon={faUser} color="#204829" />
    </NavLink>
    <NavLink exact="true" activeclassname="active" className="contact-link" to="/contact">
        <FontAwesomeIcon icon={faEnvelope} color="#204829" /> 
    </NavLink>
    <NavLink exact="true" activeclassname="active" className="print-link" to="/3d-print">
        <FontAwesomeIcon icon={faSpaceAwesome} color="#204829" /> 
    </NavLink>
    <NavLink exact="true" activeclassname="active" className="code-link" to="/code">
        <FontAwesomeIcon icon={faCode} color="#204829" /> 
    </NavLink>
    <NavLink exact="true" activeclassname="active" className="blog-link" to="/blog">
        <FontAwesomeIcon icon={faPhotoFilm} color="#204829" /> 
    </NavLink>
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
    </div>
)

export default Sidebar