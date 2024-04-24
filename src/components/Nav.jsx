import { NavLink } from "react-router-dom";
import { useEffect} from "react";
import M from "materialize-css";

const Nav = () => {
  useEffect(() => {

    const dropdowns = document.querySelectorAll('.dropdown-trigger');
    M.Dropdown.init(dropdowns, {
      coverTrigger: false
    });


    const sideNav = document.querySelector('.sidenav');
    M.Sidenav.init(sideNav, {
      draggable: true,
    });
    
  }, []);

  useEffect(() => {
    const sideNavInstance = M.Sidenav.getInstance(document.querySelector(".sidenav"));
    const navLinks = document.querySelectorAll('.sidenav .nav-item a');
    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        sideNavInstance.close();
      });
    });
  }, []);

  return (
    <div>
    
      <nav className="hide-on-med-and-up">
        <div className="nav-wrapper">
        <img
              src="dog.png"
              className="brand-logo right"
              alt="logo"
            />
            <div className="nav-item right contact">
              Contact Directly (239)-292-5183
            </div>
          <a href="#" data-target="mobile-nav" className="sidenav-trigger">
            <i className="material-icons hamburger">menu</i>
          </a>
        </div>
      </nav>

      <ul className="sidenav" id="mobile-nav">
        <li className="nav-item">
          <NavLink to="/">Home</NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/faq">FAQs</NavLink>
        </li>
        <li>
          <ul className="collapsible">
            <li>
              <div className="collapsible-header nav-item">About</div>
              <div className="collapsible-body">
                <ul className="sub-nav">
                  <li className="nav-item">
                    <NavLink to="/about">About</NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink to="/pricing">Pricing</NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink to="/reviews">Reviews</NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink to="/gallery">Gallery</NavLink>
                  </li>
                </ul>
              </div>
            </li>
          </ul>
        </li>
        <li className="nav-item">
          <NavLink to="/services">Services</NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/contact">Reserve Your Spot</NavLink>
        </li>
      </ul>

   
      <div className="nav-wrapper hide-on-small-only">
        <nav>
          <div className="nav-wrapper">
            <img
              src="dog.png"
              className="brand-logo left"
              alt="logo"
            />
            <ul id="nav-mobile" className="right">
              <li className="nav-item">
                <NavLink to="/">Home</NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/faq">FAQs</NavLink>
              </li>
              <li>
                <a
                  href="#!"
                  className="dropdown-trigger nav-item"
                  data-target="about-dropdown"
                >
                  About
                  <i className="material-icons right">arrow_drop_down</i>
                </a>
                <ul id="about-dropdown" className="dropdown-content">
                  <li className="nav-item">
                    <NavLink to="/about">About</NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink to="/pricing">Pricing</NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink to="/reviews">Reviews</NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink to="/gallery">Gallery</NavLink>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <NavLink to="/services">Services</NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/contact">Reserve Your Spot</NavLink>
              </li>
            </ul>
            <div className="nav-item right contact">
              Contact Directly (239)-292-5183
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Nav;