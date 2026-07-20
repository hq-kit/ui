"use client"

import { menus } from "@/components/layouts/menus"
import { Command } from "@/components/ui/command"
import { slugify } from "@/lib/modifiers"
import { BrandIcon, type BrandIconProps, ComponentIcon, type ComponentIconProps } from "../icons"

export function CommandMenu({ open, setOpen }: { open: boolean; setOpen: (open: boolean) => void }) {
  return (
    <Command.Dialog isOpen={open} onOpenChange={setOpen} showCloseButton={false}>
      <Command.Input placeholder="Search pages..." />
      <Command.List>
        {menus().map((section) => (
          <Command.Group aria-label={section.title} key={section.title} title={section.title}>
            {section.items?.map((item) => (
              <Command.Item href={item.slug} key={item.slug} textValue={item.title}>
                <BrandIcon className="size-4" name={item.title.toLowerCase() as BrandIconProps["name"]} />
                {item.title}
              </Command.Item>
            ))}
            {section.sections?.map((section) => (
              <Command.Group aria-label={section.title} className="p-0" key={section.title} title={section.title}>
                {section.items?.map((item) => (
                  <Command.Item href={item.slug} key={item.slug} textValue={item.title}>
                    <ComponentIcon name={slugify(item.title) as ComponentIconProps["name"]} />
                    {item.title}
                  </Command.Item>
                ))}
              </Command.Group>
            ))}
          </Command.Group>
        ))}
      </Command.List>
    </Command.Dialog>
  )
}
