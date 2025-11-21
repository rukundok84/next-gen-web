import { AdminSidebar } from "@/components/adminSidebar"
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@radix-ui/react-dropdown-menu"
import { DotSquare, EllipsisVertical, Pen, Plus, Trash } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
// import CreateuserDialog, { DeleteButton } from "@/components/create-user-dialog"
import prisma from "@/lib/prisma"
export default async function Page() {
  const users = await prisma.user.findMany()
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
          {/* <CreateuserDialog /> */}
        </div>
        <Table className="text-left mt-5 w-full">
          <TableHeader>
            <TableRow>
              <TableHead>Names</TableHead>
              <TableHead>Email</TableHead>
              <TableHead>Phone number</TableHead>
              <TableHead>Created at</TableHead>
              <TableHead>Action</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {
              users.length > 0 ? (
                users.map((user) => (
                  <TableRow key={user.id} className="hover:bg-white cursor-pointer">
                    <TableCell>{user.fullName}</TableCell>
                    <TableCell>{user.email}</TableCell>
                    <TableCell>{user.phoneNumber}</TableCell>
                    <TableCell>{user.createdAt.toLocaleDateString()}</TableCell>
                    <TableCell>
                      <DropdownMenu>
                        <DropdownMenuTrigger className="flex gap-1 outline-0">
                          <Button className="bg-gray-100 text-black cursor-pointer hover:bg-gray-300">Action <EllipsisVertical /></Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent className=" shadow rounded p-1 bg-white">
                          <DropdownMenuItem className="w-[90px] outline-0 mt-1 rounded  hover:bg-gray-100">
                            <Link href="" className="flex text-green-500 justify-center py-1"><span>Edit</span><Pen /></Link>
                          </DropdownMenuItem>
                          {/* <DeleteButton productId={user.id}/> */}
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
    </div >
  )
}