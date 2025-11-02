import prisma from '../../lib/prisma';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.setHeader('Allow',['POST']); return res.status(405).end('Method Not Allowed');
  }
  const { items } = req.body || {};
  if (!Array.isArray(items)) return res.status(400).json({ error:'invalid payload' });
  const cleaned = items.map(it => ({
    title: String(it.title || 'N/A'),
    price: Number(it.price || 0),
    address: String(it.address || ''),
    area: Number(it.area || 0)
  }));
  try {
    const created = await prisma.$transaction(
      cleaned.map(c => prisma.property.create({ data: c }))
    );
    return res.status(201).json({ count: created.length });
  } catch (e) {
    console.error(e);
    return res.status(500).json({ error:'db error' });
  }
}
