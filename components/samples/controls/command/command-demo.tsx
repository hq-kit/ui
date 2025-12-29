'use client'

import { IconHome, IconLayoutDashboard, IconPackage, IconPalette } from '@tabler/icons-react'
import { Command, CommandGroup, CommandInput, CommandList } from '@/components/ui/command'

export default function CommandDemo() {
  return (
    <Command>
      <CommandInput placeholder='Type a command or search...' />
      <CommandList>
        <CommandGroup title='Pages'>
          <Command.Item textValue='home'>
            <IconHome />
            Home
          </Command.Item>
          <Command.Item textValue='documenation'>
            <IconPackage />
            Documentation
          </Command.Item>
          <Command.Item textValue='blocks'>
            <IconLayoutDashboard />
            Blocks
          </Command.Item>
          <Command.Item textValue='colors'>
            <IconPalette />
            Colors
          </Command.Item>
        </CommandGroup>
      </CommandList>
    </Command>
  )
}
