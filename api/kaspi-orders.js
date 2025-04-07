export default function handler(req, res) {
  // Пример мок-данных — заменить на реальную интеграцию с Kaspi API
  res.status(200).json({
    orders: [
      {
        id: "001",
        customer: { firstName: "Айбар" },
        totalPrice: 10000,
        status: "COMPLETED",
        creationDate: Date.now() - 86400000 * 1
      },
      {
        id: "002",
        customer: { firstName: "Аружан" },
        totalPrice: 15000,
        status: "PROCESSING",
        creationDate: Date.now()
      }
    ]
  });
}