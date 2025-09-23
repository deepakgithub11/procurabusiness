import { NextResponse } from "next/server";
import { getServerSession } from "next-auth/next";
import { authOptions } from "../auth/[...nextauth]/route";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function POST(req) {
  try {
    const session = await getServerSession(authOptions);

    if (!session) {
      return NextResponse.json({ error: "Please Login to Place Order" }, { status: 401 });
    }

    const userId = session.user.id; 

    const body = await req.json();
    const { productId, quantity, total, } = body;

    if (!productId || !quantity || !total) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    // Validate product exists
    const product = await prisma.product.findUnique({ where: { id: productId } });
    if (!product) return NextResponse.json({ error: "Product not found" }, { status: 404 });

    const newOrder = await prisma.order.create({
      data: {
        userId,
        productId,
        quantity,
        total,
      },
    });

    return NextResponse.json({ message: "Order placed successfully", order: newOrder });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ error: "Failed to place order" }, { status: 500 });
  }
}
