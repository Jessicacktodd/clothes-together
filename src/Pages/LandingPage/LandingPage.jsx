import { NavBar } from "../../components/NavBar";

import moock_photo from "../../assets/mock_photo.png"
import "./LandingPage.css"

export const LandingPage = () => {
    return (
        <>
        <div className="landingPage">
            <NavBar />
            <section className="Nile-blue-section">
                <img src={moock_photo} alt="mock photo" className="section-image"></img>
                <div className="text-block">
                    <h2>Heading Text</h2>
                    <p>This is a chunk of text describing something related to the image or section. You can add a paragraph here, explain things, or even list things as necessary.</p>
                </div>
            </section>
        </div>
        </>
    )};