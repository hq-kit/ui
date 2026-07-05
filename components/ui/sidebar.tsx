"use client"

import {
  type ComponentProps,
  type CSSProperties,
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState
} from "react"
import { type ButtonProps, Button as RACButton } from "react-aria-components/Button"
import { Link, type LinkProps } from "react-aria-components/Link"
import { tv, type VariantProps } from "tailwind-variants"
import { IconPlaceholder } from "@/components/icon-placeholder"
import { useIsMobile } from "@/hooks/use-mobile"
import { cn } from "@/lib/utils"
import { Button } from "./button"
import { SearchField, SearchInput } from "./search-field"
import { Separator } from "./separator"
import { Sheet } from "./sheet"
import { Skeleton } from "./skeleton"
import { Tooltip, TooltipContent } from "./tooltip"

const SIDEBAR_COOKIE_NAME = "sidebar_state"
const SIDEBAR_COOKIE_MAX_AGE = 60 * 60 * 24 * 7
const SIDEBAR_WIDTH = "16rem"
const SIDEBAR_WIDTH_MOBILE = "18rem"
const SIDEBAR_WIDTH_ICON = "3rem"
const SIDEBAR_KEYBOARD_SHORTCUT = "b"

type SidebarContextProps = {
  state: "expanded" | "collapsed"
  open: boolean
  setOpen: (open: boolean) => void
  openMobile: boolean
  setOpenMobile: (open: boolean) => void
  isMobile: boolean
  toggleSidebar: () => void
}

const SidebarContext = createContext<SidebarContextProps | null>(null)

function useSidebar() {
  const context = useContext(SidebarContext)
  if (!context) {
    throw new Error("useSidebar must be used within a SidebarProvider.")
  }

  return context
}

const SidebarProvider = ({
  defaultOpen = true,
  open: openProp,
  onOpenChange: setOpenProp,
  className,
  style,
  children,
  ...props
}: ComponentProps<"div"> & {
  defaultOpen?: boolean
  open?: boolean
  onOpenChange?: (open: boolean) => void
}) => {
  const isMobile = useIsMobile()
  const [openMobile, setOpenMobile] = useState(false)

  // This is the internal state of the sidebar.
  // We use openProp and setOpenProp for control from outside the component.
  const [_open, _setOpen] = useState(defaultOpen)
  const open = openProp ?? _open
  const setOpen = useCallback(
    (value: boolean | ((value: boolean) => boolean)) => {
      const openState = typeof value === "function" ? value(open) : value
      if (setOpenProp) {
        setOpenProp(openState)
      } else {
        _setOpen(openState)
      }

      // This sets the cookie to keep the sidebar state.
      // biome-ignore lint/suspicious/noDocumentCookie: false-positive
      document.cookie = `${SIDEBAR_COOKIE_NAME}=${openState}; path=/; max-age=${SIDEBAR_COOKIE_MAX_AGE}`
    },
    [setOpenProp, open]
  )

  // Helper to toggle the sidebar.
  const toggleSidebar = useCallback(() => {
    return isMobile ? setOpenMobile((open) => !open) : setOpen((open) => !open)
  }, [isMobile, setOpen, setOpenMobile])

  // Adds a keyboard shortcut to toggle the sidebar.
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === SIDEBAR_KEYBOARD_SHORTCUT && (event.metaKey || event.ctrlKey)) {
        event.preventDefault()
        toggleSidebar()
      }
    }

    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [toggleSidebar])

  // We add a state so that we can do data-state="expanded" or "collapsed".
  // This makes it easier to style the sidebar with Tailwind classes.
  const state = open ? "expanded" : "collapsed"

  const contextValue = useMemo<SidebarContextProps>(
    () => ({
      state,
      open,
      setOpen,
      isMobile,
      openMobile,
      setOpenMobile,
      toggleSidebar
    }),
    [state, open, setOpen, isMobile, openMobile, setOpenMobile, toggleSidebar]
  )

  return (
    <SidebarContext.Provider value={contextValue}>
      <div
        className={cn("group/sidebar-wrapper flex min-h-svh w-full has-data-[variant=inset]:bg-sidebar", className)}
        data-slot="sidebar-wrapper"
        style={
          {
            "--sidebar-width": SIDEBAR_WIDTH,
            "--sidebar-width-icon": SIDEBAR_WIDTH_ICON,
            ...style
          } as CSSProperties
        }
        {...props}
      >
        {children}
      </div>
    </SidebarContext.Provider>
  )
}

