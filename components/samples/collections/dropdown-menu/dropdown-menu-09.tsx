'use client'
import { IconEdit, IconShare, IconTrash } from '@tabler/icons-react'
import { Button } from '@/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuSeparator
} from '@/components/ui/dropdown-menu'

const DropdownMenuAlignStartDemo = () => {
  return (
    <DropdownMenu>
      <Button variant='outline'>Align Start</Button>
      <DropdownMenuContent className='w-34' placement='start'>
        <DropdownMenuGroup>
          <DropdownMenuItem>
            <IconEdit />
            Edit
          </DropdownMenuItem>
          <DropdownMenuItem>
            <IconShare />
            Share
          </DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem variant='destructive'>
            <IconTrash />
            <span>Delete</span>
          </DropdownMenuItem>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

export default DropdownMenuAlignStartDemo
