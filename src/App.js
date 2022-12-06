import { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AddProduct from "./components/AddProduct";
import Products from "./components/Products";
import NavBar from "./components/NavBar";
import Login from "./components/Login";
import "./App.css";

function App() {
  const [showNavBar, setShowNavBar] = useState(true);

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
        <NavBar />
        <Routes>
          <Route path="/" element={<Products user={user} />} />
          <Route path="/addproduct" element={<AddProduct />} />
          <Route path="/:id" element={<AddProduct />} />
          <Route path="/login" element={<Login onLogin={setUser} />} />
        </Routes>
      </Router>
    </div>
  );
}
export default App;
