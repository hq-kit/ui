"use client"

import type * as React from "react"
import type { NavItem } from "./data"
import { NavbarGroup, NavbarGroupContent, NavbarMenu, NavbarMenuButton, NavbarMenuItem } from "@/components/ui/navbar"

export function NavSecondary({
  items,
  ...props
}: {
  items: NavItem[]
} & React.ComponentPropsWithoutRef<typeof NavbarGroup>) {
  return (
    <NavbarGroup {...props}>
      <NavbarGroupContent>
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
      </NavbarGroupContent>
    </NavbarGroup>
  )
}
