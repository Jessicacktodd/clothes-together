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
                        <button onClick={() => navigate("/FindOutMoreBrands")}>FIND OUT MORE (BRANDS)</button>
                        <button onClick={() => navigate("/FindOutMoreCharities")}>FIND OUT MORE (CHARITIES)</button>
                    </nav>
                </div>
            </header>
           
            <div className="header-section">
                <button className="logo-button" onClick={() => navigate("/")}>
                    <img src={clothes_together_logo} alt="Clothes Together logo" className="clothes-together-logo" />
                </button>
                
                <nav className="spread-out-links">
                        <button onClick={() => navigate("/WhoWeAre")}>WHO WE ARE</button>
                        <button onClick={() => navigate("/WhatWeDo")}>WHAT WE DO</button>
                        <button onClick={() => navigate("/FindOutMoreBrands")}>PARTNER BRANDS</button>
                        <button onClick={() => navigate("/FindOutMoreCharities")}>PARTNER CHARITIES</button>
                        <button onClick={() => navigate("/PRESS")}>PRESS</button>
                        <button onClick={() => navigate("/ContactUs")}>CONTACT US</button>
                </nav>
            </div>
           
        </div>
    );
};
