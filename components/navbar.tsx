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
        <nav className="w-full py-3">
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
        <div className="p-2 font-bold text-[17px] hover:text-gray-600 rounded-md">
            <Link href={href}>{title}</Link>
        </div>
    )
}

function SearchBox(){
    return(
        <div className="flex justify-center align-middle gap-2">
            <div className="border-b-2 border-black">
                <input placeholder="Search..." className="border-none outline-none bg-white rounded-md text-black h-full" type="search" name="" id="" />
            </div>
            <span><SearchIcon className="h-full pr-2 cursor-pointer"/></span>
        </div>
    )
}