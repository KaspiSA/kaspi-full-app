
import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/index";
import OrdersPage from "./pages/orders";

export default function App() {
  return (
    <Router>
      <nav style={{ padding: 10 }}>
        <Link to="/" style={{ marginRight: 10 }}>Главная</Link>
        <Link to="/orders">Заказы</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/orders" element={<OrdersPage />} />
      </Routes>
    </Router>
  );
}
