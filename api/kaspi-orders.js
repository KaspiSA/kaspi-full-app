
const KASPI_API_KEY = process.env.KASPI_API_KEY;

export default async function handler(req, res) {
  const from = 1711584000000;
  const to = 1712188800000;

  const url = `https://kaspi.kz/shop/api/v2/orders?page[number]=1&page[size]=20&filter[orders][creationDate][$ge]=${from}&filter[orders][creationDate][$le]=${to}`;

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
