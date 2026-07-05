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
          <Button
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
          </Button>
        </>
      )}
    </Group>
  ) : (
    <Button
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
        "cn-select-content relative flex h-max w-auto min-w-(--trigger-width) flex-col overflow-hidden outline-hidden",
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
          <div className="cn-command-input-wrapper" data-slot="command-input-wrapper">
            <SearchField
              aria-label="Filter"
              autoFocus
              className={cn(inputGroupVariants({ className: "cn-command-input-group" }), className)}
              data-slot="command-input-wrapper"
            >
              <InputGroupAddon>
                <IconPlaceholder
                  className="cn-command-input-icon group-data-[pending=true]/command:hidden"
                  data-slot="input-group-addon"
                  hugeicons="SearchIcon"
                  lucide="SearchIcon"
                  phosphor="MagnifyingGlassIcon"
                  remixicon="RiSearchLine"
                  tabler="IconSearch"
                />
                <IconPlaceholder
                  aria-label="Loading"
                  className="cn-command-input-icon hidden animate-spin group-data-[pending=true]/command:block"
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
                className="cn-command-input w-auto! outline-hidden disabled:cursor-not-allowed disabled:opacity-50 [&::-webkit-search-cancel-button]:hidden"
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
  <ListBoxSection className={cn("cn-select-group", props.className)} data-slot="select-group" {...props}>
    {title && (
      <Header className="cn-select-label" data-slot="select-label">
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
        "cn-select-item relative flex w-full cursor-default select-none items-center outline-hidden data-disabled:pointer-events-none data-disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0",
        className
      )}
      data-slot="select-item"
      textValue={textValue}
      {...props}
    >
      {(values) => (
        <>
          {values.isSelected && (
            <span className="cn-select-item-indicator">
              <IconPlaceholder
                className="cn-select-item-indicator-icon pointer-events-none"
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
    className={cn("cn-select-separator pointer-events-none", className)}
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
