import React, { useState } from "react";
import Login from "./Login";
import SignUp from "./SignUp";

export default function Auth({ setShowNavBar }) {
  // hide navigation bar for this component
  setShowNavBar(false);

  const [login, setLogin] = useState(true);

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
