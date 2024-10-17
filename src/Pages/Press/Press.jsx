import { Footer } from "../../components/Footer";
import { LinkImages } from "../../components/LinkImages";
import { NavBar } from "../../components/NavBar";
import "./Press.css"

export const Press = () => {
    return(
        <div className="Press">
            <NavBar />
            <section className="press-blue-section">
                <section className="press-heading">
                    <p>Press</p>
                </section>
            </section>
            <LinkImages />
            <Footer />
        </div>
    )
}