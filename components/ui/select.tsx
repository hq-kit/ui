"use client"

import type { ComponentProps } from "react"
import type { PopoverProps } from "react-aria-components/Select"
import type { VariantProps } from "tailwind-variants"
import {
  Button as ButtonPrimitive,
  type ButtonProps,
  composeRenderProps,
  Header as HeaderPrimitive,
  ListBoxItem as ListBoxItemPrimitive,
  ListBox as ListBoxPrimitive,
  type ListBoxProps,
  ListBoxSection as ListBoxSectionPrimitive,
  Popover as PopoverPrimitive,
  SearchField,
  type SearchFieldProps,
  Select as SelectPrimitive,
  type SelectProps,
  SelectValue as SelectValuePrimitive,
  type SelectValueProps,
  Separator as SeparatorPrimitive,
  useSlottedContext
} from "react-aria-components"
import { Group, type GroupProps } from "react-aria-components/Group"
import { Collection, type ListBoxSectionProps } from "react-aria-components/ListBox"
import { SelectContext } from "react-aria-components/Select"
import { IconPlaceholder } from "@/components/icon-placeholder"
import { cn } from "@/lib/utils"
import { Autocomplete } from "./autocomplete"
import { fieldVariants } from "./field"
import { InputGroup, InputGroupAddon, InputGroupInput } from "./input"

const Select = <T extends object, M extends "single" | "multiple" = "single">({
  className,
  orientation,
  ...props
}: SelectProps<T, M> & VariantProps<typeof fieldVariants>) => {
  return (
    <SelectPrimitive
      className={composeRenderProps(className, (className) => cn(fieldVariants({ orientation }), className))}
      data-orientation={orientation}
      data-slot="field"
      {...props}
    >
      {(values) => (typeof props.children === "function" ? props.children(values) : props.children)}
    </SelectPrimitive>
  )
}

const SelectGroup = <T extends object>({ title, children, ...props }: ListBoxSectionProps<T> & { title?: string }) => (
  <ListBoxSectionPrimitive className={cn("cn-select-group", props.className)} data-slot="select-group" {...props}>
    {title && (
      <HeaderPrimitive className="cn-select-label" data-slot="select-label">
        {title}
      </HeaderPrimitive>
    )}
    <Collection items={props.items}>{children}</Collection>
  </ListBoxSectionPrimitive>
)

function SelectValue<T extends object>({ className, children, ...props }: SelectValueProps<T>) {
  return (
    <SelectValuePrimitive
      className={cn("cn-select-value cn-select-value-aria", className)}
      data-slot="select-value"
      {...props}
    >
      {typeof children === "function"
        ? children
        : ({ selectedItems, selectedText, defaultChildren }) =>
            selectedItems.length > 1 ? selectedText : defaultChildren}
    </SelectValuePrimitive>
  )
}

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
        "cn-select-trigger-multiple relative flex max-h-none min-h-fit w-fit items-center justify-between whitespace-nowrap py-1 outline-none transition-[color,box-shadow,border] disabled:cursor-not-allowed disabled:opacity-50 *:data-[slot=select-value]:line-clamp-1 *:data-[slot=select-value]:flex *:data-[slot=select-value]:items-center [&_svg]:pointer-events-none [&_svg]:shrink-0",
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
          <ButtonPrimitive
            data-slot="select-trigger-button"
            {...props}
            className="absolute right-0 flex size-full cursor-default items-center justify-end pr-3 outline-hidden"
          >
            <div>
              <IconPlaceholder
                className="cn-select-trigger-icon"
                hugeicons="UnfoldMoreIcon"
                lucide="ChevronsUpDownIcon"
                phosphor="CaretUpDownIcon"
                remixicon="RiExpandUpDownLine"
                tabler="IconSelector"
              />
            </div>
          </ButtonPrimitive>
        </>
      )}
    </Group>
  ) : (
    <ButtonPrimitive
      className={cn(
        "cn-select-trigger flex w-fit items-center justify-between whitespace-nowrap outline-none transition-[color,box-shadow,border] disabled:cursor-not-allowed disabled:opacity-50 *:data-[slot=select-value]:line-clamp-1 *:data-[slot=select-value]:flex *:data-[slot=select-value]:items-center [&_svg]:pointer-events-none [&_svg]:shrink-0",
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
            className="cn-select-trigger-icon"
            hugeicons="UnfoldMoreIcon"
            lucide="ChevronDownIcon"
            phosphor="CaretDownIcon"
            remixicon="RiArrowDownSLine"
            tabler="IconSelector"
          />
        </>
      )}
    </ButtonPrimitive>
  )
}

