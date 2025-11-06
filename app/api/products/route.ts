import prisma from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
    try {
        const data = await req.json()
        const {title, description} = data
        const product = await prisma.product.create({
            data: {
                title,
                description
            }
        })
        return NextResponse.json(product, {status: 201})
    } catch (e) {
        console.error(e)
        return NextResponse.json({error: "internal server error"}, {status: 500})
    }
}