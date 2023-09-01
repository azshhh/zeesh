import { Link } from 'react-router-dom'
import './index.scss'
import { useEffect, useState } from 'react'
import AnimatedLetters from '../AnimatedLetters'

const Home = () => {
    const [letterClass, setLetterClass] = useState('text-animate')
    const nameArray = ['', 'A', 'z', 'e', 'e', 'm', '', 'S', 'h', 'a', 'i', 'k', 'h']
    const jobArray = [
        'D',
        'e',
        'v',
        'e',
        'l',
        'o',
        'p',
        'e',
        'r',
        '',
        '/',
        '',
        'T',
        'r',
        'a',
        'd',
        'e',
        'r',
    ]
    
    useEffect(() => {
        return setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 4000)
    }, [])

    return (
        <div className="container home-page">
            <div className="text-zone">
                <h1>
                    <span className={letterClass}>H</span>
                    <span className={`${letterClass} _12`}>e</span>
                    <span className={`${letterClass} _12`}>y</span>
                    <span className={`${letterClass} _12`}>,</span>
                    <br />
                    <span className={`${letterClass} _13`}>I</span>
                    <span className={`${letterClass} _14`}>'m</span>
                    <AnimatedLetters
                        letterClass={letterClass}
                        strArray={nameArray}
                        idx={15}
                    />
                    <br />
                    <AnimatedLetters
                        letterClass={letterClass}
                        strArray={jobArray}
                        idx={8}
                    />
                    <br />
                </h1>
                <h2>Frontend Developer <span className='slash'>/</span> ReactJS </h2>
                <h2>Equity Trader <span className='slash'>/</span> Forex Trader</h2>
                <Link to="/contact" className="flat-button">
                    CONTACT ME
                </Link>
            </div>
        </div>
    )
}

export default Home
