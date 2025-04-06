
import React, { useState, useEffect } from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

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
