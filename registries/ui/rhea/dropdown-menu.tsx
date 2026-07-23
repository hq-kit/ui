"use client"

import type { ComponentProps, ReactNode } from "react"
import { composeRenderProps } from "react-aria-components/composeRenderProps"
import {
  Header,
  Menu,
  MenuItem,
  type MenuItemProps,
  MenuSection,
  type MenuSectionProps,
  MenuTrigger,
  Popover,
  type Selection,
  SubmenuTrigger
} from "react-aria-components/Menu"
import { Separator } from "react-aria-components/Separator"
import { tv } from "tailwind-variants"
import { IconPlaceholder } from "@/components/icon-placeholder"
import { cn } from "@/lib/utils"

const DropdownMenu = ({ ...props }: ComponentProps<typeof MenuTrigger>) => (
  <MenuTrigger data-slot="dropdown-menu-trigger" {...props} />
)

const DropdownMenuContent = ({
  "data-slot": dataSlot = "dropdown-menu-content",
  placement = "bottom start",
  offset = 4,
  crossOffset = 0,
  className,
  children,
  ...props
}: Omit<ComponentProps<typeof Menu<object>>, "children" | "className"> &
  Pick<ComponentProps<typeof Popover>, "placement" | "offset" | "crossOffset"> & {
    "data-slot"?: string
    className?: string
    children?: ReactNode
  }) => (
  <Popover
    className={cn(
      "data-entering:animate-in data-exiting:animate-out data-exiting:fade-out-0 data-entering:fade-in-0 data-exiting:zoom-out-95 data-entering:zoom-in-95 data-[placement=bottom]:slide-in-from-top-2 data-[placement=left]:slide-in-from-right-2 data-[placement=right]:slide-in-from-left-2 data-[placement=top]:slide-in-from-bottom-2 ring-foreground/5 dark:ring-foreground/10 bg-popover text-popover-foreground min-w-32 rounded-2xl p-1 shadow-lg ring-1 duration-100 z-50 w-(--trigger-width) origin-(--trigger-anchor-point) overflow-y-auto outline-none data-exiting:overflow-hidden",
      className
    )}
    crossOffset={crossOffset}
    data-slot={dataSlot}
    offset={offset}
    placement={placement}
  >
    <Menu className="outline-hidden" {...props}>
      {children}
    </Menu>
  </Popover>
)

const DropdownMenuGroup = ({
  ...props
}: Omit<MenuSectionProps<object>, "children"> & {
  children?: ReactNode
}) => <MenuSection data-slot="dropdown-menu-group" {...props} />

const DropdownMenuLabel = ({
  className,
  inset,
  ...props
}: ComponentProps<typeof Header> & {
  inset?: boolean
}) => (
  <Header
    className={cn("text-muted-foreground px-2 py-1 text-xs data-inset:pl-7", className)}
    data-inset={inset}
    data-slot="dropdown-menu-label"
    {...props}
  />
)

const dropdownMenuItemVariants = tv({
  base: "group/dropdown-menu-item relative flex cursor-default select-none items-center whitespace-nowrap outline-hidden data-disabled:pointer-events-none data-disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0",
  variants: {
    selectionMode: {
      none: "focus:bg-accent focus:text-accent-foreground data-[variant=destructive]:text-destructive data-[variant=destructive]:focus:bg-destructive/10 dark:data-[variant=destructive]:focus:bg-destructive/20 data-[variant=destructive]:focus:text-destructive data-[variant=destructive]:*:[svg]:text-destructive not-data-[variant=destructive]:focus:**:text-accent-foreground gap-2 min-h-7 rounded-xl px-2 py-1.5 text-sm data-inset:pl-7 [&_svg:not([class*='size-'])]:size-4",
      single: "focus:bg-accent focus:text-accent-foreground focus:**:text-accent-foreground gap-2 min-h-7 rounded-xl py-1.5 pr-8 pl-2 text-sm data-inset:pl-7 [&_svg:not([class*='size-'])]:size-4",
      multiple: "focus:bg-accent focus:text-accent-foreground focus:**:text-accent-foreground gap-2 min-h-7 rounded-xl py-1.5 pr-8 pl-2 text-sm data-inset:pl-7 [&_svg:not([class*='size-'])]:size-4"
    }
  }
})

const DropdownMenuItem = ({
  className,
  inset,
  variant = "default",
  children,
  ...props
}: MenuItemProps & {
  inset?: boolean
  variant?: "default" | "destructive"
}) => (
  <MenuItem
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
  </MenuItem>
)

const DropdownMenuSub = ({ ...props }: ComponentProps<typeof SubmenuTrigger>) => (
  <SubmenuTrigger data-slot="dropdown-menu-sub" {...props} />
)

const DropdownMenuSubTrigger = ({
  className,
  inset,
  children,
  ...props
}: MenuItemProps & {
  inset?: boolean
}) => (
  <MenuItem
    className={cn(
      "focus:bg-accent focus:text-accent-foreground data-open:bg-accent data-open:text-accent-foreground not-data-[variant=destructive]:focus:**:text-accent-foreground gap-2 min-h-7 rounded-xl px-2 py-1.5 text-sm data-inset:pl-7 [&_svg:not([class*='size-'])]:size-4 flex cursor-default select-none items-center outline-hidden [&_svg]:pointer-events-none [&_svg]:shrink-0",
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
  </MenuItem>
)

const DropdownMenuSubContent = ({
  placement = "end top",
  crossOffset = -3,
  offset = 0,
  className,
  ...props
}: ComponentProps<typeof DropdownMenuContent>) => (
  <DropdownMenuContent
    className={cn("ring-foreground/5 dark:ring-foreground/10 bg-popover text-popover-foreground min-w-[96px] rounded-2xl p-1 shadow-lg ring-1 duration-100 w-auto", className)}
    crossOffset={crossOffset}
    data-slot="dropdown-menu-sub-content"
    offset={offset}
    placement={placement}
    {...props}
  />
)

const DropdownMenuSeparator = ({ className, ...props }: ComponentProps<typeof Separator>) => (
  <Separator className={cn("bg-border/50 -mx-1 my-1 h-px", className)} data-slot="dropdown-menu-separator" {...props} />
)

const DropdownMenuShortcut = ({ className, ...props }: ComponentProps<"span">) => (
  <span className={cn("text-muted-foreground group-focus/dropdown-menu-item:text-accent-foreground ml-auto text-xs tracking-widest", className)} data-slot="dropdown-menu-shortcut" {...props} />
)

DropdownMenu.Group = DropdownMenuGroup
DropdownMenu.Item = DropdownMenuItem
DropdownMenu.Label = DropdownMenuLabel
DropdownMenu.Separator = DropdownMenuSeparator
DropdownMenu.Shortcut = DropdownMenuShortcut
DropdownMenu.Sub = DropdownMenuSub
DropdownMenu.SubContent = DropdownMenuSubContent
DropdownMenu.SubTrigger = DropdownMenuSubTrigger
DropdownMenu.Content = DropdownMenuContent

export type { Selection }
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
