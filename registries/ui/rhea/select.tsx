"use client"

import type { VariantProps } from "tailwind-variants"
import { useSlottedContext } from "react-aria-components"
import { Autocomplete } from "react-aria-components/Autocomplete"
import { composeRenderProps } from "react-aria-components/composeRenderProps"
import { Group, type GroupProps } from "react-aria-components/Group"
import { Header } from "react-aria-components/Header"
import { Input, SearchField } from "react-aria-components/SearchField"
import {
  Button,
  type ButtonProps,
  Collection,
  type Key,
  ListBox,
  ListBoxItem,
  type ListBoxItemProps,
  type ListBoxProps,
  ListBoxSection,
  type ListBoxSectionProps,
  Popover,
  type PopoverProps,
  Select as RACSelect,
  SelectValue as RACSelectValue,
  SelectContext,
  type SelectProps,
  type SelectValueProps
} from "react-aria-components/Select"
import { Separator, type SeparatorProps } from "react-aria-components/Separator"
import { IconPlaceholder } from "@/components/icon-placeholder"
import { cn } from "@/lib/utils"
import { fieldVariants } from "./field"
import { InputGroupAddon, inputGroupVariants } from "./input"

const Select = <T extends object, M extends "single" | "multiple" = "single">({
  className,
  orientation,
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

const SelectValue = <T extends object>(props: SelectValueProps<T>) => (
  <RACSelectValue
    className={cn("**:data-[slot=item-description]:hidden", props.className)}
    data-slot="select-value"
    {...props}
  />
)

const SelectTrigger = ({
  className,
  size = "default",
  children,
  ...props
}: Omit<ButtonProps, "style"> & {
  size?: "sm" | "default"
  children: Pick<ButtonProps, "children"> | Pick<GroupProps, "children">
}) => {
  const context = useSlottedContext(SelectContext)!
  if (!context) return null

  return context.selectionMode === "multiple" ? (
    <Group
      className={cn(
        "bg-input/50 border-transparent data-placeholder:text-muted-foreground has-aria-expanded:border-ring has-aria-expanded:ring-ring/30 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive dark:aria-invalid:border-destructive/50 gap-1.5 rounded-2xl border py-2 px-3 text-sm transition-[color,box-shadow] duration-200 has-aria-expanded:ring-3 aria-invalid:ring-3 data-[size=default]:h-8 data-[size=sm]:h-7 *:data-[slot=select-value]:flex *:data-[slot=select-value]:gap-1.5 [&_svg:not([class*='size-'])]:size-4 relative flex max-h-none min-h-fit w-fit items-center justify-between whitespace-nowrap py-1 outline-none transition-[color,box-shadow,border] disabled:cursor-not-allowed disabled:opacity-50 *:data-[slot=select-value]:line-clamp-1 *:data-[slot=select-value]:flex *:data-[slot=select-value]:items-center [&_svg]:pointer-events-none [&_svg]:shrink-0",
        className
      )}
      data-size={size}
      data-slot="select-trigger"
      onClick={(e) => {
        const triggerButton: HTMLButtonElement | null | undefined = e.currentTarget.parentElement?.querySelector(
          'button[data-slot="select-trigger-button"]'
        )
        if (triggerButton) triggerButton.click()
      }}
      slot="control"
    >
      {() => (
        <>
          {children}
          <Button
            data-slot="select-trigger-button"
            {...props}
            className="absolute right-0 flex size-full cursor-default items-center justify-end pr-3 outline-hidden"
          >
            <div>
              <IconPlaceholder
                className="text-muted-foreground size-4"
                hugeicons="UnfoldMoreIcon"
                lucide="ChevronsUpDownIcon"
                phosphor="CaretUpDownIcon"
                remixicon="RiExpandUpDownLine"
                tabler="IconSelector"
              />
            </div>
          </Button>
        </>
      )}
    </Group>
  ) : (
    <Button
      className={cn(
        "bg-input/50 border-transparent data-placeholder:text-muted-foreground aria-expanded:border-ring aria-expanded:ring-ring/30 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive dark:aria-invalid:border-destructive/50 gap-1.5 rounded-2xl border py-2 px-3 text-sm transition-[color,box-shadow] duration-200 aria-expanded:ring-3 aria-invalid:ring-3 data-[size=default]:h-8 data-[size=sm]:h-7 *:data-[slot=select-value]:flex *:data-[slot=select-value]:gap-1.5 [&_svg:not([class*='size-'])]:size-4 flex w-fit items-center justify-between whitespace-nowrap outline-none transition-[color,box-shadow,border] disabled:cursor-not-allowed disabled:opacity-50 *:data-[slot=select-value]:line-clamp-1 *:data-[slot=select-value]:flex *:data-[slot=select-value]:items-center [&_svg]:pointer-events-none [&_svg]:shrink-0",
        className
      )}
      data-size={size}
      data-slot="select-trigger"
      slot="control"
      type="button"
      {...props}
    >
      {(values) => (
        <>
          {typeof children === "function" ? children(values) : children}
          <IconPlaceholder
            className="text-muted-foreground size-4"
            hugeicons="UnfoldMoreIcon"
            lucide="ChevronDownIcon"
            phosphor="CaretDownIcon"
            remixicon="RiArrowDownSLine"
            tabler="IconSelector"
          />
        </>
      )}
    </Button>
  )
}

const SelectContent = <T extends object>({
  className,
  offset = 4,
  placement = "bottom",
  isSearchable,
  ...props
}: ListBoxProps<T> & Pick<PopoverProps, "placement" | "offset"> & { isSearchable?: boolean }) => {
  const renderContent = () => (
    <ListBox
      className="flex max-h-[inherit] flex-col overflow-auto rounded-lg p-1 outline-hidden has-data-[slot=select-group]:p-0"
      data-slot="select-content"
      layout="stack"
      orientation="vertical"
      renderEmptyState={() => <div className="w-full p-4 text-center text-muted-foreground">No results found</div>}
      {...props}
    />
  )

  return (
    <Popover
      className={cn(
        "bg-popover text-popover-foreground data-entering:animate-in data-exiting:animate-out data-exiting:fade-out-0 data-entering:fade-in-0 data-exiting:zoom-out-95 data-entering:zoom-in-95 data-[placement=bottom]:slide-in-from-top-2 data-[placement=left]:slide-in-from-right-2 data-[placement=right]:slide-in-from-left-2 data-[placement=top]:slide-in-from-bottom-2 ring-foreground/5 dark:ring-foreground/10 min-w-36 rounded-2xl shadow-lg ring-1 duration-100 relative flex h-max w-auto min-w-(--trigger-width) flex-col overflow-hidden outline-hidden",
        className
      )}
      offset={offset}
      placement={placement}
      trigger="focus"
    >
      {isSearchable ? (
        <Autocomplete
          filter={(textValue, inputValue) => {
            if (inputValue.length === 0) return true
            if (textValue.length === 0) return false
            let textIndex = 0
            let inputIndex = 0
            while (textIndex < textValue.length && inputIndex < inputValue.length) {
              if (textValue.toLowerCase()[textIndex] === inputValue.toLowerCase()[inputIndex]) {
                inputIndex++
              }
              textIndex++
            }
            return inputIndex === inputValue.length
          }}
        >
          <div className="p-1 pb-0" data-slot="command-input-wrapper">
            <SearchField
              aria-label="Filter"
              autoFocus
              className={cn(inputGroupVariants({ className: "bg-input/50 h-8!" }), className)}
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
                className="w-full text-sm w-auto! outline-hidden disabled:cursor-not-allowed disabled:opacity-50 [&::-webkit-search-cancel-button]:hidden"
                data-slot="command-input"
                placeholder="Search ..."
              />
            </SearchField>
          </div>
          {renderContent()}
        </Autocomplete>
      ) : (
        renderContent()
      )}
    </Popover>
  )
}

const SelectGroup = <T extends object>({ title, children, ...props }: ListBoxSectionProps<T> & { title?: string }) => (
  <ListBoxSection className={cn("scroll-my-1.5 p-1", props.className)} data-slot="select-group" {...props}>
    {title && (
      <Header className="text-muted-foreground px-2 py-1 text-xs" data-slot="select-label">
        {title}
      </Header>
    )}
    <Collection items={props.items}>{children}</Collection>
  </ListBoxSection>
)

const SelectItem = ({ className, children, ...props }: ListBoxItemProps) => {
  const textValue = typeof children === "string" ? children : undefined

  return (
    <ListBoxItem
      className={cn(
        "data-focused:bg-accent data-focused:text-accent-foreground not-data-[variant=destructive]:data-focused:**:text-accent-foreground gap-2 min-h-7 rounded-xl py-1.5 pr-8 pl-2 text-sm [&_svg:not([class*='size-'])]:size-4 *:[span]:last:flex *:[span]:last:items-center *:[span]:last:gap-2 relative flex w-full cursor-default select-none items-center outline-hidden data-disabled:pointer-events-none data-disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0",
        className
      )}
      data-slot="select-item"
      textValue={textValue}
      {...props}
    >
      {(values) => (
        <>
          {values.isSelected && (
            <span className="pointer-events-none absolute right-2 flex size-4 items-center justify-center">
              <IconPlaceholder
                className="pointer-events-none"
                hugeicons="Tick02Icon"
                lucide="CheckIcon"
                phosphor="CheckIcon"
                remixicon="RiCheckLine"
                tabler="IconCheck"
              />
            </span>
          )}
          {typeof children === "function" ? children(values) : children}
        </>
      )}
    </ListBoxItem>
  )
}

const SelectSeparator = ({ className, ...props }: SeparatorProps) => (
  <Separator
    className={cn("bg-border -mx-1 my-1 h-px pointer-events-none", className)}
    data-slot="select-separator"
    {...props}
  />
)

Select.Content = SelectContent
Select.Group = SelectGroup
Select.Item = SelectItem
Select.Separator = SelectSeparator
Select.Trigger = SelectTrigger
Select.Value = SelectValue

export type { Key }
export { Select, SelectContent, SelectGroup, SelectItem, SelectSeparator, SelectTrigger, SelectValue }