function Sidebar({
  side = "left",
  variant = "sidebar",
  collapsible = "offcanvas",
  className,
  children,
  ...props
}: ComponentProps<"div"> & {
  side?: "left" | "right"
  variant?: "sidebar" | "floating" | "inset"
  collapsible?: "offcanvas" | "icon" | "none"
}) {
  const { isMobile, state, openMobile, setOpenMobile } = useSidebar()

  if (collapsible === "none") {
    return (
      <div
        className={cn(
          "group peer flex min-h-full w-(--sidebar-width) flex-col",
          variant === "floating" || variant === "inset"
            ? "p-2"
            : "bg-sidebar text-sidebar-foreground group-data-[side=left]:border-r group-data-[side=right]:border-l",
          className
        )}
        data-collapsible="none"
        data-side={side}
        data-slot="sidebar-container"
        data-variant={variant}
        {...props}
      >
        <div className="cn-sidebar-inner flex size-full flex-col" data-sidebar="sidebar" data-slot="sidebar-inner">
          {children}
        </div>
      </div>
    )
  }

  if (isMobile) {
    return (
      <Sheet isOpen={openMobile} onOpenChange={setOpenMobile} {...props}>
        <Sheet.Trigger className="sr-only" />
        <Sheet.Content
          className="w-(--sidebar-width) bg-sidebar p-0 text-sidebar-foreground [&>button]:hidden"
          closeButton={false}
          data-mobile="true"
          data-sidebar="sidebar"
          data-slot="sidebar"
          side={side}
          style={
            {
              "--sidebar-width": SIDEBAR_WIDTH_MOBILE
            } as CSSProperties
          }
        >
          <Sheet.Header className="sr-only">
            <Sheet.Title>Sidebar</Sheet.Title>
            <Sheet.Description>Displays the mobile sidebar.</Sheet.Description>
          </Sheet.Header>
          <div className="flex size-full flex-col">{children}</div>
        </Sheet.Content>
      </Sheet>
    )
  }

  return (
    <div
      className="group peer hidden text-sidebar-foreground md:block"
      data-collapsible={state === "collapsed" ? collapsible : ""}
      data-side={side}
      data-slot="sidebar"
      data-state={state}
      data-variant={variant}
    >
      {/* This is what handles the sidebar gap on desktop */}
      <div
        className={cn(
          "cn-sidebar-gap relative w-(--sidebar-width) bg-transparent",
          "group-data-[collapsible=offcanvas]:w-0",
          "group-data-[side=right]:rotate-180",
          variant === "floating" || variant === "inset"
            ? "group-data-[collapsible=icon]:w-[calc(var(--sidebar-width-icon)+(--spacing(4)))]"
            : "group-data-[collapsible=icon]:w-(--sidebar-width-icon)"
        )}
        data-slot="sidebar-gap"
      />
      <div
        className={cn(
          "fixed inset-y-0 z-10 hidden h-svh w-(--sidebar-width) transition-[left,right,width] duration-200 ease-linear data-[side=right]:right-0 data-[side=left]:left-0 data-[side=right]:group-data-[collapsible=offcanvas]:-right-(--sidebar-width) data-[side=left]:group-data-[collapsible=offcanvas]:-left-(--sidebar-width) md:flex",
          // Adjust the padding for floating and inset variants.
          variant === "floating" || variant === "inset"
            ? "p-2 group-data-[collapsible=icon]:w-[calc(var(--sidebar-width-icon)+(--spacing(4))+2px)]"
            : "group-data-[collapsible=icon]:w-(--sidebar-width-icon) group-data-[side=left]:border-r group-data-[side=right]:border-l",
          className
        )}
        data-side={side}
        data-slot="sidebar-container"
        {...props}
      >
        <div className="cn-sidebar-inner flex size-full flex-col" data-sidebar="sidebar" data-slot="sidebar-inner">
          {children}
        </div>
      </div>
    </div>
  )
}

