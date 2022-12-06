import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
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
          <Route path="/" element={<Products />} />
          <Route path="/add" element={<AddProduct />} />
          <Route path="/addproduct" element={<AddProduct />} />
          <Route path="products/:id" element={<Products />} />
          <Route path="auth" element={<Auth setShowNavBar={setShowNavBar} />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
