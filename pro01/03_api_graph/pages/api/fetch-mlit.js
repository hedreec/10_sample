export default async function handler(req, res) {
  const { prefecture='兵庫県', city='神戸市', year='2024' } = req.query || {};
  const base = process.env.MLIT_BASE_URL;
  try {
    if (base) {
      const url = `${base}?pref=${encodeURIComponent(prefecture)}&city=${encodeURIComponent(city)}&year=${encodeURIComponent(year)}`;
      const r = await fetch(url);
      const json = await r.json();
      return res.status(200).json({ mode:'passthrough', params:{ prefecture, city, year }, result: json });
    }
    const mock = [
      { quarter: 'Q1', avgPrice: 21000000 },
      { quarter: 'Q2', avgPrice: 23000000 },
      { quarter: 'Q3', avgPrice: 24000000 },
      { quarter: 'Q4', avgPrice: 22500000 }
    ];
    return res.status(200).json({ mode:'mock', params:{ prefecture, city, year }, result: mock });
  } catch (e) {
    console.error(e);
    return res.status(500).json({ error:'fetch failed' });
  }
}
