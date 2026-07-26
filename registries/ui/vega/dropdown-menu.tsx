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
      "data-exiting:fade-out-0 data-entering:fade-in-0 data-exiting:zoom-out-95 data-entering:zoom-in-95 data-[placement=bottom]:slide-in-from-top-2 data-[placement=left]:slide-in-from-right-2 data-[placement=right]:slide-in-from-left-2 data-[placement=top]:slide-in-from-bottom-2 z-50 w-(--trigger-width) min-w-32 origin-(--trigger-anchor-point) overflow-y-auto rounded-md bg-popover p-1 text-popover-foreground shadow-md outline-none ring-1 ring-foreground/10 duration-100 data-entering:animate-in data-exiting:animate-out data-exiting:overflow-hidden",
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
    className={cn("px-2 py-1.5 font-medium text-muted-foreground text-xs data-inset:pl-8", className)}
    data-inset={inset}
    data-slot="dropdown-menu-label"
    {...props}
  />
)

const dropdownMenuItemVariants = tv({
  base: "group/dropdown-menu-item relative flex cursor-default select-none items-center whitespace-nowrap outline-hidden data-disabled:pointer-events-none data-disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0",
  variants: {
    selectionMode: {
      none: "gap-2 rounded-sm px-2 py-1.5 text-sm focus:bg-accent focus:text-accent-foreground not-data-[variant=destructive]:focus:**:text-accent-foreground data-inset:pl-8 data-[variant=destructive]:text-destructive data-[variant=destructive]:focus:bg-destructive/10 data-[variant=destructive]:focus:text-destructive dark:data-[variant=destructive]:focus:bg-destructive/20 [&_svg:not([class*='size-'])]:size-4 data-[variant=destructive]:*:[svg]:text-destructive",
      single:
        "gap-2 rounded-sm py-1.5 pr-8 pl-2 text-sm focus:bg-accent focus:text-accent-foreground focus:**:text-accent-foreground data-inset:pl-8 [&_svg:not([class*='size-'])]:size-4",
      multiple:
        "gap-2 rounded-sm py-1.5 pr-8 pl-2 text-sm focus:bg-accent focus:text-accent-foreground focus:**:text-accent-foreground data-inset:pl-8 [&_svg:not([class*='size-'])]:size-4"
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
            className="pointer-events-none absolute right-2 flex items-center justify-center"
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
      "flex cursor-default select-none items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-hidden focus:bg-accent focus:text-accent-foreground not-data-[variant=destructive]:focus:**:text-accent-foreground data-open:bg-accent data-inset:pl-8 data-open:text-accent-foreground [&_svg:not([class*='size-'])]:size-4 [&_svg]:pointer-events-none [&_svg]:shrink-0",
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
    className={cn(
      "w-auto min-w-[96px] rounded-md bg-popover p-1 text-popover-foreground shadow-lg ring-1 ring-foreground/10 duration-100",
      className
    )}
    crossOffset={crossOffset}
    data-slot="dropdown-menu-sub-content"
    offset={offset}
    placement={placement}
    {...props}
  />
)

const DropdownMenuSeparator = ({ className, ...props }: ComponentProps<typeof Separator>) => (
  <Separator className={cn("-mx-1 my-1 h-px bg-border", className)} data-slot="dropdown-menu-separator" {...props} />
)

const DropdownMenuShortcut = ({ className, ...props }: ComponentProps<"span">) => (
  <span
    className={cn(
      "ml-auto text-muted-foreground text-xs tracking-widest group-focus/dropdown-menu-item:text-accent-foreground",
      className
    )}
    data-slot="dropdown-menu-shortcut"
    {...props}
  />
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
