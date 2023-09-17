import React from 'react'
import './MySkill.css'
import C from '../../img/c.png';
import Cpp from '../../img/cpp.png'
import Js from '../../img/js.png'
import Html from '../../img/html.png'
import Java from '../../img/java.png';
import { ThemeContext } from '../../Context'
import { useContext } from 'react';
import { motion } from 'framer-motion';

function MySkill() {
    const transition = { duratin: 1, type: 'spring' }
    const theme = useContext(ThemeContext);
    const darkMode = theme.state.darkMode;
    return (
        <div className="skill" id="MySkill">
            {/*=====left side=====*/}
            <div className="awesome">
                <span style={{ color: darkMode ? 'white' : '' }}>My Skills</span>
                <span>Technical Skill</span>
                <span>
                    "Hello! I'm an aspiring web designer.<br />
                    My skills span across HTML, CSS, JavaScript, React.js, Java, and C, providing me with
                    a versatile toolkit for web development.<br />As a newcomer in the field,
                    I'm eager to take on new challenges and expand my portfolio.
                    If you have a project in mind or <br />need a fresh perspective on web design and development,
                    I'd love to collaborate with you to build something remarkable together!"<br />
                </span>

                <button className="button s-button">Hire Me</button>

                <div className='blur' style={{ background: '#C1F5FF', top: '12rem', width: '12rem', height: '16rem', left: '-20%' }}></div>
            </div>
            {/*========right side=======*/}
            <div className="skill-right">

                {/*======background circle=======*/}
                <div className="back-circle blueCircle"></div>
                <div className="back-circle yellowCircle"></div>

                <motion.div
                    initial={{ rotate: 45 }}
                    whileInView={{ rotate: 360 }}
                    viewport={{ margin: '-40px' }}
                    transition={transition}
                    className="main-circle">
                    <div className="sec-circle">
                        <img src={Js} alt="" />
                    </div>
                    <div className="sec-circle">
                        <img src={C} alt="" />
                    </div>
                    <div className="sec-circle">
                        <img src={Java} alt="" />
                    </div>
                    <div className="sec-circle">
                        <img src={Cpp} alt="" />
                    </div>
                    <div className="sec-circle">
                        <img src={Html} alt="" />
                    </div>

                </motion.div>
            </div>
        </div>
    )
}

export default MySkill
