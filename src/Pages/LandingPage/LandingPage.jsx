import { NavBar } from "../../components/NavBar";
import  clothes_together_logo  from "../../assets/clothes_together_logo.png";
import instagram_logo from "../../assets/instagram_logo.png";
import facebook_logo from "../../assets/facebook_logo.png"
import moock_photo from "../../assets/mock_photo.png"
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
                <NavBar />
            </header>
            <div class="header-section">
                <img src={clothes_together_logo} alt="clothes together logo" className="clothes-together-logo"></img>
                <nav class="spread-out-links">
                    <a href="/WhoWeAre">Who we are</a>
                    <a href="/FindOutMoreBrands">Find out more (Brands)</a>
                    <a href="/FindOutMoreCharities">Find out more (Charities)</a>
                </nav>
            </div>

            <section class="Nile-blue-section">
                <img src={moock_photo} alt="mock photo" className="section-image"></img>
                <div class="text-block">
                    <h2>Heading Text</h2>
                    <p>This is a chunk of text describing something related to the image or section. You can add a paragraph here, explain things, or even list things as necessary.</p>
                </div>
            </section>
        </div>
        </>
    )};