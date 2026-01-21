'use client'

import { menus } from '@/components/layouts/menus'
import { CommandDialog, CommandGroup, CommandInput, CommandItem, CommandList } from '@/components/ui/command'
import { slugify } from '@/lib/modifiers'
import { BrandIcon, type BrandIconProps, ComponentIcon, type ComponentIconProps } from '../icons'

export function CommandMenu({ open, setOpen }: { open: boolean; setOpen: (open: boolean) => void }) {
  return (
    <CommandDialog
      className='top-auto bottom-0 max-w-none translate-y-0 ring-4 ring-accent/50 sm:top-1/2 sm:max-w-2xl sm:-translate-y-1/2'
      isOpen={open}
      onOpenChange={setOpen}
      showCloseButton={false}
    >
      <CommandInput className='m-1.5 rounded-lg bg-input' placeholder='Type a command or search...' />
      <CommandList>
        {menus().map((section) => (
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
