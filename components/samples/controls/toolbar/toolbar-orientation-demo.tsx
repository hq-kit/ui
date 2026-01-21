'use client'

import {
  IconAlignCenter,
  IconAlignJustified,
  IconAlignLeft,
  IconAlignRight,
  IconBold,
  IconItalic,
  IconStrikethrough,
  IconUnderline
} from '@tabler/icons-react'
import { Toolbar, ToolbarGroup, ToolbarItem, ToolbarSeparator } from '@/components/ui/toolbar'

export default function ToolbarDemo() {
  return (
    <span data-slot='layout'>
      <Toolbar aria-label='Toolbars' orientation='vertical'>
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
        <ToolbarGroup aria-label='Alignment'>
          <ToolbarItem aria-label='Align Left'>
            <IconAlignLeft />
          </ToolbarItem>
          <ToolbarItem aria-label='Align Center'>
            <IconAlignCenter />
          </ToolbarItem>
          <ToolbarItem aria-label='Align Right'>
            <IconAlignRight />
          </ToolbarItem>
          <ToolbarItem aria-label='Align Justify'>
            <IconAlignJustified />
          </ToolbarItem>
        </ToolbarGroup>
      </Toolbar>
    </span>
  )
}
