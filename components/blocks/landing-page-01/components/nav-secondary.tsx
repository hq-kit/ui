"use client"

import type { ComponentPropsWithoutRef } from "react"
import type { NavItem } from "./data"
import { Navbar } from "@/components/ui/navbar"

export function NavSecondary({
  items,
  ...props
}: {
  items: NavItem[]
} & ComponentPropsWithoutRef<typeof Navbar.Group>) {
  return (
    <Navbar.Group {...props}>
      <Navbar.GroupContent>
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
      </Navbar.GroupContent>
    </Navbar.Group>
  )
}
