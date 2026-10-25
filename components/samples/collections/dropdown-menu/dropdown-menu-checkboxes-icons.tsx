"use client"

import { BellIcon, MailIcon, MessageSquareIcon } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel
} from "@/components/ui/dropdown-menu"

export default function DropdownMenuCheckboxesIcons() {
  return (
    <DropdownMenu>
      <Button variant="outline">Notifications</Button>
      <DropdownMenuContent className="w-48" selectionMode="multiple">
        <DropdownMenuGroup>
          <DropdownMenuLabel>Notification Preferences</DropdownMenuLabel>
          <DropdownMenuItem id={"email"}>
            <MailIcon />
            Email notifications
          </DropdownMenuItem>
          <DropdownMenuItem id={"sms"}>
            <MessageSquareIcon />
            SMS notifications
          </DropdownMenuItem>
          <DropdownMenuItem id={"push"}>
            <BellIcon />
            Push notifications
          </DropdownMenuItem>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
