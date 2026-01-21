'use client'

import { IconChevronDown, IconDots } from '@tabler/icons-react'
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem } from '@/components/ui/dropdown-menu'
import { InputGroup, InputGroupAddon, InputGroupButton, InputGroupInput } from '@/components/ui/input'

export default function InputGroupDropdown() {
  return (
    <div className='grid w-full max-w-sm gap-4'>
      <InputGroup>
        <InputGroupInput placeholder='Enter file name' />
        <InputGroupAddon align='inline-end'>
          <DropdownMenu>
            <InputGroupButton aria-label='More' size='icon-xs' variant='ghost'>
              <IconDots />
            </InputGroupButton>
            <DropdownMenuContent placement='end'>
              <DropdownMenuItem>Settings</DropdownMenuItem>
              <DropdownMenuItem>Copy path</DropdownMenuItem>
              <DropdownMenuItem>Open location</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </InputGroupAddon>
      </InputGroup>
      <InputGroup className='[--radius:1rem]'>
        <InputGroupInput placeholder='Enter search query' />
        <InputGroupAddon align='inline-end'>
          <DropdownMenu>
            <InputGroupButton className='pr-1.5! text-xs' variant='ghost'>
              Search In... <IconChevronDown className='size-3' />
            </InputGroupButton>
            <DropdownMenuContent className='[--radius:0.95rem]' placement='end'>
              <DropdownMenuItem>Documentation</DropdownMenuItem>
              <DropdownMenuItem>Blog Posts</DropdownMenuItem>
              <DropdownMenuItem>Changelog</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </InputGroupAddon>
      </InputGroup>
    </div>
  )
}
