import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Contact from "./Contact";
import AddProduct from "./AddProduct";
import Products from "./Products";
import NavBar from "./NavBar";
import Auth from "./Auth";
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
          <Route path="/add" element={<AddProduct />} />
          <Route
            path="/contact"
            element={<Contact setShowNavBar={setShowNavBar} />}
          />
          <Route
            path="/addproduct"
            element={<AddProduct setShowNavBar={setShowNavBar} />}
          />
          <Route
            path="products/:id"
            element={<Products setShowNavBar={setShowNavBar} />}
          />
          <Route path="auth" element={<Auth setShowNavBar={setShowNavBar} />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
