"use client"
import { Description } from "@radix-ui/react-dialog"
import { title } from "process"
import { Card } from "./ui/card"
import PostCard from "./card"
import { GripVertical, Table } from "lucide-react"
import { useState } from "react"
import { TableHead, TableRow, TableCell } from "./ui/table"
import { id } from "zod/v4/locales"

interface Posts {
    title: string
    description: string
}
export default function CardLayout({ posts }: { posts: Posts[] }) {
    const [view, setView] = useState(false);
    function handleView() {
        setView(!view);
    }
    return (
        <div className="flex flex-col gap-4 px-4 py-5">
            <div onClick={handleView} className="justify-end shadow hover:bg-gray-50 align-top flex rounded cursor-pointer bg-gray-100 w-[70px] p-2">
                <GripVertical />
                <span>View</span>
            </div>
            <div className="relative min-h-[300px]">
                {/* Posts Grid */}
                <div
                    className={`absolute inset-0 w-full h-full transition-opacity duration-500 ${view ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
                        }`}
                >
                    <div className="flex gap-2 justify-around flex-wrap">
                        {posts.map((post) => (
                            <PostCard key={post.title} post={post} />
                        ))}
                    </div>
                </div>
                {/* Table View */}
                <div
                    className={`absolute inset-0 w-full h-full transition-opacity duration-500 ${!view ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
                        } flex items-center justify-center`}
                >
                    <table className="w-full">
                        <TableRow>
                            <TableHead>
                                Title
                            </TableHead>
                            <TableHead>
                                Description
                            </TableHead>
                            <TableHead>
                                Image
                            </TableHead>
                        </TableRow>
                        {
                            posts.map(post => (
                                <TableRow key={post.title}>
                                    <TableCell>{post.title}</TableCell>
                                    <TableCell>{post.description}</TableCell>
                                    <TableCell><img src="demo.jpg" className="py-1 h-[40px]" alt="demo" /></TableCell>
                                </TableRow>
                            ))
                        }
                    </table>
                </div>
            </div>
        </div>
    );
}