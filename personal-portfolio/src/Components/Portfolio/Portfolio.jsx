import React from 'react'
import './Portfolio.css';
// import {Swiper,SwiperSlide} from 'swiper/react';
import Sidebar from "../../img/sidebar.png"
import Ecommerce from "../../img/ecommerce.png";
import HOC from "../../img/hoc.png";
import MusicApp from "../../img/musicapp.png";
import Link from '../../img/link.png'
import {ThemeContext} from '../../Context'
import { useContext } from 'react';
import { motion } from 'framer-motion';


function Portfolio() {
    const theme = useContext(ThemeContext);
    const darkMode = theme.state.darkMode;
  return (
    <div className="portfolio" id="Portfolio">
        {/*====heading======*/}
        <span style={{color:darkMode?'white':''}}>Recent Projects</span>
        <span>Portfolio</span>
        <div className="container">
            <div className="filter-buttons">
                <button style={{color:darkMode?'white':''}} className="btn">All</button>
                <button style={{color:darkMode?'white':''}} className="btn">Product</button>
                <button style={{color:darkMode?'white':''}} className="btn">interacting</button>
                <button style={{color:darkMode?'white':''}} className="btn">Web App</button>
            </div>
            
            <div className="portfolio-gallery">
                
                <div className="port-box">
                    <div className="port-image">
                        <img src={Sidebar} alt="" />
                    </div>
                    <div className="port-content">
                    <h3>Graphic Design</h3>
                        <p>
                        Highly motivated student with
                         a passion for technology and a 
                         strong desire to learn in the <br/>field 
                         of Information Technology.
                        </p>
                        <a href="#">
                            <img src={Link} alt="" />
                        </a>
                    </div>
                </div>
                <div className="port-box">
                    <div className="port-image">
                        <img src={MusicApp} alt="" />
                    </div>
                    <div className="port-content">
                    <h3>Graphic Design</h3>
                        <p>
                        Highly motivated student with
                         a passion for technology and a 
                         strong desire to learn in the <br/>field 
                         of Information Technology.
                        </p>
                        <a href="#">
                            <img src={Link} alt="" />
                        </a>
                    </div>
                </div>
                <div className="port-box">
                    <div className="port-image">
                        <img src={HOC} alt="" />
                    </div>
                    <div className="port-content">
                    <h3>Graphic Design</h3>
                        <p>
                        Highly motivated student with
                         a passion for technology and a 
                         strong desire to learn in the <br/>field 
                         of Information Technology.
                        </p>
                        <a href="#">
                            <img src={Link} alt="" />
                        </a>
                    </div>
                </div>
                <div className="port-box">
                    <div className="port-image">
                        <img src={Ecommerce} alt="" />
                    </div>
                    <div className="port-content">
                    <h3>Graphic Design</h3>
                        <p>
                        Highly motivated student with
                         a passion for technology and a 
                         strong desire to learn in the <br/>field 
                         of Information Technology.
                        </p>
                        <a href="#">
                            <img src={Link} alt="" />
                        </a>
                    </div>
                </div>
                <div className="port-box">
                    <div className="port-image">
                        <img src={MusicApp} alt="" />
                    </div>
                    <div className="port-content">
                        <h3>Graphic Design</h3>
                        <p>
                        Highly motivated student with
                         a passion for technology and a 
                         strong desire to learn in the <br/>field 
                         of Information Technology.
                        </p>
                        <a href="#">
                            <img src={Link} alt="" />
                        </a>
                    </div>
                </div>
                <div className="port-box">
                    <div className="port-image">
                        <img src={Sidebar} alt="" />
                    </div>
                    <div className="port-content">
                    <h3>Graphic Design</h3>
                        <p>
                        Highly motivated student with
                         a passion for technology and a 
                         strong desire to learn in the <br/>field 
                         of Information Technology.
                        </p>
                        <a href="#">
                            <img src={Link} alt="" />
                        </a>
                    </div>
                </div>
                <div className='blur' style={{ background: '#C1F5FF', top: '155rem', width: '22rem', height: '16rem', left: '-20%' }}></div>

                <div className='blur' style={{ background: "rgb(338 210 255)", top: '137em', width: '12rem', height: '16rem', left: '80%' }}></div>
            </div>
        </div>
    </div>
  )
}

export default Portfolio
