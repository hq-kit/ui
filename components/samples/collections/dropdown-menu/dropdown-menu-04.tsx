'use client'

import { Avatar } from '@/components/ui/avatar'
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
    src: 'https://cdn.shadcnstudio.com/ss-assets/avatar/avatar-6.png',
    fallback: 'AD',
    name: 'Angel Dorwart',
    mail: 'sbaker@hotmail.com'
  },
  {
    src: 'https://cdn.shadcnstudio.com/ss-assets/avatar/avatar-7.png',
    name: 'Skylar Rosser',
    mail: 'gbaker@yahoo.com'
  },
  {
    src: 'https://cdn.shadcnstudio.com/ss-assets/avatar/avatar-8.png',
    name: 'Dulce Botosh',
    mail: 'tlee@gmail.com'
  },
  {
    src: 'https://cdn.shadcnstudio.com/ss-assets/avatar/avatar-9.png',
    name: 'Ahmad Stanton',
    mail: 'kdavis@hotmail.com'
  },
  {
    src: 'https://cdn.shadcnstudio.com/ss-assets/avatar/avatar-10.png',
    name: 'Randy Gouse',
    mail: 'ijackson@yahoo.com'
  }
]

const DropdownMenuItemActionDemo = () => {
  return (
    <DropdownMenu>
      <Button variant='outline'>Menu item with action</Button>
      <DropdownMenuContent className='w-91'>
        <DropdownMenuLabel>Contact List</DropdownMenuLabel>
        <DropdownMenuGroup>
          {listItems.map((item, index) => (
            <DropdownMenuItem className='justify-between' key={index}>
              <Avatar alt={item.name} src={item.src} />
              <div className='flex flex-1 flex-col'>
                <span className='text-popover-foreground'>{item.name}</span>
                <span className='text-muted-foreground text-xs'>{item.mail}</span>
              </div>
              <Button className='h-7 cursor-pointer rounded-md px-2' variant='secondary'>
                Send
              </Button>
            </DropdownMenuItem>
          ))}
          <DropdownMenuItem>
            <Button className='grow'>Add Contact</Button>
          </DropdownMenuItem>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

export default DropdownMenuItemActionDemo
