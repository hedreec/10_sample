import prisma from '../../../lib/prisma';

export default async function handler(req, res) {
  if (req.method === 'GET') {
    const all = await prisma.property.findMany({ orderBy: { id: 'desc' } });
    return res.status(200).json(all);
  }
  if (req.method === 'POST') {
    const { title, price, address, area } = req.body || {};
    if (!title || !price || !address || !area) return res.status(400).json({ error: 'invalid payload' });
    const created = await prisma.property.create({ data: { title, price, address, area } });
    return res.status(201).json(created);
  }
  res.setHeader('Allow', ['GET','POST']);
  return res.status(405).end('Method Not Allowed');
}
