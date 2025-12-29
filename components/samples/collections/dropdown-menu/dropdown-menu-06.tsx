'use client'
import { IconAlignJustified, IconH1, IconH2, IconListSearch, IconPencil } from '@tabler/icons-react'
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
    icon: IconH1,
    property: 'Heading 1',
    description: 'big section or hero heading'
  },
  {
    icon: IconH2,
    property: 'Heading 2',
    description: 'Sub section heading'
  },
  {
    icon: IconAlignJustified,
    property: 'Align justify',
    description: 'text will fill all area'
  },
  {
    icon: IconListSearch,
    property: 'text search',
    description: 'find any text'
  }
]

const DropdownMenuEditMenuDemo = () => {
  return (
    <DropdownMenu>
      <Button className='rounded-full' size='icon' variant='ghost'>
        <IconPencil />
        <span className='sr-only'>Edit menu</span>
      </Button>
      <DropdownMenuContent className='w-56'>
        <DropdownMenuLabel>Edit text</DropdownMenuLabel>
        <DropdownMenuGroup>
          {listItems.map((item, index) => (
            <DropdownMenuItem key={index}>
              <span className='flex items-center justify-center rounded-md border p-2'>
                <item.icon />
              </span>
              <div className='flex flex-col'>
                <span className='text-popover-foreground'>{item.property}</span>
                <span className='text-muted-foreground text-xs'>{item.description}</span>
              </div>
            </DropdownMenuItem>
          ))}
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

export default DropdownMenuEditMenuDemo
