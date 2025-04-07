import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home.jsx";
import Orders from "./pages/Orders.jsx";

export default function App() {
  return (
    <Router>
      <nav style={{ padding: 10, background: "#eee" }}>
        <Link to="/" style={{ marginRight: 10 }}>Главная</Link>
        <Link to="/orders" style={{ marginRight: 10 }}>Заказы</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/orders" element={<Orders />} />
      </Routes>
    </Router>
  );
}