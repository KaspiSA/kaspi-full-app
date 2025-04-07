export default async function handler(req, res) {
  const token = process.env.KASPI_AUTH_TOKEN; // Вставь свой токен в .env

  const start = new Date();
  start.setDate(start.getDate() - 3); // последние 3 дня
  const fromDate = start.toISOString();

  try {
    const response = await fetch("https://kaspi.kz/shop/api/v2/orders", {
      method: "GET",
      headers: {
        "X-Auth-Token": token,
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
    });

    const data = await response.json();
    res.status(200).json(data);
  } catch (err) {
    console.error("Ошибка Kaspi API:", err);
    res.status(500).json({ error: "Ошибка получения заказов" });
  }
}