import { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AddProduct from "./components/AddProduct";
import Products from "./components/Products";
import NavBar from "./components/NavBar";
import Login from "./components/Login";
import ProductDetail from "./components/ProductDetail";
import EditProduct from "./components/EditProduct";
import "./App.css";

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    // automatic login
    fetch("/me").then((r) => {
      if (r.ok) {
        r.json().then((user) => setUser(user));
      }
    });
  }, []);

  return (
    <div className="App">
      <Router>
        <NavBar setUser={setUser} user={user} />
        <Routes>
          <Route path="/" element={<Products user={user} />} />
          <Route path="/products" element={<Products user={user} />} />
          <Route path="/products/:id" element={<ProductDetail user={user} />} />
          <Route path="/addproduct" element={<AddProduct />} />
          <Route path="products/edit/:id" element={<EditProduct />} />
          <Route path="/login" element={<Login onLogin={setUser} />} />
        </Routes>
      </Router>
    </div>
  );
}
export default App;
