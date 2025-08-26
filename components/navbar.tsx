import Link from "next/link";
type MenuTypes = {
    title: string;
    href: string;
}
import { SearchIcon} from "lucide-react";
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
        <nav className="bg-slate-600 text-white w-full py-3">
            <div className="flex justify-around">
                {
                    menus.map((menu, index)  => (
                        <NavItem key={index} title= {menu.title} href={menu.href} />
                    ) )
                }
                <SearchBox/>
            </div>
        </nav>
    )
}

function NavItem({ title, href }: MenuTypes ) {
    return (
        <div className="p-2 font-bold text-[17px] hover:text-gray-300 hover:bg-slate-500 rounded-md">
            <Link href={href}>{title}</Link>
        </div>
    )
}

function SearchBox(){
    return(
        <div className="flex justify-center align-middle gap-2 bg-white rounded-md">
            <input placeholder="Search..." className="text-center border-none outline-none bg-white text-slate-400 rounded-md h-full" type="search" name="" id="" />
            <span><SearchIcon className="h-full text-slate-400 pr-2 cursor-pointer"/></span>
        </div>
    )
}