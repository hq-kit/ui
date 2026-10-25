"use client"

import type { NavItem } from "./data"
import { IconChevronRight, IconCirclePlus, IconMail } from "@tabler/icons-react"
import { Button } from "@/components/ui/button"
import { Collapsible } from "@/components/ui/collapsible"
import { Sidebar } from "@/components/ui/sidebar"

export function NavMain({ items }: { items: NavItem[] }) {
  return (
    <Sidebar.Group>
      <Sidebar.GroupContent className="flex flex-col gap-2">
        <Sidebar.Menu>
          <Sidebar.MenuItem className="flex items-center gap-2">
            <Sidebar.MenuButton
              className="min-w-8 bg-primary text-primary-foreground duration-200 ease-linear hover:bg-primary/90 hover:text-primary-foreground active:bg-primary/90 active:text-primary-foreground"
              tooltip="Quick Create"
            >
              <IconCirclePlus />
              <span>Quick Create</span>
            </Sidebar.MenuButton>
            <Button className="size-8 group-data-[collapsible=icon]:opacity-0" size="icon" variant="outline">
              <IconMail />
              <span className="sr-only">Inbox</span>
            </Button>
          </Sidebar.MenuItem>
        </Sidebar.Menu>
        <Sidebar.Menu>
          {items.map((item) =>
            item?.items ? (
              <Collapsible key={item.title}>
                <Sidebar.MenuItem>
                  <Sidebar.MenuButton isActive={item.isActive} slot="trigger" tooltip={item.title}>
                    {item.icon && <item.icon />}
                    <span>{item.title}</span>
                    <IconChevronRight className="ml-auto transition-transform duration-200 group-data-expanded/collapsible:rotate-90" />
                  </Sidebar.MenuButton>
                  <Collapsible.Content>
                    <Sidebar.MenuSub>
                      {item.items?.map((subItem) => (
                        <Sidebar.MenuSubItem key={subItem.title}>
                          <Sidebar.MenuSubButton href={subItem.url} isActive={subItem.isActive}>
                            {subItem.title}
                          </Sidebar.MenuSubButton>
                        </Sidebar.MenuSubItem>
                      ))}
                    </Sidebar.MenuSub>
                  </Collapsible.Content>
                </Sidebar.MenuItem>
              </Collapsible>
            ) : (
              <Sidebar.MenuItem key={item.title}>
                <Sidebar.MenuButton href={item.url} isActive={item.isActive} tooltip={item.title}>
                  {item.icon && <item.icon />}
                  <span>{item.title}</span>
                </Sidebar.MenuButton>
              </Sidebar.MenuItem>
            )
          )}
        </Sidebar.Menu>
      </Sidebar.GroupContent>
    </Sidebar.Group>
  )
}
