"use client"

import type { VariantProps } from "tailwind-variants"
import { type ComponentProps, type ReactNode, use, useRef } from "react"
import {
  Button as ButtonPrimitive,
  type ButtonProps,
  Collection,
  ComboBox as ComboBoxPrimitive,
  ComboBoxStateContext,
  ComboBoxValue as ComboBoxValuePrimitive,
  type ComboBoxValueProps,
  composeRenderProps,
  Group,
  type GroupProps,
  Header as HeaderPrimitive,
  Input as InputPrimitive,
  type InputProps,
  ListBoxItem as ListBoxItemPrimitive,
  type ListBoxItemProps,
  ListBox as ListBoxPrimitive,
  type ListBoxProps,
  ListBoxSection as ListBoxSectionPrimitive,
  type ListBoxSectionProps,
  Separator as SeparatorPrimitive,
  type SeparatorProps,
  TagGroup as TagGroupPrimitive,
  TagList as TagListPrimitive,
  type TagListProps,
  Tag as TagPrimitive,
  type TagProps
} from "react-aria-components"
import { type ComboBoxProps, Popover, type PopoverProps } from "react-aria-components/ComboBox"
import { IconPlaceholder } from "@/components/icon-placeholder"
import { fuzzy } from "./autocomplete"
import { fieldVariants } from "./field"
import { cn } from "@/lib/utils"
import { Button } from "./button"
import { InputGroup, InputGroupAddon, InputGroupButton, InputGroupInput } from "./input"

function Combobox<T extends object>(props: ComboBoxProps<T> & VariantProps<typeof fieldVariants>) {
  return (
    <ComboBoxPrimitive
      className={composeRenderProps(props.className, (className) =>
        cn(fieldVariants({ orientation: props.orientation }), className)
      )}
      data-orientation={props.orientation}
      defaultFilter={fuzzy}
      menuTrigger="focus"
      {...props}
    />
  )
}

function ComboboxValue<T>({ ...props }: ComboBoxValueProps<T>) {
  return <ComboBoxValuePrimitive data-slot="combobox-value" {...props} />
}

function ComboboxTrigger({
  className,
  children,
  ...props
}: Omit<ButtonProps, "children"> & {
  children?: ReactNode
}) {
  return (
    <ButtonPrimitive className={cn("cn-combobox-trigger", className)} data-slot="combobox-trigger" {...props}>
      {children}
      <IconPlaceholder
        className="cn-combobox-trigger-icon pointer-events-none"
        hugeicons="ArrowDown01Icon"
        lucide="ChevronDownIcon"
        phosphor="CaretDownIcon"
        remixicon="RiArrowDownSLine"
        tabler="IconChevronDown"
      />
    </ButtonPrimitive>
  )
}

