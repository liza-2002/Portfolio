import React from 'react'
import './Services.css';
import HeartEmoji from "../../img/heartemoji.png";
import Glasses from "../../img/glasses.png";
import Humble from "../../img/humble.png";
import Card from '../Card/Card';
import Resume from './lizaresume.pdf'
function Services() {
    return (
        <div className="services">
            {/*=====left side=====*/}
            <div className="awesome">
                <span>My Awesome</span>
                <span>Services</span>
                <span>
                    "Hello! I'm an aspiring web designer.<br />
                    My skills span across HTML, CSS, JavaScript, React.js, Java, and C, providing me with
                    a versatile toolkit for web development.<br />As a newcomer in the field,
                    I'm eager to take on new challenges and expand my portfolio.
                    If you have a project in mind or <br />need a fresh perspective on web design and development,
                    I'd love to collaborate with you to build something remarkable together!"<br />
                </span>
                <a href={Resume} download>
                    <button className="button s-button">Download CV</button>
                </a>
                <div className='blur' style={{background:'#C1F5FF',top:'12rem',width:'12rem',height:'16rem',left:'-20%'}}></div>
            </div>
            {/*=====right side=====*/}
            <div className="cards">
                {/*=======first card========*/}
                <div style={{ left: '14rem' }}>
                    <Card
                        emoji={HeartEmoji}
                        heading={'Design'}
                        detail={"Sketch,Photoshop, Adobe"}
                    />
                </div>
                {/*=======second card========*/}
                <div style={{ top: "12rem", left: "-4rem" }}>
                    <Card
                        emoji={Glasses}
                        heading={'Developer'}
                        detail={"Html,Css, Javascript, React"}
                    />
                </div>
                {/*=========third card=======*/}
                <div style={{ top: "19rem", left: "12rem" }}>
                    <Card
                        emoji={Humble}
                        heading={'Programming Language'}
                        detail={"Java,c,c++,Python"}
                    />
                </div>
                <div className='blur' style={{background:"rgb(338 210 255)",top:'17rem',right:'60%'}}></div>
            </div>
        </div>
    )
}

export default Services
