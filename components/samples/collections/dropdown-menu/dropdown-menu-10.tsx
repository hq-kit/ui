'use client'
import { Button } from '@/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuShortcut
} from '@/components/ui/dropdown-menu'

const DropdownMenuAlignEndDemo = () => {
  return (
    <DropdownMenu>
      <Button variant='outline'>Align End</Button>
      <DropdownMenuContent className='w-66' placement='end'>
        <DropdownMenuGroup>
          <DropdownMenuItem>
            New Tab<DropdownMenuShortcut>⌘ + T</DropdownMenuShortcut>
          </DropdownMenuItem>
          <DropdownMenuItem>
            New Window <DropdownMenuShortcut>⌘ + N</DropdownMenuShortcut>
          </DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem>
            New Incognito Window <DropdownMenuShortcut>⌘ + ⇧ + N</DropdownMenuShortcut>
          </DropdownMenuItem>
          <DropdownMenuItem>
            History <DropdownMenuShortcut>⌘ + Y</DropdownMenuShortcut>
          </DropdownMenuItem>
          <DropdownMenuItem>
            Downloads <DropdownMenuShortcut>⌥ + ⇧ + L</DropdownMenuShortcut>
          </DropdownMenuItem>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

export default DropdownMenuAlignEndDemo