const SidebarTrigger = ({ className, onPress, ...props }: ComponentProps<typeof Button>) => {
  const { toggleSidebar } = useSidebar()

  return (
    <Button
      className={cn("cn-sidebar-trigger peer-[data-collapsible=none]:hidden", className)}
      data-sidebar="trigger"
      data-slot="sidebar-trigger"
      onPress={(e) => {
        onPress?.(e)
        toggleSidebar()
      }}
      size="icon"
      variant="ghost"
      {...props}
    >
      <IconPlaceholder
        className="cn-rtl-flip"
        hugeicons="SidebarLeftIcon"
        lucide="PanelLeftIcon"
        phosphor="SidebarIcon"
        remixicon="RiSideBarLine"
        tabler="IconLayoutSidebar"
      />
      <span className="sr-only">Toggle Sidebar</span>
    </Button>
  )
}

const SidebarRail = ({ className, ...props }: ComponentProps<"button">) => {
  const { toggleSidebar } = useSidebar()

  return (
    <button
      aria-label="Toggle Sidebar"
      className={cn(
        "cn-sidebar-rail absolute inset-y-0 z-20 hidden w-4 transition-all ease-linear after:absolute after:inset-s-1/2 after:inset-y-0 after:w-0.5 group-data-[side=left]:-right-4 group-data-[side=right]:left-0 sm:flex ltr:-translate-x-1/2 rtl:-translate-x-1/2",
        "in-data-[side=left]:cursor-w-resize in-data-[side=right]:cursor-e-resize",
        "[[data-side=left][data-state=collapsed]_&]:cursor-e-resize [[data-side=right][data-state=collapsed]_&]:cursor-w-resize",
        "group-data-[collapsible=offcanvas]:translate-x-0 hover:group-data-[collapsible=offcanvas]:bg-sidebar group-data-[collapsible=offcanvas]:after:left-full",
        "[[data-side=left][data-collapsible=offcanvas]_&]:-right-2",
        "[[data-side=right][data-collapsible=offcanvas]_&]:-left-2",
        className
      )}
      data-sidebar="rail"
      data-slot="sidebar-rail"
      onClick={toggleSidebar}
      tabIndex={-1}
      title="Toggle Sidebar"
      {...props}
    />
  )
}

const SidebarInset = ({ className, ...props }: ComponentProps<"main">) => (
  <main
    className={cn("cn-sidebar-inset relative flex w-full flex-1 flex-col", className)}
    data-slot="sidebar-inset"
    {...props}
  />
)

const SidebarInput = ({ className, ...props }: ComponentProps<typeof SearchField> & { placeholder?: string }) => (
  <SearchField
    aria-label="Search"
    className={cn("cn-sidebar-input bg-sidebar", className)}
    data-sidebar="input"
    data-slot="sidebar-input"
    {...props}
  >
    <SearchInput placeholder={props.placeholder ?? "Search ..."} />
  </SearchField>
)

const SidebarHeader = ({ className, ...props }: ComponentProps<"div">) => (
  <div
    className={cn("cn-sidebar-header flex flex-col", className)}
    data-sidebar="header"
    data-slot="sidebar-header"
    {...props}
  />
)

const SidebarFooter = ({ className, ...props }: ComponentProps<"div">) => (
  <div
    className={cn("cn-sidebar-footer flex flex-col", className)}
    data-sidebar="footer"
    data-slot="sidebar-footer"
    {...props}
  />
)

const SidebarSeparator = ({ className, ...props }: ComponentProps<typeof Separator>) => (
  <Separator
    className={cn("cn-sidebar-separator w-auto", className)}
    data-sidebar="separator"
    data-slot="sidebar-separator"
    {...props}
  />
)

const SidebarContent = ({ className, ...props }: ComponentProps<"div">) => (
  <div
    className={cn(
      "cn-sidebar-content flex min-h-0 flex-1 flex-col overflow-auto group-data-[collapsible=icon]:overflow-hidden",
      className
    )}
    data-sidebar="content"
    data-slot="sidebar-content"
    {...props}
  />
)

const SidebarGroup = ({ className, ...props }: ComponentProps<"div">) => (
  <div
    className={cn("cn-sidebar-group relative flex w-full min-w-0 flex-col", className)}
    data-sidebar="group"
    data-slot="sidebar-group"
    {...props}
  />
)

