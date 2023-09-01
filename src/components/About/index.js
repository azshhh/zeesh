import './index.scss'
import AnimatedLetters from '../AnimatedLetters'
import { useState, useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faGithubSquare,
  faHtml5,
  faJsSquare,
  faNode,
  faPython,
  faReact,
} from '@fortawesome/free-brands-svg-icons'
import Loader from 'react-loaders'

const About = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  useEffect(() => {
    return setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)
  }, [])

  return (
    <>
      <div className="container about-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['A', 'b', 'o', 'u', 't', ' ', 'm', 'e']}
              idx={15}
            />
          </h1>
          <p>
            I'm a very ambitious front-end developer including technologies like
            <span className="skills">
              {' '}
              HTML5, CSS, JavaScript, jQuery, ReactJS, Git,{' '}
            </span>
            etc.
            <p>
              Looking for a role in an established IT company with the
              opportunity to work with the latest technologies on challenging
              and diverse projects.
            </p>
          </p>
          <p align="LEFT">
            I'm also interested in financial markets, trading frequently in
            Equity & Forex Markets. Experiencing markets since 3 years.
          </p>
        </div>

        <div className="stage-cube-cont ">
          <div className="cubespinner">
            <div className="face1">
              <FontAwesomeIcon icon={faReact} color="#5ED4F4" />
            </div>
            <div className="face2">
              <FontAwesomeIcon icon={faPython} color="#4584b6" />
            </div>
            <div className="face3">
              <FontAwesomeIcon icon={faJsSquare} color="#EFD81D" />
            </div>
            <div className="face4">
              <FontAwesomeIcon icon={faHtml5} color="#F06529" />
            </div>
            <div className="face5">
              <FontAwesomeIcon icon={faGithubSquare} color="#ffffff" />
            </div>
            <div className="face6">
              <FontAwesomeIcon icon={faNode} color="#6cc24a" />
            </div>
          </div>
        </div>
      </div>
      <Loader type="pacman" />
    </>
  )
}

export default About
