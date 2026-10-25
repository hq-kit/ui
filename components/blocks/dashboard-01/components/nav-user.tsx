"use client"

import type { User } from "./data"
import { IconBell, IconCreditCard, IconDotsVertical, IconLogout, IconUser } from "@tabler/icons-react"
import { Avatar } from "@/components/ui/avatar"
import { DropdownMenu } from "@/components/ui/dropdown-menu"
import { Sidebar } from "@/components/ui/sidebar"

export function NavUser({ user }: { user: User }) {
  return (
    <Sidebar.Menu>
      <Sidebar.MenuItem>
        <DropdownMenu>
          <Sidebar.MenuButton
            className="data-expanded:bg-sidebar-accent data-expanded:text-sidebar-accent-foreground"
            size="lg"
          >
            <Avatar className="size-8 grayscale">
              <Avatar.Image alt={user.name} src={user.avatar} />
              <Avatar.Fallback>CN</Avatar.Fallback>
            </Avatar>
            <div className="grid flex-1 text-left text-sm leading-tight">
              <span className="truncate font-medium">{user.name}</span>
              <span className="text-muted-foreground truncate text-xs">{user.email}</span>
            </div>
            <IconDotsVertical className="ml-auto size-4" />
          </Sidebar.MenuButton>
          <DropdownMenu.Content className="w-(--trigger-width) min-w-56 rounded-lg" offset={4} placement="bottom end">
            <DropdownMenu.Label className="p-0 font-normal">
              <div className="flex items-center gap-2 px-1 py-1.5 text-left text-sm">
                <Avatar className="size-8">
                  <Avatar.Image alt={user.name} src={user.avatar} />
                  <Avatar.Fallback>CN</Avatar.Fallback>
                </Avatar>

                <div className="grid flex-1 text-left text-sm leading-tight">
                  <span className="truncate font-medium">{user.name}</span>
                  <span className="text-muted-foreground truncate text-xs">{user.email}</span>
                </div>
              </div>
            </DropdownMenu.Label>
            <DropdownMenu.Separator />
            <DropdownMenu.Group>
              <DropdownMenu.Item>
                <IconUser />
                Account
              </DropdownMenu.Item>
              <DropdownMenu.Item>
                <IconCreditCard />
                Billing
              </DropdownMenu.Item>
              <DropdownMenu.Item>
                <IconBell />
                Notifications
              </DropdownMenu.Item>
            </DropdownMenu.Group>
            <DropdownMenu.Separator />
            <DropdownMenu.Item>
              <IconLogout />
              Log out
            </DropdownMenu.Item>
          </DropdownMenu.Content>
        </DropdownMenu>
      </Sidebar.MenuItem>
    </Sidebar.Menu>
  )
}
