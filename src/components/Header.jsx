import React from "react";
import "../../public/css/header.css";

const Header = () => {
  window.onscroll = function () {
    const element = document.querySelector(".header");
    if (window.scrollY > 0) {
      element.classList.add("header-none");
    } else {
      element.classList.remove("header-none");
    }
  };

  const animateScroll = (e) => {
    const desing = document.querySelector(e);
    desing.scrollIntoView({
      behavior: "smooth",
    });
  };

  const handleHome = () => {
    animateScroll(".home");
  };
  const handleAbout = () => {
    animateScroll(".about");
  };
  const handlePortafolio = () => {
    animateScroll(".portafolio");
  };
  const handleSkill = () => {
    animateScroll(".skills");
  };
  return (
    <div className="header">
      <div className="header__container">
        <h1>CristoferIA</h1>
        <div className="header__menu">
          <ul>
            <li onClick={handleHome}>Home</li>
            <li onClick={handleAbout}>About me</li>
            <li onClick={handlePortafolio}>Portafolio</li>
            <li onClick={handleSkill}>Skills</li>
          </ul>
          <i className="menu-hamburger fas fa-bars"></i>
        </div>
      </div>
    </div>
  );
};

export default Header;