const SidebarGroupLabel = ({ className, ...props }: ComponentProps<"div">) => (
  <div
    className={cn("cn-sidebar-group-label flex shrink-0 items-center outline-hidden [&>svg]:shrink-0", className)}
    data-sidebar="group-label"
    data-slot="sidebar-group-label"
    {...props}
  />
)

const SidebarGroupAction = ({ className, ...props }: ComponentProps<"button">) => (
  <button
    className={cn(
      "cn-sidebar-group-action flex aspect-square items-center justify-center outline-hidden transition-transform after:absolute after:-inset-2 group-data-[collapsible=icon]:hidden md:after:hidden [&>svg]:shrink-0",
      className
    )}
    data-sidebar="group-action"
    data-slot="sidebar-group-action"
    type="button"
    {...props}
  />
)

const SidebarGroupContent = ({ className, ...props }: ComponentProps<"div">) => (
  <div
    className={cn("cn-sidebar-group-content w-full", className)}
    data-sidebar="group-content"
    data-slot="sidebar-group-content"
    {...props}
  />
)

const SidebarMenu = ({ className, ...props }: ComponentProps<"ul">) => (
  <ul
    className={cn("cn-sidebar-menu flex w-full min-w-0 flex-col", className)}
    data-sidebar="menu"
    data-slot="sidebar-menu"
    {...props}
  />
)

const SidebarMenuItem = ({ className, ...props }: ComponentProps<"li">) => (
  <li
    className={cn("group/menu-item relative", className)}
    data-sidebar="menu-item"
    data-slot="sidebar-menu-item"
    {...props}
  />
)

const sidebarMenuButtonVariants = tv({
  base: "cn-sidebar-menu-button peer/menu-button group/menu-button flex w-full items-center overflow-hidden outline-hidden disabled:pointer-events-none disabled:opacity-50 aria-disabled:pointer-events-none aria-disabled:opacity-50 [&>span:last-child]:truncate [&_svg]:size-4 [&_svg]:shrink-0",
  variants: {
    variant: {
      default: "cn-sidebar-menu-button-variant-default",
      outline: "cn-sidebar-menu-button-variant-outline"
    },
    size: {
      default: "cn-sidebar-menu-button-size-default",
      sm: "cn-sidebar-menu-button-size-sm",
      lg: "cn-sidebar-menu-button-size-lg"
    }
  },
  defaultVariants: {
    variant: "default",
    size: "default"
  }
})

const SidebarMenuButton = ({
  isActive = false,
  variant = "default",
  size = "default",
  tooltip,
  className,
  ...props
}: Omit<LinkProps, "className" | "slot"> &
  ButtonProps & {
    isActive?: boolean
    tooltip?: string | ComponentProps<typeof TooltipContent>
  } & VariantProps<typeof sidebarMenuButtonVariants>) => {
  const { isMobile, state } = useSidebar()

  const Comp = "href" in props ? Link : RACButton

  const button = (
    <Comp
      className={cn(sidebarMenuButtonVariants({ variant, size }), className)}
      {...(isActive && { "data-active": "true" })}
      data-sidebar="menu-button"
      data-size={size}
      data-slot="sidebar-menu-button"
      {...props}
    />
  )

  if (!tooltip) {
    return button
  }

  if (typeof tooltip === "string") {
    tooltip = {
      children: tooltip
    }
  }

  return (
    <Tooltip>
      {button}
      <TooltipContent hidden={state !== "collapsed" || isMobile} placement="end" {...tooltip} />
    </Tooltip>
  )
}

const SidebarMenuAction = ({
  className,
  showOnHover = false,
  ...props
}: ButtonProps & {
  showOnHover?: boolean
}) => (
  <RACButton
    className={cn(
      "cn-sidebar-menu-action flex items-center justify-center outline-hidden transition-transform after:absolute after:-inset-2 group-data-[collapsible=icon]:hidden md:after:hidden [&>svg]:shrink-0",
      showOnHover &&
        "group-focus-within/menu-item:opacity-100 group-hover/menu-item:opacity-100 aria-expanded:opacity-100 peer-data-active/menu-button:text-sidebar-accent-foreground md:opacity-0",
      className
    )}
    data-sidebar="menu-action"
    data-slot="sidebar-menu-action"
    slot={null}
    {...props}
  />
)

