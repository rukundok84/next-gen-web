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
import { useState } from "react"
import { DotSquare, EllipsisVertical, Pen, Plus, Trash } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useRouter } from "next/navigation"
import { DropdownMenuItem } from "@radix-ui/react-dropdown-menu"
import Link from "next/link"

export default function CreatePostDialog() {
    const router = useRouter()
    const [isLoading, setIsLoading] = useState(false)
    const [isOpen, setIsOpen] = useState(false)
    async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault()
        setIsLoading(true)
        const formData = new FormData(e.currentTarget)
        const title = formData.get("title") as string
        const description = formData.get("description") as string
        const res = await fetch("/api/products", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ title, description })
        })

        if (res.ok) {
            toast.info("product added successfully")
            setIsLoading(false)
            setIsOpen(false)
            router.refresh()
        } else {
            toast.error("failed to add product")
            setIsLoading(false)
        }
    }
    return (
        <Dialog open={isOpen} onOpenChange={setIsOpen}>

            <DialogTrigger asChild>
                <Button variant="outline"><div className="flex gap-1 cursor-pointer"><Plus></Plus>Add new product</div></Button>
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
                            <Label htmlFor="name-1">Product Title</Label>
                            <Input id="name-1" name="title" />
                        </div>
                        <div className="grid gap-3">
                            <Label htmlFor="username-1">Description</Label>
                            <Input id="username-1" name="description" />
                        </div>
                    </div>
                    <DialogFooter>
                        <DialogClose asChild>
                            <Button variant="outline">Cancel</Button>
                        </DialogClose>
                        <Button type="submit" disabled={isLoading}> Add product{isLoading ? "..." : ""}</Button>
                    </DialogFooter>
                </form>
            </DialogContent>

        </Dialog>
    )
}
export function DeleteButton({ productId, onSuccess }: { productId: string }) {
    const router = useRouter()
    async function handleDelete() {
        const res = await fetch(`/api/products/${productId}`, {
            method: "DELETE"
        })
        if (res.ok) {
            toast.success("product deleted successfully")
            return
        }
        toast.error("failed to delete a product")
    }
    return (
        <DropdownMenuItem className="w-[90px] outline-0 mt-1 hover:bg-gray-100 rounded-md">
            <Button onClick={handleDelete} className="flex text-red-500 justify-center py-1 bg-white hover:bg-gray-100 cursor-pointer" ><span>Delete</span><Trash /></Button>
        </DropdownMenuItem>
    )

}
