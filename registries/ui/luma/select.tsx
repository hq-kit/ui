"use client"

import type { ComponentProps, ReactNode } from "react"
import type { VariantProps } from "tailwind-variants"
import { composeRenderProps } from "react-aria-components/composeRenderProps"
import { Header } from "react-aria-components/Header"
import { SearchField } from "react-aria-components/SearchField"
import {
  Button,
  Collection,
  type Key,
  ListBox,
  ListBoxItem,
  type ListBoxProps,
  ListBoxSection,
  type ListBoxSectionProps,
  Popover,
  type PopoverProps,
  Select as RACSelect,
  SelectValue as RACSelectValue,
  type SelectProps,
  type SelectValueProps
} from "react-aria-components/Select"
import { Separator } from "react-aria-components/Separator"
import { IconPlaceholder } from "@/components/icon-placeholder"
import { cn } from "@/lib/utils"
import { Autocomplete } from "./autocomplete"
import { fieldVariants } from "./field"
import { InputGroup, InputGroupAddon, InputGroupInput } from "./input"

const Select = <T extends object, M extends "single" | "multiple" = "single">({
  className,
  orientation = "vertical",
  ...props
}: SelectProps<T, M> & VariantProps<typeof fieldVariants>) => {
  return (
    <RACSelect
      className={composeRenderProps(className, (className) => cn(fieldVariants({ orientation }), className))}
      data-orientation={orientation}
      data-slot="field"
      {...props}
    >
      {(values) => (typeof props.children === "function" ? props.children(values) : props.children)}
    </RACSelect>
  )
}

const SelectValue = <T extends object>({ className, children, ...props }: SelectValueProps<T>) => (
  <RACSelectValue
    className={cn("flex flex-1 text-left data-placeholder:text-muted-foreground", className)}
    data-slot="select-value"
    {...props}
  >
    {typeof children === "function"
      ? children
      : ({ selectedItems, selectedText, defaultChildren }) =>
          selectedItems.length > 1 ? selectedText : defaultChildren}
  </RACSelectValue>
)

const SelectTrigger = ({
  className,
  size = "default",
  children,
  ...props
}: Omit<ComponentProps<typeof Button>, "children"> & {
  children?: ReactNode
  size?: "sm" | "default"
}) => (
  <Button
    className={cn(
      "flex w-full items-center justify-between gap-1.5 whitespace-nowrap rounded-3xl border border-transparent bg-input/50 px-3 py-2 text-sm outline-none transition-[color,box-shadow,background-color] focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 disabled:cursor-not-allowed disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 data-[size=default]:h-9 data-[size=sm]:h-8 data-placeholder:text-muted-foreground *:data-[slot=select-value]:line-clamp-1 *:data-[slot=select-value]:flex *:data-[slot=select-value]:flex *:data-[slot=select-value]:items-center *:data-[slot=select-value]:gap-1.5 dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 [&_svg:not([class*='size-'])]:size-4 [&_svg]:pointer-events-none [&_svg]:shrink-0",
      className
    )}
    data-size={size}
    data-slot="select-trigger"
    slot="control"
    {...props}
  >
    {children}
    <IconPlaceholder
      className="pointer-events-none size-4 text-muted-foreground"
      hugeicons="UnfoldMoreIcon"
      lucide="ChevronDownIcon"
      phosphor="CaretDownIcon"
      remixicon="RiArrowDownSLine"
      tabler="IconSelector"
    />
  </Button>
)

