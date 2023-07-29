import React from 'react'
import "./footer.css"
import logo from "../../assets/logo.svg"
function Footer() {
    return (
        <div className='footer section-padding' id='footer'>
            <div className="footer-head">
                <h1 className='gradient__text'>Do you want to step in to the future before others</h1>
                <p>Request Early Access</p>
            </div>
            <div className="footer-content">
                <div className="gpt-3">
                    <img src={logo} alt="" />
                    <p>Crechterwoord K12 182 DK Alknjkcb,
                        All Rights Reserved</p>
                </div>
                <div className="links">
                    <h4>Links</h4>
                    <p>Overons</p>
                    <p>Social Media</p>
                    <p>Counters</p>
                    <p>Contact</p>
                </div>
                <div className="company">
                    <h4>Company</h4>
                    <p>Terms & Conditions</p>
                    <p>Privacy Policy</p>
                    <p>Contact</p>
                </div>
                <div className="touch">
                    <h4>Get in touch</h4>
                    <p>Crechterwoord K12 182 DK Alknjkcb</p>
                    <p>085-132567</p>
                    <p>info@payme.net</p>
                </div>
            </div>
            <div className="footer-copyright">
                <p>@2021 GPT-3. All rights reserved.</p>
            </div>
        </div>
    )
}

export default Footer