function SelectContent<T extends object>({
  placement = "bottom",
  offset = 4,
  isSearchable = false,
  ...props
}: ListBoxProps<T> & Pick<PopoverProps, "placement" | "offset"> & { isSearchable?: boolean }) {
  return isSearchable ? (
    <SelectPopover offset={offset} placement={placement}>
      <Autocomplete>
        <SelectInput />
        <SelectList renderEmptyState={() => <SelectEmpty>No items found.</SelectEmpty>} {...props} />
      </Autocomplete>
    </SelectPopover>
  ) : (
    <SelectPopover offset={offset} placement={placement}>
      <SelectList {...props} />
    </SelectPopover>
  )
}

function SelectPopover({ className, placement = "bottom start", offset = 4, crossOffset = 0, ...props }: PopoverProps) {
  return (
    <PopoverPrimitive
      className={composeRenderProps(className, (className) =>
        cn(
          "cn-select-content-aria cn-menu-target relative isolate z-50 w-(--trigger-width) origin-(--trigger-anchor-point) overflow-hidden",
          className
        )
      )}
      crossOffset={crossOffset}
      data-slot="select-content"
      offset={offset}
      placement={placement}
      {...props}
    />
  )
}

function SelectList<T extends object>({ className, ...props }: ListBoxProps<T>) {
  return (
    <ListBoxPrimitive
      className={cn(
        "group/select-list max-h-[inherit] overflow-y-auto overflow-x-hidden p-1 outline-hidden has-data-[slot=select-group]:p-0",
        className
      )}
      data-slot="select-list"
      {...props}
    />
  )
}

function SelectInput({ className, ...props }: SearchFieldProps) {
  return (
    <SearchField {...props} autoFocus className={cn("p-1 pb-0", className)} data-slot="select-input-wrapper">
      <InputGroup>
        <InputGroupInput className="[&::-webkit-search-cancel-button]:hidden" data-slot="select-input" />
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

function SelectItem({ className, children, ...props }: ComponentProps<typeof ListBoxItemPrimitive>) {
  return (
    <ListBoxItemPrimitive
      className={cn(
        "cn-select-item cn-select-item-aria relative flex w-full cursor-default select-none items-center outline-hidden data-disabled:pointer-events-none data-disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0",
        className
      )}
      data-slot="select-item"
      textValue={typeof children === "string" ? children : undefined}
      {...props}
    >
      {composeRenderProps(children, (children, { isSelected }) => (
        <>
          <span className="cn-select-item-text shrink-0 whitespace-nowrap">{children}</span>
          <span className="cn-select-item-indicator">
            {isSelected ? (
              <IconPlaceholder
                className="cn-select-item-indicator-icon pointer-events-none"
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
    </ListBoxItemPrimitive>
  )
}

function SelectSeparator({ className, ...props }: ComponentProps<typeof SeparatorPrimitive>) {
  return (
    <SeparatorPrimitive
      className={cn("cn-select-separator pointer-events-none", className)}
      data-slot="select-separator"
      {...props}
    />
  )
}

function SelectEmpty({ className, ...props }: ComponentProps<"div">) {
  return <div className={cn("cn-select-empty-aria", className)} data-slot="select-empty" {...props} />
}

Select.Content = SelectContent
Select.Group = SelectGroup
Select.Input = SelectInput
Select.Item = SelectItem
Select.List = SelectList
Select.Popover = SelectPopover
Select.Separator = SelectSeparator
Select.Trigger = SelectTrigger
Select.Value = SelectValue
Select.Empty = SelectEmpty

export {
  Select,
  SelectContent,
  SelectEmpty,
  SelectGroup,
  SelectInput,
  SelectItem,
  SelectList,
  SelectPopover,
  SelectSeparator,
  SelectTrigger,
  SelectValue
}
