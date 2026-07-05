"use client"

import type { User } from "./data"
import { IconCreditCard, IconDotsVertical, IconLogout, IconNotification, IconUserCircle } from "@tabler/icons-react"
import { Avatar } from "@/components/ui/avatar"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator
} from "@/components/ui/dropdown-menu"
import { SidebarMenu, SidebarMenuButton, SidebarMenuItem } from "@/components/ui/sidebar"

export function NavUser({ user }: { user: User }) {
  return (
    <SidebarMenu>
      <SidebarMenuItem>
        <DropdownMenu>
          <SidebarMenuButton
            className="data-expanded:bg-sidebar-accent data-expanded:text-sidebar-accent-foreground"
            size="lg"
          >
            <Avatar className="size-8 grayscale">
              <Avatar.Image alt={user.name} src={user.avatar} />
              <Avatar.Fallback>CN</Avatar.Fallback>
            </Avatar>
            <div className="grid flex-1 text-left text-sm leading-tight">
              <span className="truncate font-medium">{user.name}</span>
              <span className="truncate text-muted-foreground text-xs">{user.email}</span>
            </div>
            <IconDotsVertical className="ml-auto size-4" />
          </SidebarMenuButton>
          <DropdownMenuContent className="w-(--trigger-width) min-w-56 rounded-lg" offset={4} placement="bottom end">
            <DropdownMenuLabel className="p-0 font-normal">
              <div className="flex items-center gap-2 px-1 py-1.5 text-left text-sm">
                <Avatar className="size-8">
                  <Avatar.Image alt={user.name} src={user.avatar} />
                  <Avatar.Fallback>CN</Avatar.Fallback>
                </Avatar>

                <div className="grid flex-1 text-left text-sm leading-tight">
                  <span className="truncate font-medium">{user.name}</span>
                  <span className="truncate text-muted-foreground text-xs">{user.email}</span>
                </div>
              </div>
            </DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuGroup>
              <DropdownMenuItem>
                <IconUserCircle />
                Account
              </DropdownMenuItem>
              <DropdownMenuItem>
                <IconCreditCard />
                Billing
              </DropdownMenuItem>
              <DropdownMenuItem>
                <IconNotification />
                Notifications
              </DropdownMenuItem>
            </DropdownMenuGroup>
            <DropdownMenuSeparator />
            <DropdownMenuItem>
              <IconLogout />
              Log out
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </SidebarMenuItem>
    </SidebarMenu>
  )
}
