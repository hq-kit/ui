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
    <ButtonPrimitive className={cn("[&_svg:not([class*='size-'])]:size-4", className)} data-slot="combobox-trigger" {...props}>
      {children}
      <IconPlaceholder
        className="text-muted-foreground size-4 pointer-events-none"
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
      className={cn(className)}
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
        className="pointer-events-none"
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
    <InputGroup className={cn("w-auto", className)}>
      <InputGroupInput disabled={disabled} {...props} />
      <InputGroupAddon align="inline-end">
        {showTrigger && (
          <InputGroupButton
            className="[&_svg:not([class*='size-'])]:size-4 group-has-data-[slot=combobox-clear]/input-group:hidden data-pressed:bg-transparent"
            data-slot="combobox-trigger"
            isDisabled={disabled}
            size="icon-xs"
            variant="ghost"
          >
            <IconPlaceholder
              className="text-muted-foreground size-4 pointer-events-none"
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
      "bg-popover text-popover-foreground data-open:animate-in data-closed:animate-out data-closed:fade-out-0 data-open:fade-in-0 data-closed:zoom-out-95 data-open:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 ring-foreground/5 dark:ring-foreground/10 *:data-[slot=input-group]:bg-input/50 *:data-[slot=input-group]:border-input/30 max-h-72 overflow-hidden rounded-2xl shadow-lg ring-1 duration-100 *:data-[slot=input-group]:m-1 *:data-[slot=input-group]:mb-0 *:data-[slot=input-group]:h-8 *:data-[slot=input-group]:shadow-none data-[side=inline-start]:slide-in-from-right-2 data-[side=inline-end]:slide-in-from-left-2 group/combobox-content relative min-w-(--trigger-width)",
      className
    )}
    offset={offset}
    placement={placement}
  >
    <ListBoxPrimitive
      className="no-scrollbar max-h-[min(calc(--spacing(72)---spacing(9)),calc(var(--available-height)---spacing(9)))] scroll-py-1 overflow-y-auto p-1 data-empty:p-0 flex max-h-[calc(var(--visual-viewport-height)-10rem)] flex-col overflow-y-auto overscroll-contain rounded-lg p-1 outline-hidden sm:max-h-[inherit]"
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
        "data-highlighted:bg-accent data-highlighted:text-accent-foreground not-data-[variant=destructive]:data-highlighted:**:text-accent-foreground gap-2 min-h-7 rounded-xl py-1.5 pr-8 pl-2 text-sm [&_svg:not([class*='size-'])]:size-4 data-focused:bg-accent data-focused:text-accent-foreground not-data-[variant=destructive]:data-focused:**:text-accent-foreground relative flex w-full cursor-default select-none items-center outline-hidden data-disabled:pointer-events-none data-disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0",
        className
      )}
      data-slot="combobox-item"
      textValue={typeof children === "string" ? children : undefined}
      {...props}
    >
      {composeRenderProps(children, (children, { isSelected }) => (
        <>
          {children}
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
    </ListBoxItemPrimitive>
  )
}

const ComboboxGroup = <T extends object>({ title, ...props }: ListBoxSectionProps<T> & { title?: string }) => (
  <ListBoxSectionPrimitive className={cn(props.className)} data-slot="combobox-group" {...props}>
    {title && (
      <HeaderPrimitive className="text-muted-foreground px-2 py-1.5 text-xs" data-slot="combobox-label">
        {title}
      </HeaderPrimitive>
    )}
    <Collection items={props.items}>{props.children}</Collection>
  </ListBoxSectionPrimitive>
)

function ComboboxEmpty({ className, ...props }: ComponentProps<"div">) {
  return <div className={cn("text-muted-foreground hidden w-full justify-center py-2 text-center text-sm group-data-empty/combobox-content:flex", className)} data-slot="combobox-empty" {...props} />
}

function ComboboxSeparator({ className, ...props }: SeparatorProps) {
  return (
    <SeparatorPrimitive className={cn("bg-border -mx-1 my-1 h-px", className)} data-slot="combobox-separator" {...props} />
  )
}

function ComboboxChips({ children, className, ...props }: GroupProps) {
  return (
    <Group className={cn("bg-input/50 border-transparent focus-within:border-ring focus-within:ring-ring/30 has-aria-invalid:ring-destructive/20 dark:has-aria-invalid:ring-destructive/40 has-aria-invalid:border-destructive dark:has-aria-invalid:border-destructive/50 flex min-h-8 flex-wrap items-center gap-1 rounded-2xl border bg-clip-padding px-2.5 py-1 text-sm transition-[color,box-shadow] duration-200 focus-within:ring-3 has-aria-invalid:ring-3 has-data-[slot=combobox-chip]:px-1", className)} data-slot="combobox-chips" {...props}>
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
        "bg-input text-foreground flex h-[calc(--spacing(5.25))] w-fit items-center justify-center gap-1 rounded-2xl px-1.5 text-xs font-medium whitespace-nowrap has-data-[slot=combobox-chip-remove]:pr-0.5 dark:bg-input/60 has-disabled:pointer-events-none has-disabled:cursor-not-allowed has-disabled:opacity-50",
        className
      )}
      data-slot="combobox-chip"
      {...props}
    >
      {children}
      {showRemove && (
        <Button
          className="-ml-0.5 opacity-50 hover:opacity-100 size-4.5 aria-disabled:pointer-events-none"
          data-slot="combobox-chip-remove"
          size="icon-xs"
          slot="remove"
          variant="ghost"
        >
          <IconPlaceholder
            className="pointer-events-none"
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
      className={cn("min-w-16 flex-1 outline-none", className)}
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
