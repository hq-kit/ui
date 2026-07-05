"use client"

import { menus } from "@/components/layouts/menus"
import { CommandDialog, CommandGroup, CommandInput, CommandItem, CommandList } from "@/components/ui/command"
import { slugify } from "@/lib/modifiers"
import { BrandIcon, type BrandIconProps, ComponentIcon, type ComponentIconProps } from "../icons"

export function CommandMenu({ open, setOpen }: { open: boolean; setOpen: (open: boolean) => void }) {
  return (
    <CommandDialog isOpen={open} onOpenChange={setOpen} showCloseButton={false}>
      <CommandInput placeholder="Search pages..." />
      <CommandList>
        {menus().map((section) => (
          <CommandGroup aria-label={section.title} className="flex flex-col" key={section.title} title={section.title}>
            {section.items?.map((item) => (
              <CommandItem href={item.slug} key={item.slug} textValue={item.title}>
                <BrandIcon className="size-4" name={item.title.toLowerCase() as BrandIconProps["name"]} />
                {item.title}
              </CommandItem>
            ))}
            {section.sections?.map((section) => (
              <CommandGroup aria-label={section.title} className="p-0" key={section.title} title={section.title}>
                {section.items?.map((item) => (
                  <CommandItem href={item.slug} key={item.slug} textValue={item.title}>
                    <ComponentIcon name={slugify(item.title) as ComponentIconProps["name"]} />
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
