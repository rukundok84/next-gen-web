import CardLayout from "@/components/card-layout";
import NavMenu from "@/components/navbar";
import { Button } from "@/components/ui/button";
import { Ghost } from "lucide-react";
import Link from "next/link";

export default function Home() {
  const posts = [
    {
      title: "shoes",
      description: "black and white"
    },
    {
      title: "dress",
      description: "violet cotton"
    },
    {
      title: "Rayban",
      description: "black shades"
    }
  ]
  return (
    <div className="transition">
      <NavMenu />
      <section className="h-[500px] w-full  items-center flex justify-center flex-col align-middle font-bold bg-gray-100">
        <h1 className="text-[100px]">Welcome to our site</h1>
        <Button variant={Ghost} className="bg-black text-white hover:text-amber-50 hover:bg-gray-800 cursor-pointer py-2 w-[130px]" asChild>
          <Link href="/admin">Get started</Link>
        </Button>
      </section>
      <CardLayout posts={posts} />
    </div>
  );
}