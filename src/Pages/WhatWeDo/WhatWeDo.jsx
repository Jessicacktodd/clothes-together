import { NavBar } from "../../components/NavBar";
import "./WhatWeDo.css"
import what_we_do_image from "./../../assets/what_we_do_image.png"

export const WhatWeDo = () => {
    return(
        <div className="whatWeDo">
            <NavBar />
            <section className="what-we-do-blue-section">
                <section className="what-we-do-heading">
                    <p>What we do</p>
                </section>
                <section className="what-we-do-image">
                    <img src={ what_we_do_image } alt="what we doimage" />
                </section>
            </section>
        </div>
    )
}