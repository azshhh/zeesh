import './index.scss'
import { Link, NavLink } from 'react-router-dom'
import LogoS from '../../assets/images/logo-s.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faHome,
  faUser,
  faEnvelope,
  faSuitcase,
  faBars,
  faClose,
} from '@fortawesome/free-solid-svg-icons'
import {
  faGithub,
  faLinkedin,
  faTwitter,
} from '@fortawesome/free-brands-svg-icons'
import { useState } from 'react'

const Sidebar = () => {
  const [showNav, setShowNav] = useState(false)

  return (
    <div div className="nav-bar">
      <Link className="logo" to="/">
        <img src={LogoS} alt="logo" />
      </Link>
      <nav className={showNav ? 'mobile-show' : ''}>
        <NavLink
          exact="true"
          activeClassName="active"
          to="/"
          onClick={() => setShowNav(false)}
        >
          <FontAwesomeIcon icon={faHome} color="#4d4d4e" />
        </NavLink>

        <NavLink
          className="about-link"
          activeClassName="active"
          to="/about"
          onClick={() => setShowNav(false)}
        >
          <FontAwesomeIcon icon={faUser} color="#4d4d4e" />
        </NavLink>

        <NavLink
          className="portfolio-link"
          activeClassName="active"
          to="/portfolio"
          onClick={() => setShowNav(false)}
        >
          <FontAwesomeIcon icon={faSuitcase} color="#4d4d4e" />
        </NavLink>

        <NavLink
          className="contact-link"
          activeClassName="active"
          to="/contact"
          onClick={() => setShowNav(false)}
        >
          <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e" />
        </NavLink>

        <FontAwesomeIcon
          onClick={() => setShowNav(false)}
          icon={faClose}
          color="#ff00ff"
          size="3x"
          className="close-icon"
        />
      </nav>

      <ul>
        <li>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.linkedin.com/in/theazeemshaikh/"
          >
            <FontAwesomeIcon icon={faLinkedin} color="#0A66C2" />
          </a>
        </li>

        <li>
          <a target="_blank" rel="noreferrer" href="https://github.com/azshhh">
            <FontAwesomeIcon icon={faGithub} color="#ffffff" />
          </a>
        </li>

        <li>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://twitter.com/azeemshaikh_"
          >
            <FontAwesomeIcon icon={faTwitter} color="#00acee" />
          </a>
        </li>
        {/* <li>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://twitter.com/azeemshaikh_"
          >
            <FontAwesomeIcon icon={faDiscord} color="#5865F2" />
          </a>
        </li> */}
      </ul>
      <FontAwesomeIcon
        onClick={() => setShowNav(true)}
        icon={faBars}
        color="#00ffff"
        size="3x"
        className="hamburger-icon"
      />
    </div>
  )
}

export default Sidebar;
