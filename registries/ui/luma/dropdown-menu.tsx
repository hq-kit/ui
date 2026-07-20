"use client"

import type { ComponentProps, ReactNode } from "react"
import {
  composeRenderProps,
  Header as HeaderPrimitive,
  MenuItem as MenuItemPrimitive,
  type MenuItemProps as MenuItemPrimitiveProps,
  Menu as MenuPrimitive,
  MenuSection as MenuSectionPrimitive,
  type MenuSectionProps as MenuSectionPrimitiveProps,
  MenuTrigger as MenuTriggerPrimitive,
  Popover as PopoverPrimitive,
  Separator as SeparatorPrimitive,
  SubmenuTrigger as SubmenuTriggerPrimitive
} from "react-aria-components"
import { tv } from "tailwind-variants"
import { IconPlaceholder } from "@/components/icon-placeholder"
import { cn } from "@/lib/utils"

function DropdownMenu({ ...props }: ComponentProps<typeof MenuTriggerPrimitive>) {
  return <MenuTriggerPrimitive data-slot="dropdown-menu-trigger" {...props} />
}

function DropdownMenuContent({
  "data-slot": dataSlot = "dropdown-menu-content",
  placement = "bottom start",
  offset = 4,
  crossOffset = 0,
  className,
  children,
  ...props
}: Omit<ComponentProps<typeof MenuPrimitive<object>>, "children" | "className"> &
  Pick<ComponentProps<typeof PopoverPrimitive>, "placement" | "offset" | "crossOffset"> & {
    "data-slot"?: string
    className?: string
    children?: ReactNode
  }) {
  return (
    <PopoverPrimitive
      className={cn(
        "data-entering:animate-in data-exiting:animate-out data-exiting:fade-out-0 data-entering:fade-in-0 data-exiting:zoom-out-95 data-entering:zoom-in-95 data-[placement=bottom]:slide-in-from-top-2 data-[placement=left]:slide-in-from-right-2 data-[placement=right]:slide-in-from-left-2 data-[placement=top]:slide-in-from-bottom-2 ring-foreground/5 dark:ring-foreground/10 bg-popover text-popover-foreground min-w-48 rounded-3xl p-1.5 shadow-lg ring-1 duration-100 z-50 w-(--trigger-width) origin-(--trigger-anchor-point) overflow-y-auto overflow-x-hidden outline-none data-exiting:overflow-hidden",
        className
      )}
      crossOffset={crossOffset}
      data-slot={dataSlot}
      offset={offset}
      placement={placement}
    >
      <MenuPrimitive className="max-h-[inherit] overflow-y-auto overflow-x-hidden outline-hidden" {...props}>
        {children}
      </MenuPrimitive>
    </PopoverPrimitive>
  )
}

function DropdownMenuGroup({
  ...props
}: Omit<MenuSectionPrimitiveProps<object>, "children"> & {
  children?: ReactNode
}) {
  return <MenuSectionPrimitive data-slot="dropdown-menu-group" {...props} />
}

function DropdownMenuLabel({
  className,
  inset,
  ...props
}: ComponentProps<typeof HeaderPrimitive> & {
  inset?: boolean
}) {
  return (
    <HeaderPrimitive
      className={cn("text-muted-foreground px-3 py-2.5 text-xs data-inset:pl-9.5", className)}
      data-inset={inset}
      data-slot="dropdown-menu-label"
      {...props}
    />
  )
}

const dropdownMenuItemVariants = tv({
  base: "group/dropdown-menu-item relative flex cursor-default select-none items-center outline-hidden data-disabled:pointer-events-none data-disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0",
  variants: {
    selectionMode: {
      none: "focus:bg-accent focus:text-accent-foreground data-[variant=destructive]:text-destructive data-[variant=destructive]:focus:bg-destructive/10 dark:data-[variant=destructive]:focus:bg-destructive/20 data-[variant=destructive]:focus:text-destructive data-[variant=destructive]:*:[svg]:text-destructive not-data-[variant=destructive]:focus:**:text-accent-foreground gap-2.5 rounded-2xl px-3 py-2 text-sm font-medium data-inset:pl-9.5 [&_svg:not([class*='size-'])]:size-4",
      single: "focus:bg-accent focus:text-accent-foreground focus:**:text-accent-foreground gap-2.5 rounded-2xl py-2 pr-8 pl-3 text-sm font-medium data-inset:pl-9.5 [&_svg:not([class*='size-'])]:size-4",
      multiple: "focus:bg-accent focus:text-accent-foreground focus:**:text-accent-foreground gap-2.5 rounded-2xl py-2 pr-8 pl-3 text-sm font-medium data-inset:pl-9.5 [&_svg:not([class*='size-'])]:size-4"
    }
  }
})