function ComboboxClear({ className, ...props }: ComponentProps<typeof InputGroupButton>) {
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

function ComboboxInput({
  className,
  children,
  disabled = false,
  showTrigger = true,
  showClear = false,
  ...props
}: ComponentProps<"input"> & {
  showTrigger?: boolean
  showClear?: boolean
}) {
  return (
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
}

const ComboboxContent = <T extends object>({
  className,
  offset = 6,
  placement = "bottom",
  ...props
}: ListBoxProps<T> & Pick<PopoverProps, "offset" | "placement">) => (
  <Popover
    className={cn(
      "cn-combobox-content cn-combobox-content-logical group/combobox-content relative min-w-(--trigger-width)",
      className
    )}
    offset={offset}
    placement={placement}
  >
    <ListBoxPrimitive
      className="cn-combobox-list flex max-h-[calc(var(--visual-viewport-height)-10rem)] flex-col overflow-y-auto overscroll-contain rounded-lg p-1 outline-hidden sm:max-h-[inherit]"
      data-slot="select-content"
      layout="stack"
      orientation="vertical"
      renderEmptyState={() => <div className="w-full p-4 text-center text-muted-foreground">No results found</div>}
      {...props}
    />
  </Popover>
)

function ComboboxItem<T extends object>({ className, children, ...props }: ListBoxItemProps<T>) {
  return (
    <ListBoxItemPrimitive
      className={cn(
        "cn-combobox-item cn-combobox-item-aria relative flex w-full cursor-default select-none items-center outline-hidden data-disabled:pointer-events-none data-disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0",
        className
      )}
      data-slot="combobox-item"
      textValue={typeof children === "string" ? children : undefined}
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
    </ListBoxItemPrimitive>
  )
}

const ComboboxGroup = <T extends object>({ title, ...props }: ListBoxSectionProps<T> & { title?: string }) => (
  <ListBoxSectionPrimitive className={cn("cn-combobox-group", props.className)} data-slot="combobox-group" {...props}>
    {title && (
      <HeaderPrimitive className="cn-combobox-label" data-slot="combobox-label">
        {title}
      </HeaderPrimitive>
    )}
    <Collection items={props.items}>{props.children}</Collection>
  </ListBoxSectionPrimitive>
)

function ComboboxEmpty({ className, ...props }: ComponentProps<"div">) {
  return <div className={cn("cn-combobox-empty", className)} data-slot="combobox-empty" {...props} />
}

function ComboboxSeparator({ className, ...props }: SeparatorProps) {
  return (
    <SeparatorPrimitive className={cn("cn-combobox-separator", className)} data-slot="combobox-separator" {...props} />
  )
}

function ComboboxChips({ children, className, ...props }: GroupProps) {
  return (
    <Group className={cn("cn-combobox-chips", className)} data-slot="combobox-chips" {...props}>
      {children}
    </Group>
  )
}

function ComboboxChipList<T extends object>({
  className,
  ...props
}: Omit<TagListProps<T>, "className" | "items"> & {
  className?: string
}) {
  return (
    <ComboBoxValuePrimitive<T> className="contents">
      {({ selectedItems, state }) => (
        <TagGroupPrimitive
          className={cn("contents", className)}
          data-slot="combobox-chip-list"
          onRemove={(keys) => {
            if (Array.isArray(state.value)) {
              state.setValue(state.value.filter((k) => !keys.has(k)))
            }
          }}
        >
          <TagListPrimitive className="contents" items={selectedItems.filter((item) => item != null)} {...props} />
        </TagGroupPrimitive>
      )}
    </ComboBoxValuePrimitive>
  )
}

function ComboboxChip({
  className,
  children,
  showRemove = true,
  ...props
}: Omit<TagProps, "children"> & {
  showRemove?: boolean
  children?: ReactNode
}) {
  return (
    <TagPrimitive
      className={cn(
        "cn-combobox-chip has-disabled:pointer-events-none has-disabled:cursor-not-allowed has-disabled:opacity-50",
        className
      )}
      data-slot="combobox-chip"
      {...props}
    >
      {children}
      {showRemove && (
        <Button
          className="cn-combobox-chip-remove"
          data-slot="combobox-chip-remove"
          size="icon-xs"
          slot="remove"
          variant="ghost"
        >
          <IconPlaceholder
            className="cn-combobox-chip-indicator-icon pointer-events-none"
            hugeicons="Cancel01Icon"
            lucide="XIcon"
            phosphor="XIcon"
            remixicon="RiCloseLine"
            tabler="IconX"
          />
        </Button>
      )}
    </TagPrimitive>
  )
}

function ComboboxChipsInput({ className, ...props }: InputProps) {
  const state = use(ComboBoxStateContext)
  return (
    <InputPrimitive
      className={cn("cn-combobox-chip-input min-w-16 flex-1 outline-none", className)}
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
      {...props}
    />
  )
}

function useComboboxAnchor() {
  return useRef<HTMLDivElement | null>(null)
}

Combobox.Chip = ComboboxChip
Combobox.ChipList = ComboboxChipList
Combobox.Chips = ComboboxChips
Combobox.ChipsInput = ComboboxChipsInput
Combobox.Content = ComboboxContent
Combobox.Empty = ComboboxEmpty
Combobox.Group = ComboboxGroup
Combobox.Input = ComboboxInput
Combobox.Item = ComboboxItem
Combobox.Separator = ComboboxSeparator
Combobox.Trigger = ComboboxTrigger
Combobox.Value = ComboboxValue

export {
  Collection as ComboboxCollection,
  Combobox,
  ComboboxChip,
  ComboboxChipList,
  ComboboxChips,
  ComboboxChipsInput,
  ComboboxContent,
  ComboboxEmpty,
  ComboboxGroup,
  ComboboxInput,
  ComboboxItem,
  ComboboxSeparator,
  ComboboxTrigger,
  ComboboxValue,
  useComboboxAnchor
}
