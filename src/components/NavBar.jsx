import { useNavigate } from "react-router-dom";
import "./NavBar.css"
import  clothes_together_logo  from "../assets/clothes_together_logo.png";
import instagram_logo from "../assets/instagram_logo.png";
import facebook_logo from "../assets/facebook_logo.png"

export const NavBar = () => {
    const navigate = useNavigate();

    return (
        <div id="navbar-div-container">
            <header className="header">
                <div className="social-links">
                    <a href="https://www.instagram.com/pigeonorganics/" target="_blank" rel="noopener mnoreferrer">
                        <img src={instagram_logo} alt="Instagram" className="social-icon" />
                    </a>
                    <a href="https://www.facebook.com/pigeonorganics/" target="_blank" rel="noopener mnoreferrer">
                        <img src={facebook_logo} alt="Facebook" className="social-icon" />
                    </a>
                </div>
                
                <div className="right-side-links">
                    <nav>
                        {/* <button onClick={() => navigate("/WhoWeAre")}>Who we are</button> */}
                        <button onClick={() => navigate("/FindOutMoreBrands")}>Find out more (Brands)</button>
                        <button onClick={() => navigate("/FindOutMoreCharities")}>Find out more (Charities)</button>
                    </nav>
                </div>
            </header>
           
            <div className="header-section">
                <img src={clothes_together_logo} alt="clothes together logo" className="clothes-together-logo"></img>
                
                <nav className="spread-out-links">
                    <a href="/WhoWeAre">Who we are</a>
                    <a href="/FindOutMoreBrands">Find out more (Brands)</a>
                    <a href="/FindOutMoreCharities">Find out more (Charities)</a>
                </nav>
            </div>
           
        </div>
    );
};
