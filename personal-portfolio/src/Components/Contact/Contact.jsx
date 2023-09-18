import React from 'react'
import './Contact.css'
import { useRef,useState } from 'react';
import emailjs from '@emailjs/browser';
import {ThemeContext} from '../../Context'
import { useContext } from 'react';
function Contact() {
    const form = useRef();

    const [done,setDone]=useState(false)
    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_zinrec3', 'template_n14lbnc', form.current, 'xXzWkeC-OyXUgRfEn')
            .then((result) => {
                console.log(result.text);
                setDone(true);
            }, (error) => {
                console.log(error.text);
            });
    };
    const theme = useContext(ThemeContext);
    const darkMode = theme.state.darkMode;

    return (
        <div className="contact-form" id='Contact'>
            <div className="w-left">
                <div className="awesome">
                    <span style={{color:darkMode?'white':''}}>Get in touch</span>
                    <span>Contact Me</span>
                    <div className='blur'
                        style={{ background: '#ABF1FF94', top: '4rem', width: '11rem', height: '15rem', left: '-90%' }}
                    ></div>
                </div>
            </div>

            <div className="c-right">
                <form ref={form} onSubmit={sendEmail}>
                    <input type="text" name="user_name" className="user" placeholder="Name" />
                    <input type="email" name="user_email" className="user" placeholder="Email" />
                    <textarea name="message" className="user" placeholder="Message" />
                    <input type="submit" value="send" className="button" />
                    <span>{done && "Thanks for contacting me!"}</span>
                    <div className='blur' style={{ background: "rgb(338 210 255", top: '0rem', width: '20rem', height: '19rem', left: '30%' }}></div>
                </form>
            </div>
        </div>
    )
}

export default Contact
