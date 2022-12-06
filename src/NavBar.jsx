import React from "react";
import "./styles/NavBar.css";
import { Link } from "react-router-dom";

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
            <Link to="/">Home</Link>
            <Link to="/auth">Sign Up</Link>
          </div>
        </nav>
      </div>
    </div>
  );
}
