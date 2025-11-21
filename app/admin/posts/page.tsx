import { AdminSidebar } from "@/components/adminSidebar"
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@radix-ui/react-dropdown-menu"
import { DotSquare, EllipsisVertical, Pen, Plus, Trash } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import prisma from "@/lib/prisma"
import CreatePosstDialog from "@/components/create-posst-dialog"
import { DeleteButton } from "@/components/create-post-dialog"
export default async function Page() {
    const posts = await prisma.post.findMany()
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
                    <h2 className="font-bold">Posts</h2>
                    <CreatePosstDialog />
                </div>
                <Table className="text-left mt-5">
                    <TableHeader>
                        <TableRow>
                            <TableHead>Post title</TableHead>
                            <TableHead>Caption</TableHead>
                            <TableHead>Created at</TableHead>
                            <TableHead>ACtion</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {
                            posts.map((post) =>
                            (
                                <TableRow>
                                    <TableCell>{post.title}</TableCell>
                                    <TableCell>{post.caption}</TableCell>
                                    <TableCell>{post.createdAt.toLocaleDateString()}</TableCell>
                                    <TableCell>
                                        <DropdownMenu>
                                            <DropdownMenuTrigger className="flex gap-1 outline-0">
                                                <Button className="bg-gray-100 text-black cursor-pointer hover:bg-gray-300">Action <EllipsisVertical /></Button>
                                            </DropdownMenuTrigger>
                                            <DropdownMenuContent className=" shadow rounded p-1 bg-white">
                                                <DropdownMenuItem className="w-[90px] outline-0 mt-1 rounded  hover:bg-gray-100">
                                                    <Link href="" className="flex text-green-500 justify-center py-1"><span>Edit</span><Pen /></Link>
                                                </DropdownMenuItem>
                                                <DeleteButton productId={post.id} />
                                            </DropdownMenuContent>
                                        </DropdownMenu>
                                    </TableCell>
                                </TableRow>
                            )
                            )
                        }
                    </TableBody>
                </Table>
            </div>
        </div >
    )
}