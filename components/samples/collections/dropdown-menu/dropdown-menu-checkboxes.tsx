"use client"

import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel
} from "@/components/ui/dropdown-menu"

export default function DropdownMenuCheckboxes() {
  return (
    <DropdownMenu>
      <Button variant="outline">Open</Button>
      <DropdownMenuContent className="w-40">
        <DropdownMenuGroup selectionMode="multiple">
          <DropdownMenuLabel>Appearance</DropdownMenuLabel>
          <DropdownMenuItem id={"showStatusBar"}>Status Bar</DropdownMenuItem>
          <DropdownMenuItem id={"showActivityBar"} isDisabled>
            Activity Bar
          </DropdownMenuItem>
          <DropdownMenuItem id={"showPanel"}>Panel</DropdownMenuItem>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
