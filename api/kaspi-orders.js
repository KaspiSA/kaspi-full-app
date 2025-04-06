
const KASPI_API_KEY = process.env.KASPI_API_KEY;

export default async function handler(req, res) {
  const url = "https://kaspi.kz/shop/api/v2/orders?page[number]=1&page[size]=10&filter[orders][creationDate][$ge]=1711929600000";

  const response = await fetch(url, {
    headers: {
      "Content-Type": "application/json",
      "X-Auth-Token": KASPI_API_KEY,
    },
  });

  const data = await response.json();

  if (!response.ok) {
    return res.status(response.status).json({ error: data });
  }

  return res.status(200).json(data);
}



