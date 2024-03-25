import { NavLink } from "react-router-dom";
import { useEffect } from "react";
import M from "materialize-css";

const Nav = () => {
  useEffect(() => {

    const dropdowns = document.querySelectorAll('.dropdown-trigger');
    M.Dropdown.init(dropdowns, {
      coverTrigger: false
    });


    const sideNav = document.querySelector('.sidenav');
    M.Sidenav.init(sideNav, {});
  }, []);

  return (
    <div>
     
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

      {/* Regular navigation bar for desktop view */}
      <div className="nav-wrapper">
        <nav>
          <div className="nav-wrapper">
            <img
              src="dog.png"
              className="brand-logo left"
              alt="logo"
              style={{ cursor: "pointer" }}
              onClick={() => {
                const sideNavInstance = M.Sidenav.getInstance(
                  document.querySelector(".sidenav")
                );
                sideNavInstance.open();
              }}
            />
            <ul id="nav-mobile" className="right hide-on-med-and-down">
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