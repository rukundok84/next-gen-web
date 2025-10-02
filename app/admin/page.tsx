import { AdminSidebar } from "@/components/adminSidebar";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { Children } from "react";

export default function Page(){
    return(
        <SidebarProvider>
            <AdminSidebar/>
            <main>
                <SidebarTrigger/>
                
            </main>
        </SidebarProvider>
    )
}