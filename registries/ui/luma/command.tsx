"use client"

import type { ComponentProps, CSSProperties, HTMLAttributes } from "react"
import { Button } from "react-aria-components/Button"
import { composeRenderProps } from "react-aria-components/composeRenderProps"
import {
  Collection,
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
import { Input, type InputProps, SearchField } from "react-aria-components/SearchField"
import { IconPlaceholder } from "@/components/icon-placeholder"
import { cn } from "@/lib/utils"
import { Autocomplete } from "./autocomplete"
import { Dialog, DialogDescription, DialogTitle } from "./dialog"
import { InputGroup, InputGroupAddon } from "./input"

const Command = ({
  className,
  dir,
  style,
  ...props
}: Omit<ComponentProps<typeof Autocomplete>, "className" | "style"> & {
  className?: string
  dir?: HTMLAttributes<HTMLDivElement>["dir"]
  style?: CSSProperties
}) => (
  <div
    className={cn(
      "flex size-full flex-col overflow-hidden rounded-4xl bg-popover p-1 text-popover-foreground",
      className
    )}
    data-slot="command"
    dir={dir}
    style={style}
  >
    <Autocomplete {...props} />
  </div>
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
    <Button className="sr-only" />
    <Dialog.Header className="sr-only">
      <DialogTitle>{title}</DialogTitle>
      <DialogDescription>{description}</DialogDescription>
    </Dialog.Header>
    <Dialog.Content
      className={cn("top-1/3 translate-y-0 overflow-hidden rounded-4xl! p-0", className)}
      showCloseButton={showCloseButton}
    >
      <Command>{children}</Command>
    </Dialog.Content>
  </Dialog>
)

const CommandInput = ({ className, isPending, ...props }: InputProps & { isPending?: boolean }) => (
  <SearchField
    aria-label={props.placeholder || "Search"}
    autoFocus
    className="p-1 pb-0"
    data-slot="command-input-wrapper"
  >
    <InputGroup className="h-9 bg-input/50">
      <Input
        {...props}
        className={cn(
          "w-full text-sm outline-hidden disabled:cursor-not-allowed disabled:opacity-50 [&::-webkit-search-cancel-button]:hidden",
          className
        )}
        data-slot="command-input"
      />
      <InputGroupAddon>
        {isPending ? (
          <IconPlaceholder
            aria-label="Loading"
            className="size-4 shrink-0 animate-spin opacity-50"
            data-slot="loader"
            hugeicons="Loading03Icon"
            lucide="LoaderIcon"
            phosphor="SpinnerIcon"
            remixicon="RiLoaderLine"
            role="status"
            tabler="IconLoader"
          />
        ) : (
          <IconPlaceholder
            className="size-4 shrink-0 opacity-50"
            hugeicons="SearchIcon"
            lucide="SearchIcon"
            phosphor="MagnifyingGlassIcon"
            remixicon="RiSearchLine"
            tabler="IconSearch"
          />
        )}
      </InputGroupAddon>
    </InputGroup>
  </SearchField>
)

const CommandList = <T extends object>({ className, ...props }: MenuProps<T>) => (
  <Menu
    {...props}
    className={cn("no-scrollbar max-h-72 scroll-py-1 overflow-y-auto overflow-x-hidden outline-none", className)}
    data-slot="command-list"
  />
)

const CommandEmpty = ({ className, ...props }: ComponentProps<"div">) => (
  <div className={cn("py-6 text-center text-sm", className)} data-slot="command-empty" {...props} />
)

const CommandGroup = <T extends object>({ className, title, ...props }: MenuSectionProps<T> & { title?: string }) => (
  <MenuSection
    className={cn(
      "overflow-hidden p-1.5 text-foreground **:[[cmdk-group-heading]]:px-3 **:[[cmdk-group-heading]]:py-2 **:[[cmdk-group-heading]]:font-medium **:[[cmdk-group-heading]]:text-muted-foreground **:[[cmdk-group-heading]]:text-xs",
      className
    )}
    data-slot="command-group"
  >
    {title && (
      <Header className="pointer-events-none" cmdk-group-heading="" data-slot="title">
        {title}
      </Header>
    )}
    <Collection items={props.items}>{props.children}</Collection>
  </MenuSection>
)

const CommandSeparator = ({ className, ...props }: SeparatorProps) => (
  <Separator className={cn("my-1.5 h-px bg-border/50", className)} data-slot="command-separator" {...props} />
)

const CommandItem = <T extends object>({ className, children, textValue, ...props }: MenuItemProps<T>) => (
  <MenuItem
    {...props}
    className={cn(
      "group/command-item relative flex cursor-default select-none items-center gap-2 in-data-[slot=dialog-content]:rounded-3xl rounded-2xl px-3 py-2 font-medium text-sm outline-hidden data-[disabled=true]:pointer-events-none data-focused:bg-muted data-selected:bg-muted data-focused:text-foreground data-selected:text-foreground data-[disabled=true]:opacity-50 [&_svg:not([class*='size-'])]:size-4 [&_svg]:pointer-events-none [&_svg]:shrink-0 data-focused:*:[svg]:text-foreground data-selected:*:[svg]:text-foreground",
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

const CommandShortcut = ({ className, ...props }: ComponentProps<"span">) => (
  <span
    className={cn(
      "ml-auto text-muted-foreground text-xs tracking-widest group-data-focused/command-item:text-foreground group-data-selected/command-item:text-foreground",
      className
    )}
    data-slot="command-shortcut"
    {...props}
  />
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
