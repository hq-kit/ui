'use client'

import { IconBell, IconCreditCard, IconLogout, IconSettings, IconUser } from '@tabler/icons-react'
import { Button } from '@/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel
} from '@/components/ui/dropdown-menu'

const listItems = [
  {
    icon: IconUser,
    property: 'Profile'
  },
  {
    icon: IconSettings,
    property: 'Settings'
  },
  {
    icon: IconCreditCard,
    property: 'Billing'
  },
  {
    icon: IconBell,
    property: 'Notifications'
  },
  {
    icon: IconLogout,
    property: 'Sign Out'
  }
]

const DropdownMenuUserMenuDemo = () => {
  return (
    <DropdownMenu>
      <Button className='overflow-hidden rounded-full' size='icon' variant='secondary'>
        <img alt='Hallie Richards' src='https://cdn.shadcnstudio.com/ss-assets/avatar/avatar-5.png' />
      </Button>
      <DropdownMenuContent className='w-56'>
        <DropdownMenuLabel>My Account</DropdownMenuLabel>
        <DropdownMenuGroup>
          {listItems.map((item, index) => (
            <DropdownMenuItem key={index}>
              <item.icon />
              <span className='text-popover-foreground'>{item.property}</span>
            </DropdownMenuItem>
          ))}
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

export default DropdownMenuUserMenuDemo
