import React, { useEffect, useState } from "react";
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

export default function Orders() {
  const [orders, setOrders] = useState([]);
  const [labels, setLabels] = useState([]);
  const [sums, setSums] = useState([]);

  useEffect(() => {
    fetch("/api/kaspi-orders")
      .then((res) => res.json())
      .then((data) => {
        setOrders(data.orders || []);
        const grouped = {};
        (data.orders || []).forEach((o) => {
          const d = new Date(o.creationDate).toLocaleDateString();
          grouped[d] = (grouped[d] || 0) + o.totalPrice;
        });
        setLabels(Object.keys(grouped));
        setSums(Object.values(grouped));
      });
  }, []);

  return (
    <div style={{ padding: 20 }}>
      <h1>📦 Заказы</h1>
      {orders.length === 0 ? (
        <p>Загрузка заказов...</p>
      ) : (
        <>
          <Line
            data={{
              labels,
              datasets: [
                {
                  label: "Доход по дням",
                  data: sums,
                },
              ],
            }}
          />
          <ul>
            {orders.map((order, i) => (
              <li key={i}>
                <b>{order.customer?.firstName}</b> — {order.totalPrice} ₸ ({order.status})
              </li>
            ))}
          </ul>
        </>
      )}
    </div>
  );
}