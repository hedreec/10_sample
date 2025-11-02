import prisma from '../../lib/prisma';

function extractCity(address) {
  // 超簡易抽出（例: '兵庫県神戸市垂水区...' -> '神戸市'）
  const m = address.match(/(...[市区町村])/);
  return m ? m[0] : '不明';
}

export default async function handler(req, res) {
  const all = await prisma.property.findMany();
  const bucket = new Map();
  for (const p of all) {
    const city = extractCity(p.address);
    const arr = bucket.get(city) || [];
    arr.push(p.price);
    bucket.set(city, arr);
  }
  const data = Array.from(bucket.entries()).map(([city, prices]) => ({
    city,
    avgPrice: Math.round(prices.reduce((a,b)=>a+b,0) / prices.length)
  }));
  data.sort((a,b)=> b.avgPrice - a.avgPrice);
  res.status(200).json(data);
}
