"use client"

import type { NavItem } from "./data"
import { IconChevronDown } from "@tabler/icons-react"
import { DropdownMenu } from "@/components/ui/dropdown-menu"
import { Navbar } from "@/components/ui/navbar"

export function NavMain({ items }: { items: NavItem[] }) {
  return (
    <Navbar.Group>
      <Navbar.GroupContent>
        <Navbar.Menu>
          {items.map((item) =>
            item?.items ? (
              <DropdownMenu key={item.title}>
                <Navbar.MenuItem>
                  <Navbar.MenuButton isActive={item.isActive}>
                    {item.icon && <item.icon />}
                    <span>{item.title}</span>
                    <IconChevronDown className="ml-auto" data-slot="chevron" />
                  </Navbar.MenuButton>
                  <DropdownMenu.Content>
                    {item.items?.map((subItem) => (
                      <DropdownMenu.Item href={subItem.url} key={subItem.title}>
                        {subItem.title}
                      </DropdownMenu.Item>
                    ))}
                  </DropdownMenu.Content>
                </Navbar.MenuItem>
              </DropdownMenu>
            ) : (
              <Navbar.MenuItem key={item.title}>
                <Navbar.MenuButton href={item.url} isActive={item.isActive}>
                  {item.icon && <item.icon />}
                  <span>{item.title}</span>
                </Navbar.MenuButton>
              </Navbar.MenuItem>
            )
          )}
        </Navbar.Menu>
      </Navbar.GroupContent>
    </Navbar.Group>
  )
}
