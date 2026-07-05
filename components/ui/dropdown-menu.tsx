"use client"

import type { ComponentProps } from "react"
import { Button, type ButtonProps } from "react-aria-components/Button"
import { composeRenderProps } from "react-aria-components/composeRenderProps"
import {
  Collection,
  Header,
  Menu,
  MenuItem,
  type MenuItemProps,
  type MenuProps,
  MenuSection,
  type MenuSectionProps,
  MenuTrigger,
  type MenuTriggerProps,
  Popover,
  type PopoverProps,
  Separator,
  type SeparatorProps,
  SubmenuTrigger,
  type SubmenuTriggerProps
} from "react-aria-components/Menu"
import { IconPlaceholder } from "@/components/icon-placeholder"
import { cn } from "@/lib/utils"

const DropdownMenu = (props: MenuTriggerProps) => <MenuTrigger data-slot="dropdown-menu" {...props} />

const DropdownMenuTrigger = (props: ButtonProps) => <Button data-slot="dropdown-menu-trigger" {...props} />

interface DropdownMenuContentProps<T>
  extends MenuProps<T>,
    Pick<PopoverProps, "offset" | "crossOffset" | "placement" | "isOpen" | "onOpenChange" | "triggerRef"> {
  className?: string
}

const DropdownMenuContent = <T extends object>({
  className,
  placement,
  offset,
  crossOffset,
  isOpen,
  onOpenChange,
  triggerRef,
  ...props
}: DropdownMenuContentProps<T>) => {
  const popover = {
    offset,
    crossOffset,
    isOpen,
    onOpenChange,
    triggerRef
  }
  return (
    <Popover
      className="cn-dropdown-menu-content data-exiting:fade-out-0 data-entering:fade-in-0 data-exiting:zoom-out-95 data-entering:zoom-in-95 data-[placement=bottom]:slide-in-from-top-2 data-[placement=left]:slide-in-from-right-2 data-[placement=right]:slide-in-from-left-2 data-[placement=top]:slide-in-from-bottom-2 data-entering:animate-in data-exiting:animate-out"
      data-placement={placement}
      placement={placement}
      {...popover}
    >
      <Menu
        className={composeRenderProps(className, (className) =>
          cn("flex h-[inherit] max-h-[inherit] max-w-[inherit] flex-col outline-hidden", className)
        )}
        data-slot="dropdown-menu-content"
        {...props}
      />
    </Popover>
  )
}

const DropdownMenuGroup = <T extends object>({ title, ...props }: MenuSectionProps<T> & { title?: string }) => (
  <MenuSection className={cn("flex flex-col text-sm", props.className)} data-slot="dropdown-menu-group" {...props}>
    {title && (
      <Header className="pointer-events-none px-2 py-1 font-medium text-muted-foreground text-xs">{title}</Header>
    )}
    <Collection items={props.items}>{props.children}</Collection>
  </MenuSection>
)

const DropdownMenuItem = ({
  className,
  inset,
  variant = "default",
  ...props
}: MenuItemProps & {
  inset?: boolean
  variant?: "default" | "destructive"
}) => (
  <MenuItem
    className={composeRenderProps(className, (className) =>
      cn(
        "cn-dropdown-menu-item group/dropdown-menu-item relative flex cursor-default select-none items-center outline-hidden data-disabled:pointer-events-none data-disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0",
        className
      )
    )}
    data-inset={inset}
    data-slot="dropdown-menu-item"
    data-variant={variant}
    {...props}
  >
    {(values) => (
      <>
        {typeof props.children === "function" ? props.children(values) : props.children}
        {values.isSelected && (
          <span
            className={cn("cn-dropdown-menu-item-indicator pointer-events-none")}
            data-slot="dropdown-menu-checkbox-item-indicator"
          >
            <IconPlaceholder
              data-slot="icon"
              hugeicons="Tick02Icon"
              lucide="CheckIcon"
              phosphor="CheckIcon"
              remixicon="RiCheckLine"
              tabler="IconCheck"
            />
          </span>
        )}

        {values.hasSubmenu && (
          <IconPlaceholder
            className="ml-auto"
            data-slot="icon"
            hugeicons="ArrowRight01Icon"
            lucide="ChevronRightIcon"
            phosphor="CaretRightIcon"
            remixicon="RiArrowRightSLine"
            tabler="IconChevronRight"
          />
        )}
      </>
    )}
  </MenuItem>
)

const DropdownMenuLabel = ({
  className,
  inset,
  ...props
}: ComponentProps<typeof Header> & {
  inset?: boolean
}) => {
  return (
    <Header
      className={cn("cn-dropdown-menu-label", className)}
      data-inset={inset}
      data-slot="dropdown-menu-label"
      {...props}
    />
  )
}

const DropdownMenuSeparator = ({ className, ...props }: SeparatorProps) => (
  <Separator className={cn("cn-dropdown-menu-separator", className)} data-slot="dropdown-menu-separator" {...props} />
)

function DropdownMenuShortcut({ className, ...props }: ComponentProps<"span">) {
  return <span className={cn("cn-dropdown-menu-shortcut", className)} data-slot="dropdown-menu-shortcut" {...props} />
}

const DropdownMenuSub = (props: SubmenuTriggerProps) => <SubmenuTrigger data-slot="dropdown-menu-sub" {...props} />

const DropdownMenuSubTrigger = DropdownMenuItem

const DropdownMenuSubContent = (props: ComponentProps<typeof DropdownMenuContent>) => (
  <DropdownMenuContent crossOffset={props.crossOffset ?? -2} offset={props.offset ?? -4} {...props} />
)

DropdownMenu.Trigger = DropdownMenuTrigger
DropdownMenu.Content = DropdownMenuContent
DropdownMenu.Group = DropdownMenuGroup
DropdownMenu.Label = DropdownMenuLabel
DropdownMenu.Item = DropdownMenuItem
DropdownMenu.Separator = DropdownMenuSeparator
DropdownMenu.Shortcut = DropdownMenuShortcut
DropdownMenu.Sub = DropdownMenuSub
DropdownMenu.SubTrigger = DropdownMenuSubTrigger
DropdownMenu.SubContent = DropdownMenuSubContent

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
  DropdownMenuSubTrigger,
  DropdownMenuTrigger
}