const SelectContent = <T extends object>({
  placement = "bottom",
  className,
  offset = 4,
  crossOffset = 0,
  isSearchable = false,
  ...props
}: ListBoxProps<T> & Pick<PopoverProps, "placement" | "offset" | "crossOffset"> & { isSearchable?: boolean }) => (
  <Popover
    className="data-exiting:fade-out-0 data-entering:fade-in-0 data-exiting:zoom-out-95 data-entering:zoom-in-95 data-[placement=bottom]:slide-in-from-top-2 data-[placement=left]:slide-in-from-right-2 data-[placement=right]:slide-in-from-left-2 data-[placement=top]:slide-in-from-bottom-2 relative isolate z-50 w-(--trigger-width) min-w-36 origin-(--trigger-anchor-point) overflow-hidden rounded-3xl bg-popover text-popover-foreground shadow-lg ring-1 ring-foreground/5 duration-100 data-entering:animate-in data-exiting:animate-out dark:ring-foreground/10"
    crossOffset={crossOffset}
    data-slot="select-content"
    offset={offset}
    placement={placement}
  >
    {isSearchable ? (
      <Autocomplete>
        <SearchField aria-label="Search" autoFocus className="p-1 pb-0" data-slot="select-input-wrapper">
          <InputGroup>
            <InputGroupInput className="[&::-webkit-search-cancel-button]:hidden" data-slot="select-input" />
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
        <ListBox
          className={cn(
            "group/select-list max-h-[inherit] overflow-y-auto overflow-x-hidden p-1 outline-hidden has-data-[slot=select-group]:p-0",
            className
          )}
          data-slot="select-list"
          {...props}
        />
      </Autocomplete>
    ) : (
      <ListBox
        className={cn(
          "group/select-list max-h-[inherit] overflow-y-auto overflow-x-hidden p-1 outline-hidden has-data-[slot=select-group]:p-0",
          className
        )}
        data-slot="select-list"
        {...props}
      />
    )}
  </Popover>
)

const SelectGroup = <T extends object>({ title, children, ...props }: ListBoxSectionProps<T> & { title?: string }) => (
  <ListBoxSection className={cn("scroll-my-1.5 p-1.5", props.className)} data-slot="select-group" {...props}>
    {title && (
      <Header className="px-3 py-2.5 text-muted-foreground text-xs" data-slot="select-label">
        {title}
      </Header>
    )}
    <Collection items={props.items}>{children}</Collection>
  </ListBoxSection>
)
const SelectItem = ({ className, children, ...props }: ComponentProps<typeof ListBoxItem>) => {
  const textValue = typeof children === "string" ? children : props.textValue
  return (
    <ListBoxItem
      className={cn(
        "relative flex w-full cursor-default select-none items-center gap-2.5 rounded-2xl py-2 pr-8 pl-3 font-medium text-sm outline-hidden focus:bg-accent focus:text-accent-foreground not-data-[variant=destructive]:focus:**:text-accent-foreground data-disabled:pointer-events-none data-focused:bg-accent data-focused:text-accent-foreground data-disabled:opacity-50 [&_svg:not([class*='size-'])]:size-4 [&_svg]:pointer-events-none [&_svg]:shrink-0 *:[span]:last:flex *:[span]:last:items-center *:[span]:last:gap-2",
        className
      )}
      data-slot="select-item"
      textValue={textValue}
      {...props}
    >
      {composeRenderProps(children, (children, { isSelected }) => (
        <>
          <span className="flex flex-1 shrink-0 items-center gap-2 whitespace-nowrap">{children}</span>
          <span className="pointer-events-none absolute right-2 flex size-4 items-center justify-center">
            {isSelected ? (
              <IconPlaceholder
                className="pointer-events-none"
                hugeicons="Tick02Icon"
                lucide="CheckIcon"
                phosphor="CheckIcon"
                remixicon="RiCheckLine"
                tabler="IconCheck"
              />
            ) : null}
          </span>
        </>
      ))}
    </ListBoxItem>
  )
}

const SelectSeparator = ({ className, ...props }: ComponentProps<typeof Separator>) => (
  <Separator
    className={cn("pointer-events-none -mx-1.5 my-1.5 h-px bg-border", className)}
    data-slot="select-separator"
    {...props}
  />
)

const SelectEmpty = ({ className, ...props }: ComponentProps<"div">) => (
  <div
    className={cn(
      "hidden w-full justify-center py-2 text-center text-muted-foreground text-sm group-data-empty/select-list:flex",
      className
    )}
    data-slot="select-empty"
    {...props}
  />
)

Select.Content = SelectContent
Select.Group = SelectGroup
Select.Item = SelectItem
Select.Separator = SelectSeparator
Select.Trigger = SelectTrigger
Select.Value = SelectValue
Select.Empty = SelectEmpty

export type { Key }
export { Select, SelectContent, SelectEmpty, SelectGroup, SelectItem, SelectSeparator, SelectTrigger, SelectValue }
