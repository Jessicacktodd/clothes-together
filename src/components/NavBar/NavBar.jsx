import { useNavigate } from "react-router-dom";
import "./NavBar.css"
import  clothes_together_logo  from "../../assets/clothes_together_logo.png";
import instagram_logo from "../../assets/instagram_logo.png";
import facebook_logo from "../../assets/facebook_logo.png"
import mail_icon from "../../assets/mail_icon.png"

export const NavBar = () => {
    const navigate = useNavigate();

    return (
        <div id="navbar-div-container">
            <header className="header">
                <div className="social-links">
                    <a href="https://www.instagram.com/pigeonorganics/" target="_blank" rel="noreferrer">
                        <img src={instagram_logo} alt="Instagram" className="social-icon" />
                    </a>
                    <a href="https://www.facebook.com/pigeonorganics/" target="_blank" rel="noreferrer">
                        <img src={facebook_logo} alt="Facebook" className="social-icon" />
                    </a>
                    <a href="mailto:info@pigeonorganics.com">
                        <img src={mail_icon} alt="Mail" className="social-icon" />
                    </a>
                </div>
                
                <div className="right-side-links">
                    <nav>
                        <button onClick={() => navigate("/FindOutMoreBrands")}>FIND OUR MORE (BRANDS)</button>
                        <button onClick={() => navigate("/FindOutMoreCharities")}>FIND OUR MORE (CHARITIES)</button>
                    </nav>
                </div>
            </header>
           
            <div className="header-section">
                <a href="/">
                    <img src={clothes_together_logo} alt="clothes together logo" className="clothes-together-logo"></img></a>
                
                <nav className="spread-out-links">
                        <a href="/WhoWeAre">WHO WE ARE</a>
                        <a href="/WhatWeDo">WHAT WE DO</a>
                        <a href="/FindOutMoreBrands">PARTNER BRANDS</a>
                        <a href="/FindOutMoreCharities">PARTNER CHARITIES</a>
                        <a href="/Press">PRESS</a>
                        <a href="/ContactUs">CONTACT US</a>
                </nav>
            </div>
           
        </div>
    );
};
