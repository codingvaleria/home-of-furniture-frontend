import React from "react";
import "../styles/NavBar.css";
import { Link } from "react-router-dom";

export default function NavBar({ setUser, user }) {
  function handleLogoutClick() {
    fetch("/logout", { method: "DELETE" }).then((r) => {
      if (r.ok) {
        setUser(null);
      }
    });
  }
  return (
    <div className="navbar">
      <nav>
        <input type="checkbox" name="" id="check" />
        <label htmlFor="check" className="checkbtn">
          <i className="fas fa-bars"></i>
        </label>
        <label className="logo">Funiture Shop</label>
        <div className="nav-menu">
          {user && (
            <>
              <Link to="/">Home</Link>
              <Link to="/addproduct">Add Product</Link>
              <Link onClick={handleLogoutClick}>Logout</Link>
            </>
          )}
        </div>
      </nav>
    </div>
  );
}
