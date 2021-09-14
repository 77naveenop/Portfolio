import React from "react";
import { NavLink } from "react-router-dom";
// import About from "../../Pages/About/About";
import "./Navbar.css";




const Navbar = () => {
    

    return (
        <div className="Navbar">
            <ul  className="Nav-link">
                <li className="li-item">
                    <NavLink className="Nav" to="/">Home</NavLink>
                </li>
                <li className="li-item">
                    <NavLink className="Nav" to="/About">About</NavLink>
                </li>
                <li className="li-item">
                    <NavLink className="Nav" to="/Skills">Skills</NavLink>
                </li>
                {/* <li className="li-item">
                    <NavLink className="Nav" to="/Contact">Contact</NavLink>
                </li> */}
            </ul>
        </div>



    )
}
export default Navbar;
    


        
