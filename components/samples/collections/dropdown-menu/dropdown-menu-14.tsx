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

const DropdownMenuSingleSelection = () => {
  const [selectedKey, setSelectedKey] = useState<Selection>(new Set())
  return (
    <DropdownMenu>
      <Button variant='outline'>Single Selection</Button>
      <DropdownMenuContent
        className='w-56'
        onSelectionChange={setSelectedKey}
        selectedKeys={selectedKey}
        selectionMode='single'
      >
        <DropdownMenuLabel>Panel Position</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem id='top'>Top</DropdownMenuItem>
        <DropdownMenuItem id='bottom'>Bottom</DropdownMenuItem>
        <DropdownMenuItem id='right' isDisabled>
          Right
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

export default DropdownMenuSingleSelection
