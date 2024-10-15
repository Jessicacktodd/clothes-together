import { NavBar } from "../../components/NavBar";
import  clothes_together_logo  from "../../assets/clothes_together_logo.png";
import instagram_logo from "../../assets/instagram_logo.png";
import facebook_logo from "../../assets/facebook_logo.png"
import "./LandingPage.css"

export const LandingPage = () => {
    return (
        <>
        <div className="landingPage">
            <header className="header">
                <div className="social-links">
                    <a href="https://www.instagram.com/pigeonorganics/" target="_blank" rel="noopener mnoreferrer">
                        <img src={instagram_logo} alt="Instagram" className="social-icon" />
                    </a>
                    <a href="https://www.facebook.com/pigeonorganics/" target="_blank" rel="noopener mnoreferrer">
                        <img src={facebook_logo} alt="Facebook" className="social-icon" />
                    </a>
                </div>
                <img src={clothes_together_logo} alt="clothes together logo" className="clothes-together-logo"></img>
                <NavBar />
            </header>
        </div>
        </>
    )};