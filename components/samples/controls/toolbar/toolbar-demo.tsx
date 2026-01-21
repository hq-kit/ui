'use client'

import {
  IconAlignCenter,
  IconAlignJustified,
  IconAlignLeft,
  IconAlignRight,
  IconArrowBackUp,
  IconArrowForwardUp,
  IconBold,
  IconChevronDown,
  IconItalic,
  IconLayoutGrid,
  IconLink,
  IconPhoto,
  IconStrikethrough,
  IconUnderline
} from '@tabler/icons-react'
import { Button } from '@/components/ui/button'
import { Checkbox } from '@/components/ui/checkbox'
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem } from '@/components/ui/dropdown-menu'
import { Toolbar, ToolbarGroup, ToolbarItem, ToolbarSeparator } from '@/components/ui/toolbar'

export default function ToolbarDemo() {
  return (
    <span data-slot='layout'>
      <Toolbar aria-label='Toolbars'>
        <ToolbarGroup aria-label='Text Formatting Options'>
          <ToolbarItem aria-label='Bold' defaultSelected>
            <IconBold />
          </ToolbarItem>
          <ToolbarItem aria-label='Italic'>
            <IconItalic />
          </ToolbarItem>
          <ToolbarItem aria-label='Underline'>
            <IconUnderline />
          </ToolbarItem>
          <ToolbarItem aria-label='Strikethrough'>
            <IconStrikethrough />
          </ToolbarItem>
        </ToolbarGroup>
        <ToolbarSeparator />
        <ToolbarGroup aria-label='Alignment' selectionMode='single'>
          <ToolbarItem aria-label='Align Left' defaultSelected id='align-left'>
            <IconAlignLeft />
          </ToolbarItem>
          <ToolbarItem aria-label='Align Center' id='align-center'>
            <IconAlignCenter />
          </ToolbarItem>
          <ToolbarItem aria-label='Align Right' id='align-right'>
            <IconAlignRight />
          </ToolbarItem>
          <ToolbarItem aria-label='Align Justify' id='align-justify'>
            <IconAlignJustified />
          </ToolbarItem>
        </ToolbarGroup>
        <ToolbarSeparator />
        <Checkbox>Spell Check</Checkbox>
        <ToolbarGroup className='ml-auto'>
          <DropdownMenu>
            <Button aria-label='Other options' size='sm' variant='outline'>
              Options...
              <IconChevronDown />
            </Button>
            <DropdownMenuContent placement='bottom right'>
              <DropdownMenuItem>
                <IconArrowBackUp />
                Undo
              </DropdownMenuItem>
              <DropdownMenuItem>
                <IconArrowForwardUp />
                Redo
              </DropdownMenuItem>
              <DropdownMenuItem>
                <IconLink />
                Insert Link
              </DropdownMenuItem>
              <DropdownMenuItem>
                <IconPhoto />
                Insert Image
              </DropdownMenuItem>
              <DropdownMenuItem>
                <IconLayoutGrid />
                Insert Grid
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </ToolbarGroup>
      </Toolbar>
    </span>
  )
}
