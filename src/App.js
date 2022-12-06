import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AddProduct from "./components/AddProduct";
import Products from "./components/Products";
import NavBar from "./components/NavBar";
import Login from "./components/Login";
import "./App.css";

function App() {
  const [showNavBar, setShowNavBar] = useState(true);
  return (
    <div className="App">
      <Router>
        {showNavBar && <NavBar />}
        <Routes>
          <Route
            path="/"
            element={<Products setShowNavBar={setShowNavBar} />}
          />
          <Route
            path="/addproduct"
            element={<AddProduct setShowNavBar={setShowNavBar} />}
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
