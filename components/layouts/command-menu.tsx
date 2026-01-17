'use client'

import type { Component } from '@/types/search'
import type { SidebarItem } from './aside'
import { CommandDialog, CommandGroup, CommandInput, CommandItem, CommandList } from '@/components/ui/command'
import menus from '@/components-search.json'
import { slugify } from '@/lib/modifiers'
import { BrandIcon, type BrandIconProps, ComponentIcon, type ComponentIconProps } from '../icons'

export function CommandMenu({ open, setOpen }: { open: boolean; setOpen: (open: boolean) => void }) {
  const gettingStarted = menus[0] as SidebarItem
  const frameworkGuides = menus[1] as SidebarItem
  const darkModes = menus[2] as SidebarItem
  const components = menus[3] as Component

  const sections = [
    {
      title: 'Getting Started',
      items: gettingStarted.children
    },
    {
      title: 'Framework Guides',
      items: frameworkGuides.children
    },
    {
      title: 'Dark Modes',
      items: darkModes.children
    },
    {
      title: 'Components',
      items: [],
      sections: components.children?.map((section) => ({
        title: section.subsection,
        items: section.children ?? []
      }))
    }
  ]
  return (
    <CommandDialog className='ring-4 ring-accent/50' isOpen={open} onOpenChange={setOpen} showCloseButton={false}>
      <CommandInput className='m-1.5 rounded-lg bg-input' placeholder='Type a command or search...' />
      <CommandList>
        {sections.map((section) => (
          <CommandGroup aria-label={section.title} className='flex flex-col' key={section.title} title={section.title}>
            {section.items?.map((item) => (
              <CommandItem href={item.slug} key={item.slug} textValue={item.title}>
                <BrandIcon className='size-4' name={item.title.toLowerCase() as BrandIconProps['name']} />
                {item.title}
              </CommandItem>
            ))}
            {section.sections?.map((section) => (
              <CommandGroup
                aria-label={section.title}
                className='flex flex-col'
                key={section.title}
                title={section.title}
              >
                {section.items?.map((item) => (
                  <CommandItem href={item.slug} key={item.slug} textValue={item.title}>
                    <ComponentIcon name={slugify(item.title) as ComponentIconProps['name']} />
                    {item.title}
                  </CommandItem>
                ))}
              </CommandGroup>
            ))}
          </CommandGroup>
        ))}
      </CommandList>
    </CommandDialog>
  )
}
