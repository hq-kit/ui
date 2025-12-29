'use client'

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuShortcut,
  DropdownMenuTrigger
} from '@/components/ui/dropdown-menu'
import { Kbd, KbdGroup } from '@/components/ui/kbd'

export default function KeyboardMenuDemo() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger>Options</DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuItem>
          Copy
          <DropdownMenuShortcut>
            <KbdGroup>
              <Kbd>Ctrl</Kbd>
              <Kbd>C</Kbd>
            </KbdGroup>
          </DropdownMenuShortcut>
        </DropdownMenuItem>
        <DropdownMenuItem>
          Cut
          <DropdownMenuShortcut>
            <KbdGroup>
              <Kbd>Ctrl</Kbd>
              <Kbd>X</Kbd>
            </KbdGroup>
          </DropdownMenuShortcut>
        </DropdownMenuItem>
        <DropdownMenuItem>
          Paste
          <DropdownMenuShortcut>
            <KbdGroup>
              <Kbd>Ctrl</Kbd>
              <Kbd>V</Kbd>
            </KbdGroup>
          </DropdownMenuShortcut>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
