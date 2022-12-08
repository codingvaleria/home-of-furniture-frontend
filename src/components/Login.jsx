import React, { useState } from "react";
import "../styles/Login.css";
import { useNavigate } from "react-router-dom";
import { BASE_URL } from "../config";

export default function Login({ onLogin }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const [errors, setErrors] = useState([]);

  function handleSubmit(e) {
    e.preventDefault();
    fetch(`${BASE_URL}/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, password }),
    }).then((r) => {
      if (r.ok) {
        r.json().then((user) => onLogin(user));
        navigate("/");
      } else {
        r.json().then((err) => setErrors(err.errors));
      }
    });
  }
  return (
    <div>
      <form id="form" onSubmit={handleSubmit}>
        <h1>Admin Login</h1>

        <div className="input-control">
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            name="username"
            autoComplete="off"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>

        <div className="input-control">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            autoComplete="current-password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        {errors.length > 0 && (
          <div className="input-control">
            {errors.map((error) => (
              <div className="error">
                <p>{error}</p>
              </div>
            ))}
          </div>
        )}

        <div className="input-control">
          <button type="submit">Signin</button>
        </div>
      </form>
    </div>
  );
}
