import { useEffect, useRef, useState } from 'react'
import AnimatedLetters from '../AnimatedLetters'
import './index.scss'
import Loader from 'react-loaders'
import emailjs from '@emailjs/browser'

const Contact = () => {
    const [letterClass, setLetterClass] = useState('text-animate')
    const form = useRef()

    useEffect(() => {
        return setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 3000)
    }, [])

    const sendEmail = (e) => {
        e.preventDefault()

        emailjs
            .sendForm(
                'gmail',
                'template_m2ho628',
                form.current,
                'service_q8kggog'
            )
            .then(() => {
                alert('Message successfully sent!')
                window.location.reload(false)
            }, () => {
                alert('Failed to send message, please try again ')
            })
    }

    return (
        <>
            <div className="container contact-page">
                <div className="text-zone">
                    <h1>
                        <AnimatedLetters
                            letterClass={letterClass}
                            strArray={['C', 'o', 'n', 't', 'a', 'c', 't', '', 'm', 'e']}
                            idx={15}
                        />
                    </h1>
                    <p>
                        Hey, 😎
                    </p>
                    <p>
                        Do you like me? 😃
                    </p>
                    <p>
                        Hit down the boxes below 👇🏼
                    </p>
                    <div className="contact-form">
                        <form ref={form} onSubmit={sendEmail}>
                            <ul>
                                <li className="half">
                                    <input type="text" name='name' placeholder='Name' required />
                                </li>
                                <li className="half">
                                    <input type="email" name='email' placeholder='Email' required />
                                </li>
                                <li>
                                    <textarea name="message" placeholder='Message' required></textarea>
                                </li>
                                <li>
                                    <input type="submit" className='flat-button' value="SEND" />
                                </li>
                            </ul>
                        </form>
                    </div>
                </div>
            </div>
            <Loader type='pacman' />
        </>
    )
}

export default Contact
