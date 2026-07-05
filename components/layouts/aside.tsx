"use client"

import { usePathname } from "next/navigation"
import { useEffect, useRef } from "react"
import { Header, Menu, MenuItem, type MenuItemProps, MenuSection } from "react-aria-components"
import { menus } from "@/components/layouts/menus"
import { cn } from "@/lib/utils"

export type SidebarItem = {
  section: string
  children?: { title: string; slug: string }[]
}

export function Aside() {
  return (
    <aside className="scrollbar-fade sticky top-7 max-h-screen w-64 overflow-y-auto overflow-x-hidden py-16 pr-8 transition xl:w-72">
      {menus().map((section) => (
        <Menu aria-label="Navigation" className="flex flex-col" key={section.title} selectionMode="none">
          <MenuSection>
            <Header className="cn-sidebar-menu-button pointer-events-none mt-4 mb-2 py-0 font-semibold text-base text-foreground">
              {section.title}
            </Header>
            {section.items?.map((item) => (
              <MenuLink href={item.slug} key={item.slug} textValue={item.title}>
                {item.title}
              </MenuLink>
            ))}
          </MenuSection>
          {section.sections?.map((section) => (
            <MenuSection key={section.title}>
              <Header className="cn-sidebar-menu-button pointer-events-none mt-4 mb-2 py-0 font-semibold text-base text-foreground">
                {section.title}
              </Header>
              {section.items?.map((item) => (
                <MenuLink href={item.slug} key={item.slug} textValue={item.title}>
                  {item.title}
                </MenuLink>
              ))}
            </MenuSection>
          ))}
        </Menu>
      ))}
    </aside>
  )
}

const MenuLink = ({ href, className, ...props }: MenuItemProps) => {
  const pathname = usePathname()
  const isActive = pathname === href
  const ref = useRef<HTMLDivElement>(null)
  useEffect(() => {
    if (isActive && ref.current) {
      ref.current.scrollIntoView({
        behavior: "smooth",
        block: "center"
      })
    }
  }, [isActive])
  return (
    <MenuItem
      className={cn(
        "cn-sidebar-menu-button relative ml-1 flex w-full items-center font-normal text-muted-foreground text-sm outline-hidden transition data-hovered:z-10 data-hovered:font-semibold",
        isActive && "bg-accent font-semibold text-accent-foreground",
        className
      )}
      href={href}
      ref={ref}
      {...props}
    >
      {props.children}
    </MenuItem>
  )
}
