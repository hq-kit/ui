"use client"

import type { User } from "@/components/blocks/landing-page-01/components/data"
import { IconBell, IconCircleCheck, IconCreditCard, IconLogout, IconSparkles, IconUser } from "@tabler/icons-react"
import { Avatar } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { DropdownMenu } from "@/components/ui/dropdown-menu"

export const NavUser = ({ user }: { user: User }) => {
  return (
    <DropdownMenu>
      <Button
        className="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground"
        variant="ghost"
      >
        <Avatar className="size-8 rounded-md">
          <Avatar.Image alt={user.name} src={user.avatar} />
          <Avatar.Fallback>
            <IconUser />
          </Avatar.Fallback>
        </Avatar>
      </Button>
      <DropdownMenu.Content className="min-w-56 rounded-lg" placement="bottom end">
        <DropdownMenu.Label className="p-0 font-normal">
          <div className="flex items-center gap-2 px-1 py-1.5 text-left text-sm">
            <Avatar className="size-8 rounded-md">
              <Avatar.Image alt={user.name} src={user.avatar} />
              <Avatar.Fallback>
                <IconUser />
              </Avatar.Fallback>
            </Avatar>
            <div className="grid flex-1 text-left text-sm leading-tight">
              <span className="truncate font-medium">{user.name}</span>
              <span className="truncate text-xs">{user.email}</span>
            </div>
          </div>
        </DropdownMenu.Label>
        <DropdownMenu.Separator />
        <DropdownMenu.Group>
          <DropdownMenu.Item>
            <IconSparkles />
            Upgrade to Pro
          </DropdownMenu.Item>
        </DropdownMenu.Group>
        <DropdownMenu.Separator />
        <DropdownMenu.Group>
          <DropdownMenu.Item>
            <IconCircleCheck />
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
  )
}