const SidebarMenuBadge = ({ className, ...props }: ComponentProps<"div">) => (
  <div
    className={cn(
      "cn-sidebar-menu-badge flex select-none items-center justify-center tabular-nums group-data-[collapsible=icon]:hidden",
      className
    )}
    data-sidebar="menu-badge"
    data-slot="sidebar-menu-badge"
    {...props}
  />
)

const SidebarMenuSkeleton = ({
  className,
  showIcon = false,
  ...props
}: ComponentProps<"div"> & {
  showIcon?: boolean
}) => {
  // Random width between 50 to 90%.
  const width = useMemo(() => {
    return `${Math.floor(Math.random() * 40) + 50}%`
  }, [])

  return (
    <div
      className={cn("cn-sidebar-menu-skeleton flex items-center", className)}
      data-sidebar="menu-skeleton"
      data-slot="sidebar-menu-skeleton"
      {...props}
    >
      {showIcon && <Skeleton className="cn-sidebar-menu-skeleton-icon" data-sidebar="menu-skeleton-icon" />}
      <Skeleton
        className="cn-sidebar-menu-skeleton-text max-w-(--skeleton-width) flex-1"
        data-sidebar="menu-skeleton-text"
        style={
          {
            "--skeleton-width": width
          } as CSSProperties
        }
      />
    </div>
  )
}

const SidebarMenuSub = ({ className, ...props }: ComponentProps<"ul">) => (
  <ul
    className={cn("cn-sidebar-menu-sub flex min-w-0 flex-col", className)}
    data-sidebar="menu-sub"
    data-slot="sidebar-menu-sub"
    {...props}
  />
)

const SidebarMenuSubItem = ({ className, ...props }: ComponentProps<"li">) => (
  <li
    className={cn("group/menu-sub-item relative", className)}
    data-sidebar="menu-sub-item"
    data-slot="sidebar-menu-sub-item"
    {...props}
  />
)

const SidebarMenuSubButton = ({
  asChild = false,
  size = "md",
  isActive = false,
  className,
  ...props
}: ComponentProps<typeof Link> & {
  asChild?: boolean
  size?: "sm" | "md"
  isActive?: boolean
}) => (
  <Link
    className={cn(
      "cn-sidebar-menu-sub-button flex min-w-0 -translate-x-px items-center overflow-hidden outline-hidden disabled:pointer-events-none disabled:opacity-50 aria-disabled:pointer-events-none aria-disabled:opacity-50 group-data-[collapsible=icon]:hidden [&>span:last-child]:truncate [&>svg]:shrink-0",
      className
    )}
    {...(isActive && { "data-active": "true" })}
    data-sidebar="menu-sub-button"
    data-size={size}
    data-slot="sidebar-menu-sub-button"
    {...props}
  />
)

Sidebar.Content = SidebarContent
Sidebar.Footer = SidebarFooter
Sidebar.Group = SidebarGroup
Sidebar.GroupAction = SidebarGroupAction
Sidebar.GroupContent = SidebarGroupContent
Sidebar.GroupLabel = SidebarGroupLabel
Sidebar.Header = SidebarHeader
Sidebar.Input = SidebarInput
Sidebar.Inset = SidebarInset
Sidebar.Menu = SidebarMenu
Sidebar.MenuAction = SidebarMenuAction
Sidebar.MenuBadge = SidebarMenuBadge
Sidebar.MenuButton = SidebarMenuButton
Sidebar.MenuItem = SidebarMenuItem
Sidebar.MenuSkeleton = SidebarMenuSkeleton
Sidebar.MenuSub = SidebarMenuSub
Sidebar.MenuSubButton = SidebarMenuSubButton
Sidebar.MenuSubItem = SidebarMenuSubItem
Sidebar.Rail = SidebarRail
Sidebar.Separator = SidebarSeparator
Sidebar.Trigger = SidebarTrigger

export {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupAction,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarInput,
  SidebarInset,
  SidebarMenu,
  SidebarMenuAction,
  SidebarMenuBadge,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSkeleton,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
  SidebarProvider,
  SidebarRail,
  SidebarSeparator,
  SidebarTrigger,
  useSidebar
}
