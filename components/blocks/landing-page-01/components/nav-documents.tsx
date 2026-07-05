"use client"

import type { NavItem } from "./data"
import { NavbarGroup, NavbarMenu, NavbarMenuButton, NavbarMenuItem } from "@/components/ui/navbar"

export function NavDocuments({ items }: { items: NavItem[] }) {
  return (
    <NavbarGroup className="group-data-[collapsible=icon]:hidden" title="Documents">
      <NavbarMenu>
        {items.map((item) => (
          <NavbarMenuItem key={item.title}>
            <NavbarMenuButton href={item.url} isActive={item.isActive}>
              {item.icon && <item.icon />}
              <span>{item.title}</span>
            </NavbarMenuButton>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </NavbarGroup>
  )
}
