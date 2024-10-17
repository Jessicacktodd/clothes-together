import { Footer } from "../../components/CompanyInfoBanner/Footer";
import { LinkImages } from "../../components/LinkImages/LinkImages";
import { NavBar } from "../../components/NavBar/NavBar";
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