import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();


export async function GET() {
  try {
    const products = await prisma.product.findMany();

    return new Response(JSON.stringify({ products }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (err) {
    console.error(err);
    return new Response(JSON.stringify({ message: 'Internal Server Error' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}
