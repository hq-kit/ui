"use client"

import type { NavItem } from "./data"
import { Navbar } from "@/components/ui/navbar"

export function NavDocuments({ items }: { items: NavItem[] }) {
  return (
    <Navbar.Group className="group-data-[collapsible=icon]:hidden" title="Documents">
      <Navbar.Menu>
        {items.map((item) => (
          <Navbar.MenuItem key={item.title}>
            <Navbar.MenuButton href={item.url} isActive={item.isActive}>
              {item.icon && <item.icon />}
              <span>{item.title}</span>
            </Navbar.MenuButton>
          </Navbar.MenuItem>
        ))}
      </Navbar.Menu>
    </Navbar.Group>
  )
}
