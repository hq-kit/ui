'use client'

import type { Selection } from 'react-aria-components'
import { useState } from 'react'
import { Button } from '@/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator
} from '@/components/ui/dropdown-menu'

const DropdownMenuMultipleSelection = () => {
  const [selectedKeys, setSelectedKeys] = useState<Selection>(new Set(['status-bar']))
  return (
    <DropdownMenu>
      <Button variant='outline'>Multiple Selection</Button>
      <DropdownMenuContent
        className='w-56'
        onSelectionChange={setSelectedKeys}
        selectedKeys={selectedKeys}
        selectionMode='multiple'
      >
        <DropdownMenuLabel>Appearance</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem id='status-bar'>Status Bar</DropdownMenuItem>
        <DropdownMenuItem id='api' isDisabled>
          API
        </DropdownMenuItem>
        <DropdownMenuItem id='invite-users'>Invite users</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

export default DropdownMenuMultipleSelection
