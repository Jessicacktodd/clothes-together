import { useNavigate } from "react-router-dom";
import "./NavBar.css"

export const NavBar = () => {
    const navigate = useNavigate();

    return (
        <div id="navbar-div-container">
            <nav>
                <button onClick={() => navigate("/")}>Homepage</button> 
                <button onClick={() => navigate("/WhoWeAre")}>Who we are</button>
                <button onClick={() => navigate("/FindOutMoreBrands")}>Find out more (Brands)</button>
                <button onClick={() => navigate("/FindOutMoreCharities")}>Find out more (Charities)</button>
            </nav>
        </div>
    );
};