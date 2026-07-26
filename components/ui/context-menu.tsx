"use client"

import { type ComponentProps, type ReactNode, useRef, useState } from "react"
import {
  composeRenderProps,
  Header,
  Menu,
  MenuItem,
  type MenuItemProps,
  MenuSection,
  type MenuSectionProps,
  MenuTrigger,
  type MenuTriggerProps,
  Popover,
  PopoverContext,
  Separator,
  SubmenuTrigger
} from "react-aria-components"
import { createPortal } from "react-dom"
import { tv } from "tailwind-variants"
import { IconPlaceholder } from "@/components/icon-placeholder"
import { cn } from "@/lib/utils"

const ContextMenuContent = ({
  "data-slot": dataSlot = "context-menu-content",
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
      "cn-context-menu-content-aria cn-menu-target cn-menu-translucent cn-menu-translucent-aria z-50 w-(--trigger-width) origin-(--trigger-anchor-point) overflow-y-auto overflow-x-hidden outline-none data-exiting:overflow-hidden",
      className
    )}
    crossOffset={crossOffset}
    data-slot={dataSlot}
    offset={offset}
    placement={placement}
  >
    <Menu className="max-h-[inherit] overflow-y-auto overflow-x-hidden outline-hidden" {...props}>
      {children}
    </Menu>
  </Popover>
)

const ContextMenu = ({
  children,
  className,
  onOpenChange,
  ...props
}: Omit<MenuTriggerProps, "trigger" | "isOpen" | "defaultOpen"> & {
  className?: string
}) => {
  const [position, setPosition] = useState<{
    x: number
    y: number
  } | null>(null)
  const positionRef = useRef<HTMLDivElement>(null)

  return (
    <MenuTrigger
      data-slot="context-menu"
      {...props}
      isOpen={!!position}
      onOpenChange={(isOpen) => {
        if (!isOpen) {
          setPosition(null)
          onOpenChange?.(false)
        }
      }}
    >
      {position &&
        createPortal(
          // Position the popover at the pointer.
          <div
            data-slot="context-menu-anchor"
            ref={positionRef}
            style={{
              position: "fixed",
              top: position.y,
              left: position.x
            }}
          />,
          document.body
        )}
      {/** biome-ignore lint/a11y/noStaticElementInteractions: false-positive */}
      <div
        className={cn("cn-context-menu-trigger contents select-none", className)}
        data-slot="context-menu-trigger"
        onContextMenu={(e) => {
          e.preventDefault()
          const wasOpen = position !== null
          setPosition({
            y: e.clientY,
            x: e.clientX
          })
          if (!wasOpen) {
            onOpenChange?.(true)
          }
        }}
      >
        <PopoverContext.Consumer>
          {(ctx) => (
            <PopoverContext.Provider
              value={{
                ...ctx,
                ...position,
                triggerRef: positionRef,
                style: undefined
              }}
            >
              {children}
            </PopoverContext.Provider>
          )}
        </PopoverContext.Consumer>
      </div>
    </MenuTrigger>
  )
}

const ContextMenuGroup = ({
  ...props
}: Omit<MenuSectionProps<object>, "children"> & {
  children?: ReactNode
}) => <MenuSection data-slot="context-menu-group" {...props} />

const ContextMenuLabel = ({
  className,
  inset,
  ...props
}: ComponentProps<typeof Header> & {
  inset?: boolean
}) => (
  <Header
    className={cn("cn-context-menu-label", className)}
    data-inset={inset}
    data-slot="context-menu-label"
    {...props}
  />
)

const contextMenuItemVariants = tv({
  base: "group/context-menu-item relative flex cursor-default select-none items-center outline-hidden data-disabled:pointer-events-none data-disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0",
  variants: {
    selectionMode: {
      none: "cn-context-menu-item",
      single: "cn-context-menu-radio-item",
      multiple: "cn-context-menu-checkbox-item"
    }
  }
})

const ContextMenuItem = ({
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
      cn(contextMenuItemVariants({ selectionMode }), className)
    )}
    data-inset={inset}
    data-slot="context-menu-item"
    data-variant={variant}
    textValue={typeof children === "string" ? children : props.textValue}
    {...props}
  >
    {composeRenderProps(children, (children, { isSelected, selectionMode }) => (
      <>
        {selectionMode !== "none" ? (
          <span
            className="cn-context-menu-item-indicator pointer-events-none"
            data-slot={
              selectionMode === "single" ? "context-menu-radio-item-indicator" : "context-menu-checkbox-item-indicator"
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

const ContextMenuSub = ({ ...props }: ComponentProps<typeof SubmenuTrigger>) => (
  <SubmenuTrigger data-slot="context-menu-sub" {...props} />
)

const ContextMenuSubTrigger = ({
  className,
  inset,
  children,
  ...props
}: MenuItemProps & {
  inset?: boolean
}) => (
  <MenuItem
    className={cn(
      "cn-context-menu-sub-trigger flex cursor-default select-none items-center outline-hidden [&_svg]:pointer-events-none [&_svg]:shrink-0",
      className
    )}
    data-inset={inset}
    data-slot="context-menu-sub-trigger"
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

const ContextMenuSubContent = ({
  placement = "end top",
  crossOffset = -3,
  offset = 0,
  className,
  ...props
}: ComponentProps<typeof ContextMenuContent>) => (
  <ContextMenuContent
    className={cn("cn-context-menu-sub-content-aria cn-menu-target cn-menu-translucent w-auto", className)}
    crossOffset={crossOffset}
    data-slot="context-menu-sub-content"
    offset={offset}
    placement={placement}
    {...props}
  />
)

const ContextMenuSeparator = ({ className, ...props }: ComponentProps<typeof Separator>) => (
  <Separator className={cn("cn-context-menu-separator", className)} data-slot="context-menu-separator" {...props} />
)

const ContextMenuShortcut = ({ className, ...props }: ComponentProps<"span">) => (
  <span className={cn("cn-context-menu-shortcut", className)} data-slot="context-menu-shortcut" {...props} />
)

ContextMenu.Group = ContextMenuGroup
ContextMenu.Item = ContextMenuItem
ContextMenu.Label = ContextMenuLabel
ContextMenu.Separator = ContextMenuSeparator
ContextMenu.Shortcut = ContextMenuShortcut
ContextMenu.Sub = ContextMenuSub
ContextMenu.SubContent = ContextMenuSubContent
ContextMenu.SubTrigger = ContextMenuSubTrigger
ContextMenu.Content = ContextMenuContent

export {
  ContextMenu,
  ContextMenuContent,
  ContextMenuGroup,
  ContextMenuItem,
  ContextMenuLabel,
  ContextMenuSeparator,
  ContextMenuShortcut,
  ContextMenuSub,
  ContextMenuSubContent,
  ContextMenuSubTrigger
}
