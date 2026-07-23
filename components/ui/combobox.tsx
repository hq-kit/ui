"use client"

import type { VariantProps } from "tailwind-variants"
import { type ComponentProps, use } from "react"
import {
  Collection,
  ComboBox,
  type ComboBoxProps,
  ComboBoxStateContext,
  ComboBoxValue,
  Input,
  ListBox,
  ListBoxItem,
  type ListBoxItemProps,
  type ListBoxProps,
  ListBoxSection,
  type ListBoxSectionProps,
  Popover,
  type PopoverProps
} from "react-aria-components/ComboBox"
import { composeRenderProps } from "react-aria-components/composeRenderProps"
import { Group } from "react-aria-components/Group"
import { Header } from "react-aria-components/Header"
import { Separator, type SeparatorProps } from "react-aria-components/Separator"
import { TagGroup, TagList, type TagListProps, type TagProps } from "react-aria-components/TagGroup"
import { IconPlaceholder } from "@/components/icon-placeholder"
import { Tag } from "@/components/ui/tag"
import { cn } from "@/lib/utils"
import { fuzzy } from "./autocomplete"
import { Button } from "./button"
import { fieldVariants } from "./field"
import { InputGroup, InputGroupAddon, InputGroupButton, InputGroupInput } from "./input"

const Combobox = <T extends object, M extends "single" | "multiple" = "single">({
  className,
  orientation = "vertical",
  ...props
}: ComboBoxProps<T, M> & VariantProps<typeof fieldVariants>) => (
  <ComboBox
    className={composeRenderProps(className, (className) => cn(fieldVariants({ orientation }), className))}
    data-orientation={orientation}
    defaultFilter={fuzzy}
    menuTrigger="focus"
    {...props}
  />
)

const ComboboxClear = ({ className, ...props }: ComponentProps<typeof InputGroupButton>) => {
  const state = use(ComboBoxStateContext)
  if (state?.inputValue === "") {
    return null
  }

  return (
    <InputGroupButton
      aria-label="Clear"
      className={cn("cn-combobox-clear", className)}
      data-slot="combobox-clear"
      onPress={() => {
        state?.setValue(null)
      }}
      size="icon-xs"
      slot={null}
      variant="ghost"
      {...props}
    >
      <IconPlaceholder
        className="cn-combobox-clear-icon pointer-events-none"
        hugeicons="Cancel01Icon"
        lucide="XIcon"
        phosphor="XIcon"
        remixicon="RiCloseLine"
        tabler="IconX"
      />
    </InputGroupButton>
  )
}

const ComboboxInput = ({
  className,
  children,
  disabled = false,
  showTrigger = true,
  showClear = false,
  ...props
}: ComponentProps<"input"> & {
  showTrigger?: boolean
  showClear?: boolean
}) => (
  <InputGroup className={cn("cn-combobox-input w-auto", className)}>
    <InputGroupInput disabled={disabled} {...props} />
    <InputGroupAddon align="inline-end">
      {showTrigger && (
        <InputGroupButton
          className="cn-combobox-trigger group-has-data-[slot=combobox-clear]/input-group:hidden data-pressed:bg-transparent"
          data-slot="combobox-trigger"
          isDisabled={disabled}
          size="icon-xs"
          variant="ghost"
        >
          <IconPlaceholder
            className="cn-combobox-trigger-icon pointer-events-none"
            hugeicons="ArrowDown01Icon"
            lucide="ChevronDownIcon"
            phosphor="CaretDownIcon"
            remixicon="RiArrowDownSLine"
            tabler="IconChevronDown"
          />
        </InputGroupButton>
      )}
      {showClear && <ComboboxClear isDisabled={disabled} />}
    </InputGroupAddon>
    {children}
  </InputGroup>
)

