import React, { useState, useEffect } from "react";

export default function App() {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    fetch("/api/kaspi-orders")
      .then(res => res.json())
      .then(data => {
        console.log("Заказы:", data);
        setOrders(data.orders || []);
      });
  }, []);

  return (
    <div style={{ padding: 20 }}>
      <h1>Kaspi Seller Assistant</h1>
      <h2>Список заказов:</h2>
      {orders.length === 0 ? (
        <p>Загрузка заказов...</p>
      ) : (
        <ul>
          {orders.map((order, index) => (
            <li key={index}>
              № {order.id} — {order.customer?.firstName || "Без имени"} ({order.status})
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
