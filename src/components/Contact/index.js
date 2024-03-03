import Loader from 'react-loaders';
import './index.scss'
import AnimatedLetters from '../AnimatedLetters';
import { useEffect, useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
function Contact() {
    const refForm = useRef();
    const [letterClass, setLetterClass] = useState('text-animate')
    useEffect(() => {
        
        let timeoutId = setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 3000)
        
        return () => {
            clearTimeout(timeoutId)
        }
    }, [])
    const sendEmail = (e) => {
        e.preventDefault();
        emailjs.sendForm('service_tc6v3jf', 'template_fhrijmm', refForm.current, {
            publicKey:'zs05V8ThxUdRFgASL'
        })
        .then(
            () => {
              alert('Message successfully sent!')
              window.location.reload(false)
            },
            (error) => {
              alert('Failed to send message, please try again!')
            },
          );
    }
    return ( 
        <>
            <div className="container contact-page">
                <div className="text-zone">
                    <h1>
                        <AnimatedLetters letterClass={letterClass}
                            strArray={['C', 'o', 'n', 't', 'a', 'c', 't', ' ', 'm', 'e']}
                            idx={15}>   
                        </AnimatedLetters>
                    </h1>
                    <p>
                    I am interested in freelance opportunities - especially on ambitious
                    or large projects. However, if you have any other requests or
                    questions, don't hesitate to contact me using below form either.
                    </p>
                    <div className='contact-form'>
                        <form ref = {refForm} onSubmit={sendEmail}>
                            <ul>
                            <li className="half">
                  <input placeholder="Name" type="text" name="name" required />
                </li>
                <li className="half">
                  <input
                    placeholder="Email"
                    type="email"
                    name="email"
                    required
                  />
                </li>
                <li>
                  <input
                    placeholder="Subject"
                    type="text"
                    name="subject"
                    required
                  />
                </li>
                <li>
                  <textarea
                    placeholder="Message"
                    name="message"
                    required
                  ></textarea>
                </li>
                <li>
                  <input type="submit" className="flat-button" value="SEND" />
                </li>
                            </ul>
                        </form>
                    </div>
                </div>
            </div>
            <Loader type='pacman'/>
        </>
     );
}

export default Contact;