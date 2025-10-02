"use client"
import { Description } from "@radix-ui/react-dialog"
import { title } from "process"
import { Card } from "./ui/card"
import PostCard from "./card"
import { GripVertical } from "lucide-react"
import { useState } from "react"

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
            <div onClick={handleView} className="justify-end align-top flex rounded cursor-pointer bg-gray-100 w-[70px] p-2">
                <GripVertical />
                <span>View</span>
            </div>
            <div className="relative min-h-[300px]">
                {/* Posts Grid */}
                <div
                    className={`absolute inset-0 w-full h-full transition-opacity duration-500 ${
                        view ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
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
                    className={`absolute inset-0 w-full h-full transition-opacity duration-500 ${
                        !view ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
                    } flex items-center justify-center`}
                >
                    <span>table</span>
                </div>
            </div>
        </div>
    );
}