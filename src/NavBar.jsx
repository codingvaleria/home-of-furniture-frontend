import React from "react";
import "./styles/NavBar.css";

export default function NavBar() {
  return (
    <div>
      <div className="navbar">
        <nav>
          <input type="checkbox" name="" id="check" />
          <label htmlFor="check" className="checkbtn">
            <i className="fas fa-bars"></i>
          </label>
          <label className="logo">Funiture Shop</label>
          <div className="nav-menu">
            <a to="/">Home</a>
            <a to="/about">About</a>
            <a to="/signup">Sign Up</a>
          </div>
        </nav>
      </div>
    </div>
  );
}
