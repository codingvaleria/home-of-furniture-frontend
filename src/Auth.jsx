import React, { useState } from "react";
import Login from "./Login";
import SignUp from "./SignUp";

export default function Auth({ setShowNavBar }) {
  // hides the navigation bar while on this page
  setShowNavBar(false);
  // switches between login && resgistration
  const [login, setLogin] = useState(true);

  // changing state
  function handleClick(e) {
    e.preventDefault();
    setLogin(!login);
  }

  return (
    <div>
      {login ? (
        <Login handleClick={handleClick} />
      ) : (
        <SignUp handleClick={handleClick} />
      )}
    </div>
  );
}
