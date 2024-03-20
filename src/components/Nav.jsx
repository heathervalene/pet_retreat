import { NavLink } from "react-router-dom";
import { useEffect } from "react";
import M from "materialize-css";

const Nav = () => {
  useEffect(() => {
    const dropdowns = document.querySelectorAll('.dropdown-trigger');
    M.Dropdown.init(dropdowns, {
      coverTrigger: false
    });
  }, []);

  return (
    <div className='nav-wrapper'>
      <nav>
        <div className="nav-wrapper">
          <img src="dog.png" className="brand-logo left" alt="logo" />
          <NavLink to="/" className="nav-item right">Home</NavLink>
          <div className="nav-item right">
            <a href="#!" className="dropdown-trigger" data-target="about-dropdown">About<i className="material-icons right">arrow_drop_down</i></a>
          </div>
          <ul id="about-dropdown" className="dropdown-content">
            <li><NavLink to="/about">About</NavLink></li>
            <li><NavLink to="/reviews">Reviews</NavLink></li>
            <li><NavLink to="/gallery">Gallery</NavLink></li>
          </ul>
          <NavLink to="/services" className="nav-item right">Services</NavLink>
          <NavLink to="/contact" className="nav-item right">Reserve Your Spot</NavLink>
          <div className="nav-item right contact">Contact Directly (239)-292-5183</div>
        </div>
      </nav>
    </div>
  );
};

export default Nav;
