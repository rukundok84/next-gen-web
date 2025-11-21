import prisma from "@/lib/prisma";
import { Prisma } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
    try {
        const data = await req.json()
        const { fullName, email, phoneNumber, password, dob } = data
        const user = await prisma.user.create({
            data: {
                fullName,
                email,
                phoneNumber,
                password,
                dob
            }
        })

        return NextResponse.json(user, { status: 201 })
    }
    catch (e) {
        return NextResponse.json({ error: "failed to add user" }, { status: 500 })
    }


}