import { useRef } from 'react'
import Loader from 'react-loaders'
import { TypeAnimation } from 'react-type-animation';
import './index.scss'
import emailjs from '@emailjs/browser';

const About = () => {
    
        const refForm = useRef();

        const sendEmail = (e) => {
            e.preventDefault()

            emailjs
            .sendForm(
                'service_rdho77e',
                'template_86eh7pm',
                refForm.current,
                'zhu9Xvv9TqcVNm87r'
            )
            .then(
                () => {
                alert('Message Successfully sent')
                window.location.reload(false)
            },
            () => {
                alert('Failed to send message, please try again')
            }
            )
        }

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
                <h2>
                    I'm a very ambitious engineer looking for a role in a reputable IT company with opportunities to work with the latest technologies on challenging and diverse projects
                </h2>
                <h2>
                    I'm quietly confident, naturally curious and perpetually working on improving my chops one design problem at a time.
                </h2>
                <h2>If I need to define myself in one sentence it would be that I am a family person, engineer, friendly being, fan of cute things, photography enthusiast and tech-obsessed</h2>
            </div>            
        </div>

            <div >
                
                <div className='contact-form'>
                    <span>
                        <h4>
                           Send me a message if you have any questions!
                        </h4>
                    </span>
                    <form ref={refForm} onSubmit={sendEmail}>
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