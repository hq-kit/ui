"use client"

import type { VariantProps } from "tailwind-variants"
import {
  Button,
  Collection,
  type ComboBoxProps,
  type InputProps,
  ListBox,
  ListBoxItem,
  type ListBoxItemProps,
  type ListBoxProps,
  ListBoxSection,
  type ListBoxSectionProps,
  Popover,
  type PopoverProps,
  ComboBox as RACCombobox
} from "react-aria-components/ComboBox"
import { composeRenderProps } from "react-aria-components/composeRenderProps"
import { Header } from "react-aria-components/Header"
import { Separator, type SeparatorProps } from "react-aria-components/Separator"
import { IconPlaceholder } from "@/components/icon-placeholder"
import { cn } from "@/lib/utils"
import { fuzzy } from "./autocomplete"
import { fieldVariants } from "./field"
import { Input } from "./input"

const ComboBox = <T extends object>({
  className,
  orientation,
  ...props
}: ComboBoxProps<T> & VariantProps<typeof fieldVariants>) => (
  <RACCombobox
    className={composeRenderProps(className, (className) => cn(fieldVariants({ orientation }), className))}
    data-orientation={orientation}
    defaultFilter={fuzzy}
    menuTrigger="focus"
    {...props}
  />
)

const ComboBoxInput = (props: InputProps) => (
  <span className="[&_svg:not([class*='size-'])]:size-4 relative isolate block [&_input]:pr-8" data-slot="control" slot="control">
    <Input {...props} placeholder={props?.placeholder} />
    <Button className="absolute top-0 right-0 grid h-full w-11 cursor-default place-content-center sm:w-9">
      <IconPlaceholder
        className="text-muted-foreground size-4 pointer-events-none"
        data-slot="chevron"
        hugeicons="ArrowDown01Icon"
        lucide="ChevronDownIcon"
        phosphor="CaretDownIcon"
        remixicon="RiArrowDownSLine"
        tabler="IconChevronDown"
      />
    </Button>
  </span>
)

const ComboBoxContent = <T extends object>({
  className,
  offset = 4,
  placement = "bottom",
  ...props
}: ListBoxProps<T> & Pick<PopoverProps, "offset" | "placement">) => (
  <Popover
    className={cn(
      "bg-popover text-popover-foreground data-open:animate-in data-closed:animate-out data-closed:fade-out-0 data-open:fade-in-0 data-closed:zoom-out-95 data-open:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 ring-foreground/10 *:data-[slot=input-group]:bg-input/30 *:data-[slot=input-group]:border-input/30 max-h-72 min-w-36 overflow-hidden rounded-none shadow-md ring-1 duration-100 *:data-[slot=input-group]:m-1 *:data-[slot=input-group]:mb-0 *:data-[slot=input-group]:h-8 *:data-[slot=input-group]:shadow-none data-[placement=start]:slide-in-from-right-2 data-[placement=end]:slide-in-from-left-2 group/combobox-content relative min-w-(--trigger-width)",
      className
    )}
    offset={offset}
    placement={placement}
  >
    <ListBox
      className="no-scrollbar max-h-[min(calc(--spacing(72)-(--spacing(9))),calc(var(--available-height)-(--spacing(9))))] scroll-py-1 overflow-y-auto data-empty:p-0 flex max-h-[calc(var(--visual-viewport-height)-10rem)] flex-col overflow-y-auto overscroll-contain rounded-lg p-1 outline-hidden sm:max-h-[inherit]"
      data-slot="select-content"
      layout="stack"
      orientation="vertical"
      renderEmptyState={() => <div className="w-full p-4 text-center text-muted-foreground">No results found</div>}
      {...props}
    />
  </Popover>
)

const ComboBoxGroup = <T extends object>({ title, ...props }: ListBoxSectionProps<T> & { title?: string }) => (
  <ListBoxSection className={cn("flex flex-col text-sm", props.className)} data-slot="select-group" {...props}>
    {title && (
      <Header className="pointer-events-none px-2 py-1 font-medium text-muted-foreground text-xs">{title}</Header>
    )}
    <Collection items={props.items}>{props.children}</Collection>
  </ListBoxSection>
)

const ComboBoxItem = ({ className, children, ...props }: ListBoxItemProps) => {
  const textValue = typeof children === "string" ? children : undefined
  return (
    <ListBoxItem
      className={cn(
        "data-focused:bg-accent data-focused:text-accent-foreground not-data-[variant=destructive]:data-focused:**:text-accent-foreground gap-2 rounded-none py-2 pr-8 pl-2 text-xs [&_svg:not([class*='size-'])]:size-4 relative flex w-full cursor-default select-none items-center outline-hidden data-disabled:pointer-events-none data-disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0",
        className
      )}
      data-slot="select-item"
      textValue={textValue}
      {...props}
    >
      {(values) => (
        <>
          {typeof children === "function" ? children(values) : children}
          {values.isSelected && (
            <span className="pointer-events-none absolute right-2 flex size-4 items-center justify-center">
              <IconPlaceholder
                className="pointer-events-none"
                data-slot="selection-indicator"
                hugeicons="Tick02Icon"
                lucide="CheckIcon"
                phosphor="CheckIcon"
                remixicon="RiCheckLine"
                tabler="IconCheck"
              />
            </span>
          )}
        </>
      )}
    </ListBoxItem>
  )
}

const ComboBoxSeparator = ({ className, ...props }: SeparatorProps) => (
  <Separator className={cn("bg-border -mx-1 h-px", className)} data-slot="select-separator" {...props} />
)

ComboBox.Input = ComboBoxInput
ComboBox.Content = ComboBoxContent
ComboBox.Group = ComboBoxGroup
ComboBox.Item = ComboBoxItem
ComboBox.Separator = ComboBoxSeparator

export { ComboBox, ComboBoxContent, ComboBoxGroup, ComboBoxInput, ComboBoxItem, ComboBoxSeparator }
