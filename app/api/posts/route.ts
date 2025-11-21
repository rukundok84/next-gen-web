import prisma from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
    try {
        const data = await req.json()
        const { title, caption } = data
        const post = await prisma.post.create(
            {
                data: {
                    title,
                    caption
                }
            }
        )
        return NextResponse.json(post, { status: 201 })
    } catch (e) {
        return NextResponse.json({ error: "failed to post" }, { status: 500 })
    }
}   