import { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AddProduct from "./components/AddProduct";
import Products from "./components/Products";
import NavBar from "./components/NavBar";
import Login from "./components/Login";
import ProductDetail from "./components/ProductDetail";
import EditProduct from "./components/EditProduct";
import "./App.css";
import { BASE_URL } from "./config";

function App() {
  const [user, setUser] = useState(null);
  useEffect(() => {
    try {
      const savedUser = localStorage.getItem("user");
      if (savedUser) {
        setUser(JSON.parse(savedUser));
      }
    } catch (e) {}
  });

  useEffect(() => {
    // automatic login
    fetch(`${BASE_URL}/me`).then((r) => {
      if (r.ok) {
        r.json().then((user) => {
          setUser(user);
          localStorage.setItem("user", JSON.stringify(user));
        });
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
