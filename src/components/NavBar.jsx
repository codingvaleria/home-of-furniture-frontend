import React from "react";
import "../styles/NavBar.css";
import { Link, useNavigate } from "react-router-dom";

export default function NavBar({ setUser, user }) {
  const navigate = useNavigate();

  function handleLogoutClick() {
    fetch("/logout", { method: "DELETE" }).then((r) => {
      if (r.ok) {
        setUser(null);
        navigate("/");
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
        <label className="logo">home of furniture</label>
        <div className="nav-menu">
          <Link to="/">Home</Link>
          {user && (
            <>
              <Link to="/addproduct">Add Product</Link>
              <Link onClick={handleLogoutClick}>Logout</Link>
            </>
          )}
        </div>
      </nav>
    </div>
  );
}
