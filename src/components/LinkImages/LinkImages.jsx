import mustard_link_image from "../../assets/mustard_link_image.png";
import green_link_image from "../../assets/green_link_image.png";
import orange_link_image from "../../assets/orange_link_image.png";
import "./LinkImages.css";

export const LinkImages = () => {
    return (
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
                    <p className="link-description">Partner brands</p>
                </div>
                <div className="link-item">
                    <a href="/FindOutMoreCharities">
                        <img src={orange_link_image} alt="orange link image" className="orange-link-image"></img>
                    </a>
                    <p className="link-description">Partner charities</p>
                </div>
            </section>
    )};