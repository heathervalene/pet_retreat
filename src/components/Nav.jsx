import { NavLink } from "react-router-dom";

const Nav = () => {
    return (
  <div className='nav-wrapper'>
    <nav>
        <div className="nav-wrapper">
            <img src="dog.png" className="brand-logo left" alt ="logo" />
            <NavLink to="/about" className="nav-item right">About</NavLink>
            <NavLink to="/gallery" className="nav-item right">Gallery</NavLink>
            <NavLink to="/services" className="nav-item right">Services</NavLink>
            <NavLink to="/contact" className="nav-item right">Reserve Your Spot</NavLink>
            <NavLink to="/" className="nav-item right">Home</NavLink>
            <div className="nav-item right contact">Contact Directly (239)-292-5183</div>
        </div>
    </nav>
  </div>
    )
}


export default Nav;
