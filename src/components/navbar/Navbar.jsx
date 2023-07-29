import React, { useState } from 'react'
import logo from '../../assets/logo.svg'
import './navbar.css'
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';

function Navbar() {
    const [showMenu, setShowMenu] = useState(false)
    return (
        <div className="navbar section-padding">
            <div className="navbar-logo">
                <img src={logo} alt="" />
            </div>
            <div className="navbar-links">
                <p><a href="#home">Home</a></p>
                <p><a href="#gpt3">What is GPT3?</a></p>
                <p><a href="#possibilities">Open AI</a></p>
                <p><a href="#future">Case Studies</a></p>
                <p><a href="#casestudies">Library</a></p>
            </div>
            <div className="deafault-hidden"></div>
            <div className="sign">
                <p>Sign In</p>
                <button>Sign Up</button>
                <div className="icon">
                    {showMenu ?
                        <RiCloseLine color="#fff" size={27} onClick={() => setShowMenu(false)} />
                        : <RiMenu3Line color="#fff" size={27} onClick={() => setShowMenu(true)} />}
                </div>
            </div>
            {
                showMenu &&
                <div className='menu-parent scale-up-center'>
                    <div className="menu">
                        <p><a href="#home">Home</a></p>
                        <p><a href="#gpt3">What is GPT3?</a></p>
                        <p><a href="#possibilities">Open AI</a></p>
                        <p><a href="#future">Case Studies</a></p>
                        <p><a href="#casestudies">Library</a></p>
                    </div>
                    <div className="menu-sign">
                        <p>Sign In</p>
                        <button>Sign Up</button>
                    </div>
                </div>
            }
        </div>
    )
}

export default Navbar