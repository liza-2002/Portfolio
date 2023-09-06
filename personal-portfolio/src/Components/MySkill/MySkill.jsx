// import React from 'react'
// import './MySkill.css'
// import Upwork from "../../img/Upwork.png";
// import Fiverr from "../../img/fiverr.png";
// import Shopify from "../../img/Shopify.png";
// import Amazon from "../../img/amazon.png";
// import Facebook from "../../img/Facebook.png";
// function MySkill() {
//     return (
//         <div className="skill-main">
//             <div className="skill-left">
//                     <div className="skill-name">
//                     <span>My Skills</span>
//                     <span>Technical Skills</span>
//                 </div>
//                 <div className="skill-bar">
//                     <div className="info">
//                         <p>Html</p>
//                         <p>72%</p>
//                     </div>
//                     <div className="bar">
//                         <span class="html"></span>
//                     </div>
//                 </div>


//                 <div className="skill-bar">
//                     <div className="info">
//                         <p>css</p>
//                         <p>58%</p>
//                     </div>
//                     <div className="bar">
//                         <span class="css"></span>
//                     </div>
//                 </div>

//                 <div className="skill-bar">
//                     <div className="info">
//                         <p>Javascript</p>
//                         <p>68%</p>
//                     </div>
//                     <div className="bar">
//                         <span class="javascript"></span>
//                     </div>
//                 </div>

//                 <div className="skill-bar">
//                     <div className="info">
//                         <p>React</p>
//                         <p>62%</p>
//                     </div>
//                     <div className="bar">
//                         <span class="react"></span>
//                     </div>
//                 </div>
//             </div>
//             {/*========right side=======*/}
//             <div className="skill-right">
//                 <div className="main-circle">
//                     <div className="sec-circle">
//                         <img src={Upwork} alt=""/>
//                     </div>
//                     <div className="sec-circle">
//                         <img src={Fiverr} alt=""/>
//                     </div>
//                     <div className="sec-circle">
//                         <img src={Amazon} alt=""/>
//                     </div>
//                     <div className="sec-circle">
//                         <img src={Shopify} alt=""/>
//                     </div>
//                     <div className="sec-circle">
//                         <img src={Facebook} alt=""/>
//                     </div>
//                 </div>
//                 {/*======background circle=======*/}
//                 <div className="back-circle blueCircle"></div>
//                 <div className="back-circle yellowCircle"></div>
//             </div>
//         </div>
//     )
// }
// export default MySkill


import React from 'react'
import './MySkill.css'
import C from '../../img/c.png';
import Cpp from '../../img/cpp.png'
import Js from '../../img/js.png'
import Html from '../../img/html.png'
import Java from '../../img/java.png';
function MySkill() {
    return (
        <div className="skill">
            {/*=====left side=====*/}
            <div className="awesome">
                <span>My Skills</span>
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

                <div className="main-circle">
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
                    
                </div>  
            </div>
        </div>
    )
}

export default MySkill
