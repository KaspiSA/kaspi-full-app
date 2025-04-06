
const axios = require("axios");

module.exports = async (req, res) => {
  const API_KEY = process.env.KASPI_API_KEY;

  try {
    const response = await axios.get("https://kaspi.kz/shop/api/v2/orders", {
      headers: {
        "Content-Type": "application/json",
        "X-Auth-Token": API_KEY
      }
    });
    res.status(200).json(response.data);
  } catch (error) {
    console.error("Ошибка:", error.response?.data || error.message);
    res.status(500).json({ error: "Ошибка при получении заказов" });
  }
};
