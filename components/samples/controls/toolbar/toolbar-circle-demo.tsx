'use client'

import { IconBold, IconItalic, IconStrikethrough, IconUnderline } from '@tabler/icons-react'
import { Toolbar, ToolbarGroup, ToolbarItem } from '@/components/ui/toolbar'

export default function ToolbarCircleDemo() {
  return (
    <span data-slot='layout'>
      <Toolbar aria-label='Toolbars' isCircle>
        <ToolbarGroup aria-label='Text Formatting Options' isDisabled>
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
      </Toolbar>
    </span>
  )
}
