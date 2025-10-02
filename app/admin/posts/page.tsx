"use client"

import { AdminSidebar } from "@/components/adminSidebar"
import { Button } from "@/components/ui/button"
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@radix-ui/react-dropdown-menu"
import { DotSquare, EllipsisVertical, Pen, Trash } from "lucide-react"
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
    <div className="flex">
      <SidebarProvider>
        <AdminSidebar />
        <main>
          <SidebarTrigger />

        </main>
      </SidebarProvider>
      <Table>
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
                <TableRow key={post.title} className="hover:bg-white">
                  <TableCell>{post.title}</TableCell>
                  <TableCell>{post.desc}</TableCell>
                  <TableCell className={post.status == "pending.."? "text-orange-600" : "text-green-500"}>{post.status}</TableCell>
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
  )
}