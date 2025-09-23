import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function GET() {
  try {
    const orders = await prisma.order.findMany({
      include: {
        user: { select: { id: true, username: true, phone: true } },
        product: { select: { id: true, name: true, price: true } },
      },
      orderBy: { id: "desc" }, // latest first
    });

    return NextResponse.json({ orders });
  } catch (err) {
    console.error("Error fetching orders:", err);
    return NextResponse.json({ error: "Failed to fetch orders" }, { status: 500 });
  }
}
