import { Link, NavLink } from 'react-router-dom'
import './index.scss'
import LogoS from '../../assets/images/logo-s.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faHome, faUser } from "@fortawesome/free-solid-svg-icons"
import { faGithub, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons'

const Sidebar = () => (
    <div className='nav-bar'>
        <Link className='logo' to='/'>
            <img src={LogoS} alt="logo"/>
        </Link>
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