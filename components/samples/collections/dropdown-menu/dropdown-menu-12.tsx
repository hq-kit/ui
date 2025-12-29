'use client'
import { IconCurrencyDollar, IconHelp, IconReceipt, IconSettings, IconUser } from '@tabler/icons-react'
import { Button } from '@/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel
} from '@/components/ui/dropdown-menu'

const DropdownMenuItemIconDemo = () => {
  return (
    <DropdownMenu>
      <Button variant='outline'>Menu item with icon</Button>
      <DropdownMenuContent className='w-56'>
        <DropdownMenuLabel>User Profile</DropdownMenuLabel>
        <DropdownMenuGroup>
          <DropdownMenuItem>
            <IconUser />
            Profile
          </DropdownMenuItem>
          <DropdownMenuItem>
            <IconSettings />
            Settings
          </DropdownMenuItem>
          <DropdownMenuItem>
            <IconReceipt />
            Billing
          </DropdownMenuItem>
          <DropdownMenuItem>
            <IconCurrencyDollar />
            Pricing
          </DropdownMenuItem>
          <DropdownMenuItem>
            <IconHelp />
            FAQ
          </DropdownMenuItem>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

export default DropdownMenuItemIconDemo
