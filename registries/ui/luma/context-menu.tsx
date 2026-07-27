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
      "data-exiting:fade-out-0 data-entering:fade-in-0 data-exiting:zoom-out-95 data-entering:zoom-in-95 data-[placement=bottom]:slide-in-from-top-2 data-[placement=left]:slide-in-from-right-2 data-[placement=right]:slide-in-from-left-2 data-[placement=top]:slide-in-from-bottom-2 relative z-50 w-(--trigger-width) min-w-48 origin-(--trigger-anchor-point) animate-none! overflow-y-auto overflow-x-hidden rounded-3xl bg-popover/70 p-1.5 text-popover-foreground shadow-lg outline-none ring-1 ring-foreground/5 duration-100 before:pointer-events-none before:absolute before:inset-0 before:-z-1 before:rounded-[inherit] before:backdrop-blur-2xl before:backdrop-saturate-150 data-entering:animate-in data-exiting:animate-out data-exiting:overflow-hidden **:data-[slot$=-item]:data-focused:bg-foreground/10 **:data-[slot$=-item]:data-highlighted:bg-foreground/10 **:data-[slot$=-separator]:bg-foreground/5 **:data-[variant=destructive]:**:text-accent-foreground! **:data-[variant=destructive]:text-accent-foreground! **:data-[slot$=-trigger]:aria-expanded:bg-foreground/10! **:data-[slot$=-item]:focus:bg-foreground/10 **:data-[slot$=-trigger]:focus:bg-foreground/10 **:data-[variant=destructive]:focus:bg-foreground/10! dark:ring-foreground/10",
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
        className={cn("contents select-none", className)}
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
    className={cn("px-3 py-2.5 text-muted-foreground text-xs data-inset:pl-9.5", className)}
    data-inset={inset}
    data-slot="context-menu-label"
    {...props}
  />
)

const contextMenuItemVariants = tv({
  base: "group/context-menu-item relative flex cursor-default select-none items-center outline-hidden data-disabled:pointer-events-none data-disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0",
  variants: {
    selectionMode: {
      none: "gap-2.5 rounded-2xl px-3 py-2 font-medium text-sm focus:bg-accent focus:text-accent-foreground data-inset:pl-9.5 data-[variant=destructive]:text-destructive data-[variant=destructive]:focus:bg-destructive/10 data-[variant=destructive]:focus:text-destructive dark:data-[variant=destructive]:focus:bg-destructive/20 [&_svg:not([class*='size-'])]:size-4 focus:*:[svg]:text-accent-foreground data-[variant=destructive]:*:[svg]:text-destructive",
      single:
        "gap-2.5 rounded-2xl py-2 pr-8 pl-3 font-medium text-sm focus:bg-accent focus:text-accent-foreground data-inset:pl-9.5 [&_svg:not([class*='size-'])]:size-4",
      multiple:
        "gap-2.5 rounded-2xl py-2 pr-8 pl-3 font-medium text-sm focus:bg-accent focus:text-accent-foreground data-inset:pl-9.5 [&_svg:not([class*='size-'])]:size-4"
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
            className="pointer-events-none absolute right-2"
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
      "flex cursor-default select-none items-center rounded-2xl px-3 py-2 font-medium text-sm outline-hidden focus:bg-accent focus:text-accent-foreground data-open:bg-accent data-inset:pl-9.5 data-open:text-accent-foreground [&_svg:not([class*='size-'])]:size-4 [&_svg]:pointer-events-none [&_svg]:shrink-0",
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

const ContextMenuSubContent = ({
  placement = "end top",
  crossOffset = -3,
  offset = 0,
  className,
  ...props
}: ComponentProps<typeof ContextMenuContent>) => (
  <ContextMenuContent
    className={cn(
      "relative w-auto min-w-32 animate-none! rounded-3xl bg-popover/70 p-1.5 text-popover-foreground shadow-lg ring-1 ring-foreground/5 duration-100 before:pointer-events-none before:absolute before:inset-0 before:-z-1 before:rounded-[inherit] before:backdrop-blur-2xl before:backdrop-saturate-150 **:data-[slot$=-item]:data-highlighted:bg-foreground/10 **:data-[slot$=-separator]:bg-foreground/5 **:data-[variant=destructive]:**:text-accent-foreground! **:data-[variant=destructive]:text-accent-foreground! **:data-[slot$=-trigger]:aria-expanded:bg-foreground/10! **:data-[slot$=-item]:focus:bg-foreground/10 **:data-[slot$=-trigger]:focus:bg-foreground/10 **:data-[variant=destructive]:focus:bg-foreground/10! dark:ring-foreground/10",
      className
    )}
    crossOffset={crossOffset}
    data-slot="context-menu-sub-content"
    offset={offset}
    placement={placement}
    {...props}
  />
)

const ContextMenuSeparator = ({ className, ...props }: ComponentProps<typeof Separator>) => (
  <Separator
    className={cn("-mx-1.5 my-1.5 h-px bg-border/50", className)}
    data-slot="context-menu-separator"
    {...props}
  />
)

const ContextMenuShortcut = ({ className, ...props }: ComponentProps<"span">) => (
  <span
    className={cn(
      "ml-auto text-muted-foreground text-xs tracking-widest group-focus/context-menu-item:text-accent-foreground",
      className
    )}
    data-slot="context-menu-shortcut"
    {...props}
  />
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
