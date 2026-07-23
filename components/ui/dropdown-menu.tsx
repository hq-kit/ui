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
      "cn-dropdown-menu-content-aria cn-menu-target z-50 w-(--trigger-width) origin-(--trigger-anchor-point) overflow-y-auto outline-none data-exiting:overflow-hidden",
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
    className={cn("cn-dropdown-menu-label", className)}
    data-inset={inset}
    data-slot="dropdown-menu-label"
    {...props}
  />
)

const dropdownMenuItemVariants = tv({
  base: "group/dropdown-menu-item relative flex cursor-default select-none items-center whitespace-nowrap outline-hidden data-disabled:pointer-events-none data-disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0",
  variants: {
    selectionMode: {
      none: "cn-dropdown-menu-item",
      single: "cn-dropdown-menu-radio-item",
      multiple: "cn-dropdown-menu-checkbox-item"
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
            className="cn-dropdown-menu-item-indicator pointer-events-none"
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
      "cn-dropdown-menu-sub-trigger flex cursor-default select-none items-center outline-hidden [&_svg]:pointer-events-none [&_svg]:shrink-0",
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
          className="cn-rtl-flip ml-auto"
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
    className={cn("cn-dropdown-menu-sub-content-aria cn-menu-target w-auto", className)}
    crossOffset={crossOffset}
    data-slot="dropdown-menu-sub-content"
    offset={offset}
    placement={placement}
    {...props}
  />
)

const DropdownMenuSeparator = ({ className, ...props }: ComponentProps<typeof Separator>) => (
  <Separator className={cn("cn-dropdown-menu-separator", className)} data-slot="dropdown-menu-separator" {...props} />
)

const DropdownMenuShortcut = ({ className, ...props }: ComponentProps<"span">) => (
  <span className={cn("cn-dropdown-menu-shortcut", className)} data-slot="dropdown-menu-shortcut" {...props} />
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
