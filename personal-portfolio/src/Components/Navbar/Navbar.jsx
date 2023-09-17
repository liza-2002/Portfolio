import React from 'react'
import './Navbar.css';
import Toggle from '../Toggle/Toggle'
import { Link } from 'react-scroll'

function Navbar() {
    return (
        <div className="n-wrapper">
            <div className="n-left">
                <div className="n-name">Liza's Portfolio</div>
                <Toggle />
            </div>
            <div className="n-right">
                <div className="n-list">
                    <ul style={{ listStyleType: 'none' }}>

                        <Link spy={true} to='Navbar' smooth={true} activeClass='activeClass'>
                            <li>Home</li>
                        </Link>
                        <Link spy={true} to='Services' smooth={true}>
                            <li>Services</li>
                        </Link>
                        <Link spy={true} to='MySkill' smooth={true}>
                            <li>Skills</li>
                        </Link>
                        <Link spy={true} to='Portfolio' smooth={true}>
                            <li>Portfolio</li>
                        </Link>
                        <Link spy={true} to='About' smooth={true}>
                            <li>About</li>
                        </Link>

                    </ul>
                </div>
                <Link spy={true} to='Contact' smooth={true}>
                    <button className="button n-button">
                        Contact
                    </button>
                </Link>
            </div>
        </div>
    )
}

export default Navbar
