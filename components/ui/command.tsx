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
      className={cn("cn-command flex size-full flex-col overflow-hidden", className)}
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
      className={cn("cn-command-dialog top-1/3 translate-y-0 overflow-hidden p-0", className)}
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
      className="cn-command-input-wrapper"
      data-slot="command-input-wrapper"
    >
      <InputGroup className="cn-command-input-group">
        <Input
          {...props}
          className={cn(
            "cn-command-input outline-hidden disabled:cursor-not-allowed disabled:opacity-50 [&::-webkit-search-cancel-button]:hidden",
            className
          )}
          data-slot="command-input"
        />
        <InputGroupAddon>
          <IconPlaceholder
            className="cn-command-input-icon"
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
      className={cn("cn-command-list overflow-y-auto overflow-x-hidden", className)}
      data-slot="command-list"
    />
  )
}

function CommandEmpty({ className, ...props }: ComponentProps<"div">) {
  return <div className={cn("cn-command-empty", className)} data-slot="command-empty" {...props} />
}

const CommandGroup = <T extends object>({ className, title, ...props }: MenuSectionProps<T> & { title?: string }) => (
  <MenuSection className={cn("cn-command-group", className)} data-slot="command-group">
    {title && (
      <Header className="pointer-events-none" cmdk-group-heading="" data-slot="title">
        {title}
      </Header>
    )}
    <Collection items={props.items}>{props.children}</Collection>
  </MenuSection>
)

function CommandSeparator({ className, ...props }: SeparatorProps) {
  return <Separator className={cn("cn-command-separator", className)} data-slot="command-separator" {...props} />
}

function CommandItem<T extends object>({ className, children, textValue, ...props }: MenuItemProps<T>) {
  return (
    <MenuItem
      {...props}
      className={cn(
        "cn-command-item cn-command-item-aria group/command-item data-[disabled=true]:pointer-events-none data-[disabled=true]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0",
        className
      )}
      data-slot="command-item"
      textValue={textValue || (typeof children === "string" ? children : undefined)}
    >
      {composeRenderProps(children, (children) => (
        <>
          {children}
          <IconPlaceholder
            className="cn-command-item-indicator ml-auto opacity-0 group-has-data-[slot=command-shortcut]/command-item:hidden group-data-[checked=true]/command-item:opacity-100"
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
      className={cn("cn-command-shortcut cn-command-shortcut-aria", className)}
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
