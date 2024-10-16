import { NavBar } from "../../components/NavBar";
import "./WhoWeAre.css"
import Jane_and_kate from "../../assets/Jane_and_Kate.png"

export const WhoWeAre = () => {
    return(
        <div className="WhoWeAre">
            <NavBar />
            <section className="jane-kate-image">
                    <img src={ Jane_and_kate } alt="Jane and Kate" />
                </section>
            <section className="mock-text">
                <p>Ethical childrenswear brand, Pigeon Organics, has been donating spare stock to charities and community groups for several years: 
                    "It’s a real privilege to see our high quality spare stock reaching children who desperately need it.  
                    Donating spare stock enhances, rather than threatens our brand and it is something we are always happy to talk about openly.  
                    Our donations are carefully managed by partner charities to ensure they reach those most in need".</p>
    
                <p>Before setting up Pigeon, Jane spent 14 years at the Sainsbury Family Charitable Trusts, 
                    responsible for identifying and helping to develop a range of social and environmental initiatives.  
                    This work provided broad insight into some of the most challenging issues, ranging from drug rehabilitation, 
                    homelessness and social exclusion, through to support for micro-credit and small-scale renewable energy projects 
                    in remote communities in the global south.  The common theme throughout was the need for a grassroots approach, 
                    rather than imposing top-down solutions.  When setting up Pigeon, the decision to use organic cotton right from the start, 
                    and to try and have a positive social impact wherever possible, was heavily influenced by her years at the Trusts.</p>
                
                <p>Image and paragraph: Kate…blah blah blah</p>
                
                <p>To find out more our partner brands <a href="/FindOutMoreBrands">click here.</a></p>
                
                <p>To find out more our partner charities <a href="/FindOutMoreCharities">click here.</a></p>
            </section>
        </div>
    )
}