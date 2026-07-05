"use client"

import type { NavItem } from "./data"
import { IconDots, IconFolder, IconShare3, IconTrash } from "@tabler/icons-react"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator
} from "@/components/ui/dropdown-menu"
import {
  SidebarGroup,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuAction,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar
} from "@/components/ui/sidebar"

export function NavDocuments({ items }: { items: NavItem[] }) {
  const { isMobile } = useSidebar()

  return (
    <SidebarGroup className="group-data-[collapsible=icon]:hidden">
      <SidebarGroupLabel>Documents</SidebarGroupLabel>
      <SidebarMenu>
        {items.map((item) => (
          <SidebarMenuItem key={item.title}>
            <SidebarMenuButton href={item.url} isActive={item.isActive}>
              {item.icon && <item.icon />}
              <span>{item.title}</span>
            </SidebarMenuButton>
            <DropdownMenu>
              <SidebarMenuAction className="rounded-sm data-[state=open]:bg-accent" showOnHover>
                <IconDots />
                <span className="sr-only">More</span>
              </SidebarMenuAction>
              <DropdownMenuContent placement={isMobile ? "bottom end" : "right top"}>
                <DropdownMenuItem>
                  <IconFolder />
                  <span>Open</span>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <IconShare3 />
                  <span>Share</span>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem variant="destructive">
                  <IconTrash />
                  <span>Delete</span>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </SidebarMenuItem>
        ))}
        <SidebarMenuItem>
          <SidebarMenuButton className="text-sidebar-foreground/70">
            <IconDots className="text-sidebar-foreground/70" />
            <span>More</span>
          </SidebarMenuButton>
        </SidebarMenuItem>
      </SidebarMenu>
    </SidebarGroup>
  )
}