const ComboboxChips = <T extends object>(props: TagListProps<T> & { isDisabled?: boolean }) => {
  const state = use(ComboBoxStateContext)
  return (
    <Group className="cn-combobox-chips" data-slot="combobox-chips" slot="control">
      <ComboBoxValue<T> className="contents">
        {({ selectedItems, state }) => (
          <TagGroup
            className={cn("contents", props.className)}
            data-slot="combobox-chip-list"
            onRemove={(keys) => {
              if (Array.isArray(state.value)) {
                state.setValue(state.value.filter((k) => !keys.has(k)))
              }
            }}
          >
            <TagList className="contents" items={selectedItems.filter((item) => item != null)} {...props} />
          </TagGroup>
        )}
      </ComboBoxValue>
      <Input
        className="cn-combobox-chip-input min-w-16 flex-1 outline-none"
        data-slot="combobox-chip-input"
        onKeyDown={(e) => {
          if (
            e.key === "Backspace" &&
            e.currentTarget.value === "" &&
            Array.isArray(state?.value) &&
            state.value.length > 0
          ) {
            e.preventDefault()
            state.setValue(state.value.slice(0, -1))
          }
        }}
      />
      <Button
        className="cn-combobox-clear data-pressed:bg-transparent"
        data-slot="combobox-trigger"
        isDisabled={props.isDisabled}
        size="icon-xs"
        variant="ghost"
      >
        <IconPlaceholder
          className="cn-combobox-trigger-icon pointer-events-none"
          hugeicons="ArrowDown01Icon"
          lucide="ChevronDownIcon"
          phosphor="CaretDownIcon"
          remixicon="RiArrowDownSLine"
          tabler="IconChevronDown"
        />
      </Button>
    </Group>
  )
}

const ComboboxChip = ({ className, ...props }: TagProps) => (
  <Tag
    className={cn(
      "cn-combobox-chip has-disabled:pointer-events-none has-disabled:cursor-not-allowed has-disabled:opacity-50",
      className
    )}
    data-slot="combobox-chip"
    {...props}
  />
)

const ComboboxContent = <T extends object>({
  className,
  offset = 6,
  placement = "bottom",
  ...props
}: ListBoxProps<T> & Pick<PopoverProps, "offset" | "placement">) => (
  <Popover
    className={cn(
      "cn-combobox-content-aria cn-menu-target relative isolate z-50 w-(--trigger-width) origin-(--trigger-anchor-point)",
      className
    )}
    offset={offset}
    placement={placement}
  >
    <ListBox
      className="cn-combobox-list flex max-h-[calc(var(--visual-viewport-height)-10rem)] flex-col overflow-y-auto overscroll-contain rounded-lg p-1 outline-hidden sm:max-h-[inherit]"
      data-slot="select-content"
      layout="stack"
      orientation="vertical"
      renderEmptyState={() => <div className="w-full p-4 text-center text-muted-foreground">No results found</div>}
      {...props}
    />
  </Popover>
)

const ComboboxItem = <T extends object>({ className, children, ...props }: ListBoxItemProps<T>) => {
  const textValue = typeof children === "string" ? children : props.textValue
  return (
    <ListBoxItem
      className={cn(
        "cn-combobox-item cn-combobox-item-aria relative flex w-full cursor-default select-none items-center outline-hidden data-disabled:pointer-events-none data-disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0",
        className
      )}
      data-slot="combobox-item"
      textValue={textValue}
      {...props}
    >
      {composeRenderProps(children, (children, { isSelected }) => (
        <>
          {children}
          <span className="cn-combobox-item-indicator">
            {isSelected ? (
              <IconPlaceholder
                className="cn-combobox-item-indicator-icon pointer-events-none"
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

const ComboboxGroup = <T extends object>({ title, ...props }: ListBoxSectionProps<T> & { title?: string }) => (
  <ListBoxSection className={cn("cn-combobox-group", props.className)} data-slot="combobox-group" {...props}>
    {title && (
      <Header className="cn-combobox-label" data-slot="combobox-label">
        {title}
      </Header>
    )}
    <Collection items={props.items}>{props.children}</Collection>
  </ListBoxSection>
)

const ComboboxEmpty = ({ className, ...props }: ComponentProps<"div">) => (
  <div className={cn("cn-combobox-empty", className)} data-slot="combobox-empty" {...props} />
)

const ComboboxSeparator = ({ className, ...props }: SeparatorProps) => (
  <Separator className={cn("cn-combobox-separator", className)} data-slot="combobox-separator" {...props} />
)

Combobox.Chip = ComboboxChip
Combobox.Chips = ComboboxChips
Combobox.Content = ComboboxContent
Combobox.Empty = ComboboxEmpty
Combobox.Group = ComboboxGroup
Combobox.Input = ComboboxInput
Combobox.Item = ComboboxItem
Combobox.Separator = ComboboxSeparator

export {
  Collection as ComboboxCollection,
  Combobox,
  ComboboxChip,
  ComboboxChips,
  ComboboxContent,
  ComboboxEmpty,
  ComboboxGroup,
  ComboboxInput,
  ComboboxItem,
  ComboboxSeparator
}
