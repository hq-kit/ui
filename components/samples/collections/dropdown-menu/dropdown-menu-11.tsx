'use client'

import { IconChevronDown, IconChevronsDown, IconChevronsUp, IconChevronUp, IconEqual } from '@tabler/icons-react'
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
    icon: IconChevronsUp,
    color: 'text-destructive',
    priority: 'Highest'
  },
  {
    icon: IconChevronUp,
    color: 'text-destructive/60',
    priority: 'High'
  },
  {
    icon: IconEqual,
    color: 'text-amber-600 dark:text-amber-400',
    priority: 'Medium'
  },
  {
    icon: IconChevronDown,
    color: 'text-green-600/60 dark:text-green-400/60',
    priority: 'Low'
  },
  {
    icon: IconChevronsDown,
    color: 'text-green-600 dark:text-green-400',
    priority: 'Lowest'
  }
]

const DropdownMenuBorderedMenuDemo = () => {
  return (
    <DropdownMenu>
      <Button variant='outline'>Bordered Menu</Button>
      <DropdownMenuContent className='w-56 shadow-none'>
        <DropdownMenuLabel>Task priority</DropdownMenuLabel>
        <DropdownMenuGroup>
          {listItems.map((item, index) => (
            <DropdownMenuItem key={index}>
              <item.icon className={item.color} />
              {item.priority}
            </DropdownMenuItem>
          ))}
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

export default DropdownMenuBorderedMenuDemo
