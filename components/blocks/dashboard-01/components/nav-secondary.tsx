"use client"

import type { ComponentPropsWithoutRef } from "react"
import type { NavItem } from "./data"
import { Sidebar } from "@/components/ui/sidebar"

export function NavSecondary({
  items,
  ...props
}: {
  items: NavItem[]
} & ComponentPropsWithoutRef<typeof Sidebar.Group>) {
  return (
    <Sidebar.Group {...props}>
      <Sidebar.GroupContent>
        <Sidebar.Menu>
          {items.map((item) => (
            <Sidebar.MenuItem key={item.title}>
              <Sidebar.MenuButton href={item.url} isActive={item.isActive}>
                {item.icon && <item.icon />}
                <span>{item.title}</span>
              </Sidebar.MenuButton>
            </Sidebar.MenuItem>
          ))}
        </Sidebar.Menu>
      </Sidebar.GroupContent>
    </Sidebar.Group>
  )
}
