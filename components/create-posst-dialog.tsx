"use client"

import {
    Dialog,
    DialogClose,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { toast } from "sonner"
import React, { useState } from "react"
import { DotSquare, EllipsisVertical, Pen, Plus, Trash } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useRouter } from "next/navigation"
import { DropdownMenuItem } from "@radix-ui/react-dropdown-menu"
import Link from "next/link"
import { description } from "./chart-area-interactive"

export default function CreatePosstDialog() {
    const router = useRouter()
    const [isLoading, setIsLoading] = useState(false)
    const [isOpen, setIsOpen] = useState(false)

    async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault()
        setIsLoading(true)
        const formData = new FormData(e.currentTarget)
        const title = formData.get("title")
        const caption = formData.get("caption")

        const res = await fetch("/api/posts", {
            method: "POST",
            headers: { "content-type": "application/json" },
            body: JSON.stringify({ title, caption })
        })

        if (res.ok) {
            toast.info("post added successfully")
            setIsOpen(false)
            setIsLoading(false)
        } else {
            toast.error("failed to add product")
            setIsLoading(false)
        }
    }

    return (
        <Dialog open={isOpen} onOpenChange={setIsOpen}>

            <DialogTrigger asChild>
                <Button variant="outline"><div className="flex gap-1 cursor-pointer"><Plus></Plus>Create post</div></Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
                <form onSubmit={handleSubmit}>
                    <DialogHeader>
                        <DialogTitle>Edit profile</DialogTitle>
                        <DialogDescription>
                            Make changes to your profile here. Click save when you&apos;re
                            done.
                        </DialogDescription>
                    </DialogHeader>
                    <div className="grid gap-4">
                        <div className="grid gap-3">
                            <Label htmlFor="name-1">post Title</Label>
                            <Input id="name-1" name="title" required />
                        </div>
                        <div className="grid gap-3">
                            <Label htmlFor="username-1">caption</Label>
                            <Input id="username-1" name="caption" required />
                        </div>
                    </div>
                    <DialogFooter>
                        <DialogClose asChild>
                            <Button variant="outline">Cancel</Button>
                        </DialogClose>
                        <Button type="submit" disabled={isLoading}> Post{isLoading ? "..." : ""}</Button>
                    </DialogFooter>
                </form>
            </DialogContent>

        </Dialog>
    )
}
