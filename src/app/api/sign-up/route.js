import { NextResponse } from "next/server";
import { PrismaClient } from '@prisma/client'
import bcrypt from "bcryptjs";

const prisma = new PrismaClient()

export async function POST(req) {
    try {
        const body = await req.json();

        const { username, password, phone } = body;

        const hashpassword = await bcrypt.hash(password, 10)

        const users = await prisma.user.create({
            data: { username, password: hashpassword, phone, role: 'admin'},
        });

        return NextResponse.json({ message: 'Account Created' })
    } catch (error) { return NextResponse.json({ error: error.message }, { status: 500 }) }
}