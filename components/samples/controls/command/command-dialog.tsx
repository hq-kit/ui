'use client'

import { IconHome, IconLayoutDashboard, IconPackage, IconPalette } from '@tabler/icons-react'
import { useEffect, useState } from 'react'
import { Button } from '@/components/ui/button'
import { CommandDialog, CommandInput, CommandItem, CommandList, CommandShortcut } from '@/components/ui/command'
import { Kbd, KbdGroup } from '@/components/ui/kbd'

export default function CommandDialogDemo() {
  const [open, setOpen] = useState(false)
  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === 'j' && (e.metaKey || e.ctrlKey)) {
        e.preventDefault()
        setOpen((open) => !open)
      }
    }
    document.addEventListener('keydown', down)
    return () => document.removeEventListener('keydown', down)
  }, [])
  return (
    <>
      <Button onPress={() => setOpen(true)} variant='outline'>
        <CommandShortcut>
          <KbdGroup>
            <Kbd>⌘</Kbd>
            <Kbd>J</Kbd>
          </KbdGroup>
        </CommandShortcut>
      </Button>
      <CommandDialog isOpen={open} onOpenChange={setOpen}>
        <CommandInput />
        <CommandList>
          <CommandItem textValue='home'>
            <IconHome />
            Home
          </CommandItem>
          <CommandItem textValue='documenation'>
            <IconPackage />
            Documentation
          </CommandItem>
          <CommandItem textValue='blocks'>
            <IconLayoutDashboard />
            Blocks
          </CommandItem>
          <CommandItem textValue='colors'>
            <IconPalette />
            Colors
          </CommandItem>
        </CommandList>
      </CommandDialog>
    </>
  )
}
