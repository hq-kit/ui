"use client"

import { IconBooks, IconColorSwatch, IconHome, IconPackage, IconSearch } from "@tabler/icons-react"
import { cn } from "cn"
import Link, { type LinkProps } from "next/link"
import { usePathname } from "next/navigation"
import { type ComponentProps, Fragment, useCallback, useEffect, useState } from "react"
import { MenuItem, type MenuItemProps } from "react-aria-components"
import { useIsMobile } from "@/hooks/use-mobile"
import { ComponentIcon, type ComponentIconProps } from "../icons"
import { Button } from "../ui/button"
import { Command } from "../ui/command"
import { Dialog } from "../ui/dialog"
import { Kbd, KbdGroup } from "../ui/kbd"
import { menus } from "./menus"

export function CommandPalette() {
  const [openCommand, setOpenCommand] = useState(false)
  const pathname = usePathname()
  const isMobile = useIsMobile()
  useEffect(() => {
    if (openCommand) setOpenCommand(!open)
  }, [pathname])

  const handleKeyDown = useCallback((e: KeyboardEvent) => {
    if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
      e.preventDefault()
      setOpenCommand((prev) => !prev)
    }
  }, [])

  useEffect(() => {
    document.addEventListener("keydown", handleKeyDown)
    return () => document.removeEventListener("keydown", handleKeyDown)
  }, [handleKeyDown])

  return (
    <>
      <Button onPress={() => setOpenCommand(true)} size={isMobile ? "icon-sm" : "sm"} variant="outline">
        <IconSearch />
        {!isMobile && (
          <>
            <span className="text-muted-foreground mr-2">Search...</span>
            <KbdGroup>
              <Kbd>meta</Kbd>
              <Kbd>K</Kbd>
            </KbdGroup>
          </>
        )}
      </Button>
      <Dialog.Content
        className={"ring-ring/50 top-1/3 overflow-hidden p-0 ring-2 sm:min-w-xl"}
        isOpen={openCommand}
        onOpenChange={setOpenCommand}
        showCloseButton={false}
      >
        <Command>
          <Command.Input autoFocus placeholder="Search components, color..." />
          <Command.List>
            <Command.Group aria-label="Pages">
              <CommandItem href="/" id={"/"} textValue="Home">
                <IconHome />
                Home
              </CommandItem>
              <CommandItem href={"/docs"} id={"/docs"} textValue="Docs">
                <IconBooks />
                Docs
              </CommandItem>
              <CommandItem href="/themes" id="/themes" textValue="themes">
                <IconColorSwatch />
                Themes
              </CommandItem>
            </Command.Group>

            {menus().map((section) => (
              <Fragment key={section.title}>
                <Command.Group items={section.items} title={section.title}>
                  {(item) => (
                    <CommandItem href={item.slug} id={item.slug} textValue={item.slug}>
                      <IconPackage />
                      {item.title}
                    </CommandItem>
                  )}
                </Command.Group>
                {section.sections?.map((section) => (
                  <Command.Group items={section.items} key={section.title} title={section.title}>
                    {(item) => (
                      <CommandItem href={item.slug} id={item.slug} textValue={item.slug}>
                        <ComponentIcon name={item.slug.split("/").pop() as ComponentIconProps["name"]} />
                        {item.title}
                      </CommandItem>
                    )}
                  </Command.Group>
                ))}
              </Fragment>
            ))}
          </Command.List>
        </Command>
      </Dialog.Content>
    </>
  )
}

const CommandItem = <T extends object>({ className, children, textValue, ...props }: MenuItemProps<T>) => (
  <MenuItem
    className={cn(
      "group/command-item data-focused:bg-accent data-selected:bg-accent data-focused:text-accent-foreground data-selected:text-accent-foreground data-focused:*:[svg]:text-accent-foreground data-selected:*:[svg]:text-accent-foreground relative flex cursor-default items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-hidden select-none in-data-[slot=dialog-content]:rounded-lg! data-[disabled=true]:pointer-events-none data-[disabled=true]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
      className
    )}
    data-slot="command-item"
    textValue={textValue || (typeof children === "string" ? children : undefined)}
    {...props}
    render={(domProps) =>
      "href" in props ? (
        <Link {...(domProps as LinkProps)} {...(props as LinkProps)} />
      ) : (
        <div {...(domProps as ComponentProps<"div">)} />
      )
    }
  >
    {children}
  </MenuItem>
)
