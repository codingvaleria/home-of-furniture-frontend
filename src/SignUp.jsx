import React from "react";
import "./styles/Login.css";

export default function SignUp({ handleClick }) {
  return (
    <div>
      <form action="/" id="form">
        <h1>Registration</h1>
        <div class="input-control">
          <label for="username">Username</label>
          <input type="text" id="username" name="username" />
        </div>
        <div class="input-control">
          <label for="email">Email</label>
          <input type="text" id="email" name="email" />
        </div>
        <div class="input-control">
          <label for="password">Password</label>
          <input type="password" id="password" name="password" />
        </div>
        <div class="input-control">
          <label for="password">Password</label>
          <input type="password2" id="password2" name="password2" />
        </div>
        <div className="input-control">
          <button type="submit">Sign Up</button>
        </div>
        <div className="input-control">
          <p className="p">
            Already have an account ? <span onClick={handleClick}>Signin</span>{" "}
          </p>
        </div>
      </form>
    </div>
  );
}
