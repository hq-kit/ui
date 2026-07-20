"use client"

import type { ComponentProps, CSSProperties, HTMLAttributes } from "react"
import {
  type AutocompleteProps,
  Collection,
  composeRenderProps,
  Header,
  Input,
  type InputProps,
  Menu,
  MenuItem,
  type MenuItemProps,
  type MenuProps,
  MenuSection,
  type MenuSectionProps,
  SearchField,
  Separator,
  type SeparatorProps
} from "react-aria-components"
import { Button } from "react-aria-components/Button"
import { IconPlaceholder } from "@/components/icon-placeholder"
import { cn } from "@/lib/utils"
import { Autocomplete } from "./autocomplete"
import { Dialog, DialogDescription, DialogTitle } from "./dialog"
import { InputGroup, InputGroupAddon } from "./input"

function Command({
  className,
  dir,
  style,
  ...props
}: Omit<AutocompleteProps, "className" | "style"> & {
  className?: string
  dir?: HTMLAttributes<HTMLDivElement>["dir"]
  style?: CSSProperties
}) {
  return (
    <div
      className={cn("bg-popover text-popover-foreground rounded-4xl p-1 flex size-full flex-col overflow-hidden", className)}
      data-slot="command"
      dir={dir}
      style={style}
    >
      <Autocomplete {...props} />
    </div>
  )
}
const CommandDialog = ({
  title = "Command Palette",
  description = "Search for a command to run...",
  children,
  className,
  showCloseButton = false,
  ...props
}: ComponentProps<typeof Dialog> & {
  title?: string
  description?: string
  className?: string
  showCloseButton?: boolean
}) => (
  <Dialog {...props}>
    <Button className="sr-only" />
    <Dialog.Header className="sr-only">
      <DialogTitle>{title}</DialogTitle>
      <DialogDescription>{description}</DialogDescription>
    </Dialog.Header>
    <Dialog.Content
      className={cn("rounded-4xl! top-1/3 translate-y-0 overflow-hidden p-0", className)}
      showCloseButton={showCloseButton}
    >
      <Command>{children}</Command>
    </Dialog.Content>
  </Dialog>
)

function CommandInput({ className, ...props }: InputProps) {
  return (
    <SearchField
      aria-label={props.placeholder || "Search"}
      autoFocus
      className="p-1 pb-0"
      data-slot="command-input-wrapper"
    >
      <InputGroup className="bg-input/30 h-9">
        <Input
          {...props}
          className={cn(
            "w-full text-sm outline-hidden disabled:cursor-not-allowed disabled:opacity-50 [&::-webkit-search-cancel-button]:hidden",
            className
          )}
          data-slot="command-input"
        />
        <InputGroupAddon>
          <IconPlaceholder
            className="size-4 shrink-0 opacity-50"
            hugeicons="SearchIcon"
            lucide="SearchIcon"
            phosphor="MagnifyingGlassIcon"
            remixicon="RiSearchLine"
            tabler="IconSearch"
          />
        </InputGroupAddon>
      </InputGroup>
    </SearchField>
  )
}

function CommandList<T extends object>({ className, ...props }: MenuProps<T>) {
  return (
    <Menu
      {...props}
      className={cn("no-scrollbar max-h-72 scroll-py-1 outline-none overflow-y-auto overflow-x-hidden", className)}
      data-slot="command-list"
    />
  )
}

function CommandEmpty({ className, ...props }: ComponentProps<"div">) {
  return <div className={cn("py-6 text-center text-sm", className)} data-slot="command-empty" {...props} />
}

const CommandGroup = <T extends object>({ className, title, ...props }: MenuSectionProps<T> & { title?: string }) => (
  <MenuSection className={cn("text-foreground **:[[cmdk-group-heading]]:text-muted-foreground overflow-hidden p-1 **:[[cmdk-group-heading]]:px-3 **:[[cmdk-group-heading]]:py-2 **:[[cmdk-group-heading]]:text-xs **:[[cmdk-group-heading]]:font-medium", className)} data-slot="command-group">
    {title && (
      <Header className="pointer-events-none" cmdk-group-heading="" data-slot="title">
        {title}
      </Header>
    )}
    <Collection items={props.items}>{props.children}</Collection>
  </MenuSection>
)

function CommandSeparator({ className, ...props }: SeparatorProps) {
  return <Separator className={cn("bg-border/50 my-1 h-px", className)} data-slot="command-separator" {...props} />
}

function CommandItem<T extends object>({ className, children, textValue, ...props }: MenuItemProps<T>) {
  return (
    <MenuItem
      {...props}
      className={cn(
        "data-selected:bg-muted data-selected:text-foreground data-selected:*:[svg]:text-foreground relative flex cursor-default items-center gap-2 rounded-lg px-3 py-2 text-sm outline-hidden select-none in-data-[slot=dialog-content]:rounded-2xl [&_svg:not([class*='size-'])]:size-4 data-focused:bg-muted data-focused:text-foreground data-focused:*:[svg]:text-foreground group/command-item data-[disabled=true]:pointer-events-none data-[disabled=true]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0",
        className
      )}
      data-slot="command-item"
      textValue={textValue || (typeof children === "string" ? children : undefined)}
    >
      {composeRenderProps(children, (children) => (
        <>
          {children}
          <IconPlaceholder
            className="ml-auto opacity-0 group-has-data-[slot=command-shortcut]/command-item:hidden group-data-[checked=true]/command-item:opacity-100"
            hugeicons="Tick02Icon"
            lucide="CheckIcon"
            phosphor="CheckIcon"
            remixicon="RiCheckLine"
            tabler="IconCheck"
          />
        </>
      ))}
    </MenuItem>
  )
}

function CommandShortcut({ className, ...props }: ComponentProps<"span">) {
  return (
    <span
      className={cn("text-muted-foreground group-data-selected/command-item:text-foreground ml-auto text-xs tracking-widest group-data-focused/command-item:text-foreground", className)}
      data-slot="command-shortcut"
      {...props}
    />
  )
}
Command.Dialog = CommandDialog
Command.Input = CommandInput
Command.List = CommandList
Command.Empty = CommandEmpty
Command.Group = CommandGroup
Command.Item = CommandItem
Command.Shortcut = CommandShortcut
Command.Separator = CommandSeparator

export {
  Command,
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut
}
