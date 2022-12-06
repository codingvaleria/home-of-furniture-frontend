import React from "react";
import "../styles/Login.css";

export default function Login({ setShowNavBar }) {
  setShowNavBar(false);
  return (
    <div>
      <form id="form">
        <h1>Admin Login</h1>
        <div class="input-control">
          <label for="username">Username</label>
          <input type="text" id="username" name="username" />
        </div>

        <div class="input-control">
          <label for="password">Password</label>
          <input type="password" id="password" name="password" />
        </div>

        <div className="input-control">
          <button type="submit">Signin</button>
        </div>
      </form>
    </div>
  );
}
