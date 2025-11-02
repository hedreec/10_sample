import prisma from '../../../lib/prisma';

export default async function handler(req, res) {
  const id = Number(req.query.id);
  if (req.method === 'DELETE') {
    await prisma.property.delete({ where: { id } });
    return res.status(204).end();
  }
  res.setHeader('Allow', ['DELETE']);
  return res.status(405).end('Method Not Allowed');
}
