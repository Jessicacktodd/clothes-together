import { Footer } from "../../components/Footer";
import { LinkImages } from "../../components/LinkImages";
import { NavBar } from "../../components/NavBar";
import "./FindOutMoreCharities.css"

export const FindOutMoreCharities = () => {
    return(
        <div className="FindOutMoreCharities">
            <NavBar />
            <section className="Charities-blue-section">
                <section className="charities-heading">
                    <p>Partner charities</p>
                </section>
            </section>
            <LinkImages />
            <Footer />
        </div>
    )
}