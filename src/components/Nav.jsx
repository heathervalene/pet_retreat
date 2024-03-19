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
            <NavLink to="/contact" className="nav-item right">Contact</NavLink>
            <NavLink to="/" className="nav-item right">Home</NavLink>
        </div>
    </nav>
  </div>
    )
}


export default Nav;
