import Link from "next/link";
type MenuTypes = {
    title: string;
    href: string;
}
import { SearchIcon, UserCircle } from "lucide-react";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
export default function NavMenu() {
    const menus: {
        title: string;
        href: string;
    }[] = [

            {
                title: "home",
                href: "/"
            },
            {
                title: "about",
                href: "/about"
            },
            {
                title: "contact",
                href: "/contact"
            }
        ]
    return (
        <nav className=" w-full py-3 shadow">
            <div className="flex justify-around">
                {
                    menus.map((menu, index) => (
                        <NavItem key={index} title={menu.title} href={menu.href} />
                    ))
                }
                <SearchBox />
                <DropdownMenu>
                    <DropdownMenuTrigger className="cursor-pointer"><UserCircle className="h-[30px] w-[30px]"/></DropdownMenuTrigger>
                    <DropdownMenuContent>
                        <DropdownMenuItem className="cursor-pointer"><Link href="/login">Login</Link></DropdownMenuItem>
                        <DropdownMenuItem className="cursor-pointer"><Link href="/signup">Signup</Link></DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
            </div>
        </nav>
    )
}

function NavItem({ title, href }: MenuTypes) {
    return (
        <div className="font-bold text-[17px]">
            <Link className="hover:text-gray-700 hover:border-b-2" href={href}>{title}</Link>
        </div>
    )
}

function SearchBox() {
    return (
        <div className="flex justify-center align-middle gap-2 h-[40px] border-b-2 border-black">
            <input placeholder="Search..." className="border-none outline-none bg-white text-black text-[13px]  rounded-md h-full" type="search" name="" id="" />
            <span><SearchIcon className="h-full  pr-2 cursor-pointer" /></span>
        </div>
    )
}