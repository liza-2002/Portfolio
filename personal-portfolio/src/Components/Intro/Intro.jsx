import React from 'react'
import './Intro.css';
import Github from '../../img/github.png';
import LinkedIn from '../../img/linkedin.png';
import Instagram from '../../img/instagram.png';
import Vector1 from '../../img/Vector1.png';
import Vector2 from '../../img/Vector2.png';
import girl from '../../img/girl.png';
import thumbup from '../../img/thumbup.png';
import Crown from '../../img/crown.png';
import glassesimoji from '../../img/glassesimoji.png';
import FloatingDiv from '../FloatingDiv/FloatingDiv';
function Intro() {
    return (
        <div className="intro">
            <div className="i-left">
                <div className="i-name">
                    <span>
                        Hy! I Am
                    </span>
                    <span>
                        Liza
                    </span>
                    {/* <div className='blur' style={{background:"rgb(338 210 255",top:'0rem',width:'31rem',height:'31rem',left:'-2%'}}></div> */}
                    <span>
                        Highly motivated student with
                         a passion for technology and a 
                         strong desire to learn in the <br/>field 
                         of Information Technology.
                        Quick learner and adaptable team player, 
                        eager to collaborate <br/>with colleagues to 
                        achieve project goals.
                    </span>
                </div>
                <div className='blur' style={{background:"rgb(338 210 255)",top:'1rem',left:'-50%'}}></div>
                <button className="button i-button">Hire me</button>
                <div className="i-icons">
                    <img src={Github} alt="" />
                    <img src={LinkedIn} alt="" />
                    <img src={Instagram} alt="" />
                </div>
            </div>
            <div className="i-right">
                <img src={Vector1} alt="" />
                <img src={Vector2} alt="" />
                <img src={girl} alt="" />
                <img src={glassesimoji} alt="" />
                <div style={{top:'-4%',left:'68%'}}>
                    <FloatingDiv image={Crown} txt1='Web' txt2='Developer'/>
                </div>
                <div style={{top:'18rem',left:'0rem'}}>
                    <FloatingDiv image={thumbup} txt1='Best' txt2='Design'/> 
                </div>
                {/*blur div*/}
                {/* <div className='blur' style={{background:'#bfc3e',top:'14rem',width:'31rem',height:'21rem',left:'40%'}}></div> */}
                <div className='blur' style={{background:"rgb(338 210 255"}}></div>
                <div className='blur' style={{background:'#C1F5FF',top:'12rem',width:'11rem',height:'15rem',left:'-9%'}}></div>
            </div>
        </div>
    )
}

export default Intro
