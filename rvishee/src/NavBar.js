import React from "react";
import logo from "./images/logo.png";


const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navigation-wrap">
      <div className="container">
        <a className="navbar-brand" href="#">
          <img src={logo} alt="Logo" className="logo" />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <a className="nav-link" href="#home">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#about">About Us</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#explore-food">Explore Food</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#testinomial">Reviews</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#faq">FAQ</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#contact">Contact</a>
            </li>
            <li>
              <button className="main-btn">1100 333 111</button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
