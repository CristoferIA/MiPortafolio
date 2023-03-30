import React from "react";
import "../../public/css/header.css";
import { Link, animateScroll as scroll } from "react-scroll";

const Header = () => {
  window.onscroll = function () {
    const element = document.querySelector(".header");
    if (window.scrollY > 0) {
      element.classList.add("header-none");
    } else {
      element.classList.remove("header-none");
    }
  };
  return (
    <div className="header">
      <div className="header__container">
        <h1>
          <Link to="home" smooth={true} duration={500}>
            CIA
          </Link>
        </h1>
        <div className="header__menu">
          <ul>
            <li>
              <Link to="home" smooth={true} duration={500}>
                Home
              </Link>
            </li>
            <li>
              <Link to="about" smooth={true} duration={500}>
                About me
              </Link>
            </li>
            <li>
              <Link to="portafolio" smooth={true} duration={500}>
                Portafolio
              </Link>
            </li>
            <li>
              <Link to="skills" smooth={true} duration={500}>
                Skills
              </Link>
            </li>
            <li>
              <Link to="contact" smooth={true} duration={500}>
                Contact
              </Link>
            </li>
          </ul>
          <i className="menu-hamburger fas fa-bars"></i>
        </div>
      </div>
    </div>
  );
};

export default Header;
