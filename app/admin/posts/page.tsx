"use client"

import { AdminSidebar } from "@/components/adminSidebar"
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@radix-ui/react-dropdown-menu"
import { DotSquare, EllipsisVertical, Pen, Plus, Trash } from "lucide-react"
import { Button } from "@/components/ui/button"
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
import Link from "next/link"
const post = [
  {
    title: "shoes",
    desc: "black and white",
    status: "pending.."
  },
  {
    title: "dress",
    desc: "gray",
    status: "pending.."
  },
  {
    title: "shades",
    desc: "rayban",
    status: "pending.."

  }
]

export default function Page() {
  return (
    <div className="flex flex-row gap-3 justify-around ">
      <SidebarProvider className="w-[120px]">
        <AdminSidebar />
        <main>
          <SidebarTrigger />
        </main>
      </SidebarProvider>
      <div className="table-container w-[800px] ml-4 mt-20 text-center">
        <div className="flex justify-around">
          <h2 className="font-bold">Available products in stock</h2>
          <Dialog>
            <form>
              <DialogTrigger asChild>
                <Button variant="outline"><div className="flex gap-1"><Plus></Plus>Add new product</div></Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                  <DialogTitle>Edit profile</DialogTitle>
                  <DialogDescription>
                    Make changes to your profile here. Click save when you&apos;re
                    done.
                  </DialogDescription>
                </DialogHeader>
                <div className="grid gap-4">
                  <div className="grid gap-3">
                    <Label htmlFor="name-1">Name</Label>
                    <Input id="name-1" name="name" defaultValue="Pedro Duarte" />
                  </div>
                  <div className="grid gap-3">
                    <Label htmlFor="username-1">Username</Label>
                    <Input id="username-1" name="username" defaultValue="@peduarte" />
                  </div>
                </div>
                <DialogFooter>
                  <DialogClose asChild>
                    <Button variant="outline">Cancel</Button>
                  </DialogClose>
                  <Button type="submit">Save changes</Button>
                </DialogFooter>
              </DialogContent>
            </form>
          </Dialog>
        </div>
        <Table className="text-left mt-5">
          <TableHeader>
            <TableRow>
              <TableHead>Product title</TableHead>
              <TableHead>Product description</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>ACtion</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {
              post.length > 0 ? (
                post.map((post) => (
                  <TableRow key={post.title} className="hover:bg-white cursor-pointer">
                    <TableCell>{post.title}</TableCell>
                    <TableCell>{post.desc}</TableCell>
                    <TableCell className={post.status == "pending.." ? "text-orange-600" : "text-green-500"}>{post.status}</TableCell>
                    <TableCell>
                      <DropdownMenu>
                        <DropdownMenuTrigger className="flex gap-1 outline-0">
                          <Button className="bg-gray-100 text-black cursor-pointer hover:bg-gray-300">Action <EllipsisVertical /></Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent className=" shadow rounded p-1 bg-white">
                          <DropdownMenuItem className="w-[90px] outline-0 mt-1 rounded  hover:bg-gray-100">
                            <Link href="" className="flex text-green-500 justify-center py-1"><span>Edit</span><Pen /></Link>
                          </DropdownMenuItem>
                          <DropdownMenuItem className="w-[90px] outline-0 mt-1 hover:bg-gray-100 rounded-md">
                            <Link href="" className="flex text-red-500 justify-center py-1"><span>Delete</span><Trash /></Link>
                          </DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </TableCell>
                  </TableRow>
                ))
              ) :
                (
                  <TableCaption>No data in the table</TableCaption>
                )
            }
          </TableBody>
        </Table>
      </div>
    </div>
  )
}