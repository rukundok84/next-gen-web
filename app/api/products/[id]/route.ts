import prisma from "@/lib/prisma";
import { revalidatePath } from "next/cache";
import { NextRequest, NextResponse } from "next/server";

export async function DELETE(req: NextRequest, ctx: { params: { id: string } }) {
    try {
        await prisma.product.delete({ where: { id: ctx.params.id } })
        // revalidatePath("/admin/posts")
        return NextResponse.json({ message: "product deleted successfully" }, { status: 204 })
    } catch (e) {
        return NextResponse.json({ message: "internal server error" }, { status: 500 })
    }

}