function DropdownMenuItem({
  className,
  inset,
  variant = "default",
  children,
  ...props
}: MenuItemPrimitiveProps<object> & {
  inset?: boolean
  variant?: "default" | "destructive"
}) {
  return (
    <MenuItemPrimitive
      className={composeRenderProps(className, (className, { selectionMode }) =>
        cn(dropdownMenuItemVariants({ selectionMode }), className)
      )}
      data-inset={inset}
      data-slot="dropdown-menu-item"
      data-variant={variant}
      textValue={typeof children === "string" ? children : props.textValue}
      {...props}
    >
      {composeRenderProps(children, (children, { isSelected, selectionMode }) => (
        <>
          {selectionMode !== "none" ? (
            <span
              className="absolute right-2 flex items-center justify-center pointer-events-none"
              data-slot={
                selectionMode === "single"
                  ? "dropdown-menu-radio-item-indicator"
                  : "dropdown-menu-checkbox-item-indicator"
              }
            >
              {isSelected ? (
                <IconPlaceholder
                  hugeicons="Tick02Icon"
                  lucide="CheckIcon"
                  phosphor="CheckIcon"
                  remixicon="RiCheckLine"
                  tabler="IconCheck"
                />
              ) : null}
            </span>
          ) : null}
          {children}
        </>
      ))}
    </MenuItemPrimitive>
  )
}

function DropdownMenuSub({ ...props }: ComponentProps<typeof SubmenuTriggerPrimitive>) {
  return <SubmenuTriggerPrimitive data-slot="dropdown-menu-sub" {...props} />
}

function DropdownMenuSubTrigger({
  className,
  inset,
  children,
  ...props
}: MenuItemPrimitiveProps<object> & {
  inset?: boolean
}) {
  return (
    <MenuItemPrimitive
      className={cn(
        "focus:bg-accent focus:text-accent-foreground data-open:bg-accent data-open:text-accent-foreground not-data-[variant=destructive]:focus:**:text-accent-foreground gap-2 rounded-2xl px-3 py-2 text-sm font-medium data-inset:pl-9.5 [&_svg:not([class*='size-'])]:size-4 flex cursor-default select-none items-center outline-hidden [&_svg]:pointer-events-none [&_svg]:shrink-0",
        className
      )}
      data-inset={inset}
      data-slot="dropdown-menu-sub-trigger"
      textValue={typeof children === "string" ? children : props.textValue}
      {...props}
    >
      {composeRenderProps(children, (children) => (
        <>
          {children}
          <IconPlaceholder
            className="ml-auto"
            hugeicons="ArrowRight01Icon"
            lucide="ChevronRightIcon"
            phosphor="CaretRightIcon"
            remixicon="RiArrowRightSLine"
            tabler="IconChevronRight"
          />
        </>
      ))}
    </MenuItemPrimitive>
  )
}

function DropdownMenuSubContent({
  placement = "end top",
  crossOffset = -3,
  offset = 0,
  className,
  ...props
}: ComponentProps<typeof DropdownMenuContent>) {
  return (
    <DropdownMenuContent
      className={cn("ring-foreground/5 dark:ring-foreground/10 bg-popover text-popover-foreground min-w-36 rounded-3xl p-1.5 shadow-lg ring-1 duration-100 w-auto", className)}
      crossOffset={crossOffset}
      data-slot="dropdown-menu-sub-content"
      offset={offset}
      placement={placement}
      {...props}
    />
  )
}

function DropdownMenuSeparator({ className, ...props }: ComponentProps<typeof SeparatorPrimitive>) {
  return (
    <SeparatorPrimitive
      className={cn("bg-border/50 -mx-1.5 my-1.5 h-px", className)}
      data-slot="dropdown-menu-separator"
      {...props}
    />
  )
}

function DropdownMenuShortcut({ className, ...props }: ComponentProps<"span">) {
  return <span className={cn("text-muted-foreground group-focus/dropdown-menu-item:text-accent-foreground ml-auto text-xs tracking-widest", className)} data-slot="dropdown-menu-shortcut" {...props} />
}

DropdownMenu.Group = DropdownMenuGroup
DropdownMenu.Item = DropdownMenuItem
DropdownMenu.Label = DropdownMenuLabel
DropdownMenu.Separator = DropdownMenuSeparator
DropdownMenu.Shortcut = DropdownMenuShortcut
DropdownMenu.Sub = DropdownMenuSub
DropdownMenu.SubContent = DropdownMenuSubContent
DropdownMenu.SubTrigger = DropdownMenuSubTrigger
DropdownMenu.Content = DropdownMenuContent

export {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger
}
