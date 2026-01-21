'use client'

import type { Selection } from 'react-aria-components'
import { useState } from 'react'
import { Card, CardContent, CardFooter } from '@/components/ui/card'
import { Command, CommandInput, CommandItem, CommandList } from '@/components/ui/command'

const items = [
  { id: 1, name: 'Ubuntu' },
  { id: 2, name: 'Debian' },
  { id: 3, name: 'Fedora' },
  { id: 4, name: 'Arch' },
  { id: 5, name: 'CentOS' },
  { id: 6, name: 'Gentoo' },
  { id: 7, name: 'OpenSuse' },
  { id: 8, name: 'Redhat' },
  { id: 9, name: 'FreeBSD' },
  { id: 10, name: 'NetBSD' }
]

export default function CommandControlledDemo() {
  const [selected, setSelected] = useState<Selection>(new Set([1]))
  return (
    <Card className='w-full space-y-6'>
      <CardContent>
        <Command aria-label='Linux Distros'>
          <CommandInput />
          <CommandList items={items} onSelectionChange={setSelected} selectedKeys={selected} selectionMode='multiple'>
            {(item) => (
              <CommandItem id={item.id} textValue={item.name}>
                {item.name}
              </CommandItem>
            )}
          </CommandList>
        </Command>
      </CardContent>
      <CardFooter>
        <code className='text-xs'>{JSON.stringify({ selected: [...selected] })}</code>
      </CardFooter>
    </Card>
  )
}
