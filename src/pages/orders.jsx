
import { useEffect, useState } from "react";

export default function Orders() {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("/api/kaspi-orders")
      .then((res) => res.json())
      .then((data) => {
        if (data?.data) {
          setOrders(data.data);
        } else {
          setError("Ошибка загрузки заказов");
        }
        setLoading(false);
      })
      .catch((err) => {
        setError("Ошибка при загрузке");
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Загрузка заказов...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div style={{ padding: 20 }}>
      <h1>Список заказов</h1>
      <table border="1" cellPadding="8" style={{ width: "100%", marginTop: 20 }}>
        <thead>
          <tr>
            <th>Код</th>
            <th>Имя клиента</th>
            <th>Телефон</th>
            <th>Адрес</th>
            <th>Сумма</th>
            <th>Статус</th>
            <th>Дата</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order) => {
            const o = order.attributes;
            const d = new Date(o.creationDate).toLocaleString();
            return (
              <tr key={order.id}>
                <td>{o.code}</td>
                <td>{o.customer?.firstName} {o.customer?.lastName}</td>
                <td>{o.customer?.cellPhone}</td>
                <td>{o.deliveryAddress?.formattedAddress || "–"}</td>
                <td>{o.totalPrice} ₸</td>
                <td>{o.status}</td>
                <td>{d}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
