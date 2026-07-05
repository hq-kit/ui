"use client"

import type { Selection } from "react-aria-components/Menu"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel
} from "@/components/ui/dropdown-menu"

export default function DropdownMenuRadioGroupDemo() {
  const [position, setPosition] = useState<Selection>(new Set("bottom"))

  return (
    <DropdownMenu>
      <Button variant="outline">Open</Button>
      <DropdownMenuContent className="w-32">
        <DropdownMenuGroup onSelectionChange={setPosition} selectedKeys={position} selectionMode="single">
          <DropdownMenuLabel>Panel Position</DropdownMenuLabel>
          <DropdownMenuItem id="top">Top</DropdownMenuItem>
          <DropdownMenuItem id="bottom">Bottom</DropdownMenuItem>
          <DropdownMenuItem id="right">Right</DropdownMenuItem>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
