'use client'

import { IconCheck } from '@tabler/icons-react'
import { useState } from 'react'
import { Avatar } from '@/components/ui/avatar'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger
} from '@/components/ui/dropdown-menu'

const users = [
  {
    id: 1,
    src: 'https://cdn.shadcnstudio.com/ss-assets/avatar/avatar-1.png',
    name: 'Phillip George',
    mail: 'phillip12@gmail.com'
  },
  {
    id: 2,
    src: 'https://cdn.shadcnstudio.com/ss-assets/avatar/avatar-2.png',
    name: 'Jaylon Donin',
    mail: 'jaylo-don@yahoo.com'
  },
  {
    id: 3,
    src: 'https://cdn.shadcnstudio.com/ss-assets/avatar/avatar-3.png',
    name: 'Tiana Curtis',
    mail: 'Tiana_curtis@gmail.com'
  }
]

const DropdownMenuUserSwitcherDemo = () => {
  const [selectUser, setSelectUser] = useState(users[0])

  return (
    <DropdownMenu>
      <DropdownMenuTrigger className='flex items-center gap-2 rounded-lg bg-secondary px-3 py-2.5'>
        <Avatar alt={selectUser.name} src={selectUser.src} />
        <div className='flex flex-col gap-1 text-start leading-none'>
          <span className='max-w-[17ch] truncate font-semibold text-sm leading-none'>{selectUser.name}</span>
          <span className='max-w-[20ch] truncate text-muted-foreground text-xs'>{selectUser.mail}</span>
        </div>
      </DropdownMenuTrigger>
      <DropdownMenuContent className='w-66' placement='bottom start'>
        <DropdownMenuLabel>Task Assignment</DropdownMenuLabel>
        {users.map((user) => (
          <DropdownMenuItem key={user.id} onClick={() => setSelectUser(user)}>
            <div className='flex items-center gap-2'>
              <Avatar alt={user.name} src={user.src} />
              <div className='flex flex-col gap-1 text-start leading-none'>
                <span className='max-w-[17ch] truncate font-semibold text-sm leading-none'>{user.name}</span>
                <span className='max-w-[20ch] truncate text-muted-foreground text-xs'>{user.mail}</span>
              </div>
            </div>
            {selectUser.id === user.id && <IconCheck className='ml-auto' />}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

export default DropdownMenuUserSwitcherDemo
