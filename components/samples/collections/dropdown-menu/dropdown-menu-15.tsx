'use client'

import { Button } from '@/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator
} from '@/components/ui/dropdown-menu'

const DropdownSlideLeftAnimationDemo = () => {
  return (
    <DropdownMenu>
      <Button variant='outline'>Slide Left Animation</Button>
      <DropdownMenuContent
        className='data-[exiting=true]:slide-out-to-left-20 data-[entering=true]:slide-in-from-left-20 data-[exiting=true]:zoom-out-100 data-[entering=true]:zoom-in-100 w-56 duration-400'
        placement='start'
      >
        <DropdownMenuLabel>Settings</DropdownMenuLabel>
        <DropdownMenuGroup>
          <DropdownMenuItem>My Profile</DropdownMenuItem>
          <DropdownMenuItem>Settings</DropdownMenuItem>
          <DropdownMenuItem>Billing</DropdownMenuItem>
          <DropdownMenuItem>FAQs</DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuLabel>Contact</DropdownMenuLabel>
        <DropdownMenuGroup>
          <DropdownMenuItem>Call Support</DropdownMenuItem>
          <DropdownMenuItem>Chat with us</DropdownMenuItem>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

export default DropdownSlideLeftAnimationDemo
