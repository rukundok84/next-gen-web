import { Calendar, Home, Inbox, LucideBadgePoundSterling, PodcastIcon, Search, Settings, ShoppingBagIcon, ShoppingBasket, User2 } from "lucide-react"

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"
import { IconBrandProducthunt } from "@tabler/icons-react"

// Menu items.
const items = [
  {
    title: "Home",
    url: "#",
    icon: Home,
  },
  {
    title: "Products",
    url: "/products/posts",
    icon: ShoppingBagIcon,
  },
  {
    title: "Posts",
    url: "/admin/posts",
    icon: LucideBadgePoundSterling,
  },
  {
    title: "Users",
    url: "users",
    icon: User2,
  },
  {
    title: "Search",
    url: "#",
    icon: Search,
  },
  {
    title: "Settings",
    url: "#",
    icon: Settings,
  },
]

export function AdminSidebar() {
  return (
    <Sidebar className="bg-black">
        <SidebarHeader className="bg-black text-white">
            <div className="flex gap-1 justify-center">
                <img src="logo.png" height={40} width={80}></img>
                <span>ADMIN</span>
            </div>
        </SidebarHeader>
      <SidebarContent className="bg-black text-white">
        <SidebarGroup>
          <SidebarGroupLabel className="text-amber-50">Application</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <a href={item.url}>
                      <item.icon />
                      <span>{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  )
}