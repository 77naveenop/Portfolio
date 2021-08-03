import React from "react";
import Logo from "../logo.png";
//React-FontAwesome//
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';


const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-dark text-success">
      <a className="navbar-brand" href="#"><img className="logo" src={Logo} alt="logo.." /></a>
      <button className="navbar-toggler   " type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <FontAwesomeIcon icon={faBars} style={{color:"#fff"}}/>
      </button>

      <div className="collapse navbar-collapse text-light " id="navbarSupportedContent">
        <ul className="navbar-nav">
          <li className="nav-item active">
            <a className="nav-link" href="#">HOME<span className="sr-only"></span></a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">LINK</a>
          </li>          
          <li className="nav-item">
            <a className="nav-link" href="#">ABOUT</a>
          </li>          
          <li className="nav-item">
            <a className="nav-link" href="#">PORTFOLIO</a>
          </li>          
          <li className="nav-item">
            <a className="nav-link" href="#">CONTACT Us</a>
          </li>          
                  


        </ul>

      </div>


    </nav>

  )
};





export default Navbar;