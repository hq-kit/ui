"use client"

import type { ComponentProps } from "react"
import type { AutocompleteProps } from "react-aria-components/Autocomplete"
import { Collection } from "react-aria-components/Collection"
import {
  Header,
  Menu,
  MenuItem,
  type MenuItemProps,
  type MenuProps,
  MenuSection,
  type MenuSectionProps,
  Separator,
  type SeparatorProps
} from "react-aria-components/Menu"
import { Input, SearchField, type SearchFieldProps } from "react-aria-components/SearchField"
import { IconPlaceholder } from "@/components/icon-placeholder"
import { cn } from "@/lib/utils"
import { Autocomplete } from "./autocomplete"
import { Dialog, DialogDescription, DialogTitle } from "./dialog"
import { InputGroupAddon, inputGroupVariants } from "./input"

const Command = ({
  className,
  isPending,
  ...props
}: AutocompleteProps & {
  className?: string
  isPending?: boolean
}) => (
  <Autocomplete data-slot="command" {...props}>
    <div
      className={cn("bg-popover text-popover-foreground rounded-4xl p-1 group/command flex size-full flex-col overflow-hidden", className)}
      data-pending={isPending}
      data-slot="command"
    >
      {props.children}
    </div>
  </Autocomplete>
)

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
    <Dialog.Trigger className="sr-only" />
    <Dialog.Header className="sr-only">
      <DialogTitle>{title}</DialogTitle>
      <DialogDescription>{description}</DialogDescription>
    </Dialog.Header>
    <Dialog.Content
      className={cn("rounded-4xl! p-0 top-1/3 translate-y-0 overflow-hidden *:p-0", className)}
      closeButton={showCloseButton}
    >
      <Command>{children}</Command>
    </Dialog.Content>
  </Dialog>
)

const CommandInput = ({
  className,
  placeholder = "Type a command or search...",
  ...props
}: SearchFieldProps & { placeholder?: string }) => (
  <div className="p-1 pb-0" data-slot="command-input-wrapper">
    <SearchField
      autoFocus
      {...props}
      aria-label="Filter"
      className={cn(inputGroupVariants({ className: "bg-input/30 h-9" }), className)}
      data-slot="command-input-wrapper"
    >
      <InputGroupAddon>
        <IconPlaceholder
          className="size-4 shrink-0 opacity-50 group-data-[pending=true]/command:hidden"
          data-slot="input-group-addon"
          hugeicons="SearchIcon"
          lucide="SearchIcon"
          phosphor="MagnifyingGlassIcon"
          remixicon="RiSearchLine"
          tabler="IconSearch"
        />
        <IconPlaceholder
          aria-label="Loading"
          className="size-4 shrink-0 opacity-50 hidden animate-spin group-data-[pending=true]/command:block"
          data-slot="input-group-addon"
          hugeicons="Loading03Icon"
          lucide="LoaderIcon"
          phosphor="SpinnerIcon"
          remixicon="RiLoaderLine"
          role="status"
          tabler="IconLoader"
        />
      </InputGroupAddon>
      <Input
        className="w-full text-sm outline-hidden disabled:cursor-not-allowed disabled:opacity-50 [&::-webkit-search-cancel-button]:hidden"
        data-slot="command-input"
        placeholder={placeholder}
      />
    </SearchField>
  </div>
)

const CommandList = <T extends object>({ className, ...props }: MenuProps<T>) => (
  <Menu
    className={cn(
      "no-scrollbar max-h-72 scroll-py-1 outline-none scroll-fade-y overflow-y-auto overflow-x-hidden p-1 has-data-[slot=command-group]:p-0",
      className
    )}
    data-slot="command-list"
    {...props}
  />
)

const CommandEmpty = ({ ...props }: ComponentProps<"div">) => (
  <div className="py-6 text-center text-sm" data-slot="command-empty" {...props} />
)

const CommandGroup = <T extends object>({ className, title, ...props }: MenuSectionProps<T> & { title?: string }) => (
  <MenuSection className={cn("text-foreground **:data-[slot=title]:text-muted-foreground overflow-hidden p-1 **:data-[slot=title]:px-3 **:data-[slot=title]:py-2 **:data-[slot=title]:text-xs **:data-[slot=title]:font-medium", className)} data-slot="command-group">
    {title && (
      <Header className="pointer-events-none" data-slot="title">
        {title}
      </Header>
    )}
    <Collection items={props.items}>{props.children}</Collection>
  </MenuSection>
)

const CommandSeparator = ({ className, ...props }: SeparatorProps) => (
  <Separator className={cn("bg-border/50 my-1 h-px", className)} data-slot="command-separator" {...props} />
)

const CommandItem = ({ className, ...props }: MenuItemProps) => (
  <MenuItem
    className={cn(
      "data-hovered:bg-muted data-hovered:text-foreground data-hovered:*:[svg]:text-foreground data-focused:bg-muted data-focused:text-foreground data-focused:*:[svg]:text-foreground relative flex cursor-default items-center gap-2 rounded-lg px-3 py-2 text-sm outline-hidden select-none in-data-[slot=dialog-content]:rounded-2xl [&_svg:not([class*='size-'])]:size-4 group/command-item data-[disabled=true]:pointer-events-none data-[disabled=true]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0",
      className
    )}
    data-slot="command-item"
    {...props}
  >
    {(values) => (
      <>
        {typeof props.children === "function" ? props.children(values) : props.children}
        {values.isSelected && (
          <IconPlaceholder
            className="ml-auto group-has-data-[slot=command-shortcut]/command-item:hidden"
            data-slot="check-indicator"
            hugeicons="Tick02Icon"
            lucide="CheckIcon"
            phosphor="CheckIcon"
            remixicon="RiCheckLine"
            tabler="IconCheck"
          />
        )}
      </>
    )}
  </MenuItem>
)

const CommandShortcut = ({ className, ...props }: ComponentProps<"span">) => (
  <span className={cn("text-muted-foreground group-data-selected/command-item:text-foreground ml-auto text-xs tracking-widest", className)} data-slot="command-shortcut" {...props} />
)

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
