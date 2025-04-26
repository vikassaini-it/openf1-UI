import { Calendar, LayoutDashboard, History, Shield, Settings, LogOut, Tv } from "lucide-react"

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarHeader,
  SidebarMenuButton,
  SidebarSeparator,
  SidebarFooter,
  SidebarMenuItem,
  SidebarRail,
} from "@/components/ui/sidebar"

import { F1Logo } from "./f1-logo"
import { ThemeToggle } from "./theme-toggle"

// Menu items.
const items = [
  {
    title: "Dashboard",
    url: "/",
    icon: LayoutDashboard,
  },
  {
    title: "History",
    url: "/history",
    icon: History,
  },
  {
    title: "Live",
    url: "#",
    icon: Tv,
  },
  {
    title: "Ranking",
    url: "#",
    icon: Shield,
  }
]

export function AppSidebar() {
  return (
    <Sidebar>
       <SidebarHeader className="flex h-16 items-center px-4">
        <F1Logo />
      </SidebarHeader>
      <SidebarSeparator />
      <SidebarContent>
        <SidebarGroup>
          {/* <SidebarGroupLabel>Application</SidebarGroupLabel> */}
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
      <SidebarFooter>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton asChild>
              <a href="#" className="flex items-center w-100">
                <span><ThemeToggle/></span>
              </a>
            </SidebarMenuButton>
          </SidebarMenuItem>
          <SidebarMenuItem>
            <SidebarMenuButton asChild>
              <a href="/settings" className="flex items-center">
                <Settings className="mr-2 h-4 w-4" />
                <span>Settings</span>
              </a>
            </SidebarMenuButton>
          </SidebarMenuItem>
          {/* <SidebarMenuItem>
            <SidebarMenuButton asChild>
              <a href="/logout" className="flex items-center">
                <LogOut className="mr-2 h-4 w-4" />
                <span>Logout</span>
              </a>
            </SidebarMenuButton>
          </SidebarMenuItem> */}
        </SidebarMenu>
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  )
}
