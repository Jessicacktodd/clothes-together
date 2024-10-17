import { NavBar } from "../../components/NavBar";

import moock_photo from "../../assets/mock_photo.png"
import mustard_link_image from "../../assets/mustard_link_image.png"
import green_link_image from "../../assets/green_link_image.png"
import orange_link_image from "../../assets/orange_link_image.png"
import "./LandingPage.css"

export const LandingPage = () => {
    return (
        <>
        <div className="landingPage">
            <NavBar />
            <section className="Nile-blue-section">
            <section className="quote">
                    <p>Reducing clothing waste....tackling clothing insecurity</p>
                </section>
                <img src={moock_photo} alt="mock photo" className="section-image"></img>
                <div className="text-block">
                    <p>From the moment a baby is born, their life chances are largely determined by the postcode and the income of their parents. According to the Joseph Rowntree foundation, 30% of children in the UK live in poverty.<br></br>
                    <br></br>We believe that new clothes can make a real difference to children’s lives.  Clothing insecurity is little discussed but a huge problem in the UK.  ‘That doesn’t simply mean they are unable to afford garments they want, 
                    but rather that they are unable to access items that make everyday life (e.g school….social integration, leaving the house) possible’ (Heather Snowden, writing in British Vogue)<br></br>
                    <br></br>At a time when fashion brands are under increasing pressure to demonstrate greater sustainabilily, Clothes Together is linking clothing brands with charities to redirect spare stock to children living with clothing insecurity.</p>
                </div>
            
            </section>
            <section className="link-images">
                <div className="link-item">
                    <a href="/WhoWeAre">
                        <img src={mustard_link_image} alt="mustard link image" className="mustard-link-image"></img>
                    </a>
                    <p className="link-description">Who We Are</p>
                </div>
                <div className="link-item">
                    <a href="/FindOutMoreBrands">
                        <img src={green_link_image} alt="green link image" className="green-link-image"></img>
                    </a>
                    <p className="link-description">Find Out More Brands</p>
                 </div>
                 <div className="link-item">
                    <a href="/FindOutMoreCharities">
                        <img src={orange_link_image} alt="orange link image" className="orange-link-image"></img>
                    </a>
                    <p className="link-description">Find Out More Charities</p>
                </div>
            </section>
        <div>
        <section className="Nile-blue-section-two">
            <section className="misc-links">
                <p>Contact Us</p>
                <p>T&Cs</p>
                <p>Legal</p>
            </section>
        </section>
        </div>
        </div>
        </>
    )};