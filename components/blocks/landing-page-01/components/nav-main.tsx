"use client"

import type { NavItem } from "./data"
import { IconPlaceholder } from "@/components/icon-placeholder"
import { DropdownMenu } from "@/components/ui/dropdown-menu"
import { NavbarGroup, NavbarGroupContent, NavbarMenu, NavbarMenuButton, NavbarMenuItem } from "@/components/ui/navbar"

export function NavMain({ items }: { items: NavItem[] }) {
  return (
    <NavbarGroup>
      <NavbarGroupContent>
        <NavbarMenu>
          {items.map((item) =>
            item?.items ? (
              <DropdownMenu key={item.title}>
                <NavbarMenuItem>
                  <NavbarMenuButton isActive={item.isActive}>
                    {item.icon && <item.icon />}
                    <span>{item.title}</span>
                    <IconPlaceholder
                      className="ml-auto"
                      data-slot="chevron"
                      hugeicons="ArrowDown01Icon"
                      lucide="ChevronDownIcon"
                      phosphor="CaretDownIcon"
                      remixicon="RiArrowDownSLine"
                      tabler="IconChevronDown"
                    />
                  </NavbarMenuButton>
                  <DropdownMenu.Content>
                    {item.items?.map((subItem) => (
                      <DropdownMenu.Item href={subItem.url} key={subItem.title}>
                        {subItem.title}
                      </DropdownMenu.Item>
                    ))}
                  </DropdownMenu.Content>
                </NavbarMenuItem>
              </DropdownMenu>
            ) : (
              <NavbarMenuItem key={item.title}>
                <NavbarMenuButton href={item.url} isActive={item.isActive}>
                  {item.icon && <item.icon />}
                  <span>{item.title}</span>
                </NavbarMenuButton>
              </NavbarMenuItem>
            )
          )}
        </NavbarMenu>
      </NavbarGroupContent>
    </NavbarGroup>
  )
}
