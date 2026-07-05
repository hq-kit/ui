"use client"

import {
  type ComponentProps,
  type CSSProperties,
  createContext,
  useCallback,
  useContext,
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
import { Separator } from "./separator"
import { Sheet } from "./sheet"
import { Skeleton } from "./skeleton"

const NAVBAR_HEIGHT = "3.5rem"
const NAVBAR_HEIGHT_MOBILE = "3rem"
const NAVBAR_GAP = "1rem"

type NavbarContextProps = {
  open: boolean
  setOpen: (open: boolean) => void
  isMobile: boolean
  toggleNavbar: () => void
}

const NavbarContext = createContext<NavbarContextProps | null>(null)

function useNavbar() {
  const context = useContext(NavbarContext)
  if (!context) {
    throw new Error("useNavbar must be used within a NavbarProvider.")
  }

  return context
}

const NavbarProvider = ({
  open: openProp,
  onOpenChange: setOpenProp,
  className,
  style,
  ...props
}: ComponentProps<"div"> & {
  open?: boolean
  onOpenChange?: (open: boolean) => void
  sticky?: boolean
}) => {
  const isMobile = useIsMobile()

  // This is the internal state of the navbar.
  // We use openProp and setOpenProp for control from outside the component.
  const [_open, _setOpen] = useState(false)
  const open = openProp ?? _open
  const setOpen = useCallback(
    (value: boolean | ((value: boolean) => boolean)) => {
      const openState = typeof value === "function" ? value(open) : value
      if (setOpenProp) {
        setOpenProp(openState)
      } else {
        _setOpen(openState)
      }
    },
    [setOpenProp, open]
  )

  // Helper to toggle the navbar.
  const toggleNavbar = useCallback(() => {
    return isMobile && setOpen((open) => !open)
  }, [isMobile, setOpen])

  const state = open ? "expanded" : "collapsed"

  const contextValue = useMemo<NavbarContextProps>(
    () => ({
      open,
      setOpen,
      isMobile,
      toggleNavbar
    }),
    [state, open, setOpen, isMobile, toggleNavbar]
  )

  return (
    <NavbarContext.Provider value={contextValue}>
      <div
        className={cn(
          "relative isolate flex w-full flex-col has-data-[variant=inset]:max-h-dvh has-data-[variant=inset]:bg-sidebar",
          className
        )}
        style={
          {
            "--navbar-height": isMobile ? NAVBAR_HEIGHT_MOBILE : NAVBAR_HEIGHT,
            "--navbar-gap": NAVBAR_GAP,
            "--navbar-width": `calc(100% - ${NAVBAR_GAP} - ${NAVBAR_GAP})`
          } as CSSProperties
        }
        {...props}
      />
    </NavbarContext.Provider>
  )
}

function Navbar({
  variant = "navbar",
  fluid = false,
  sticky = true,
  className,
  children,
  ...props
}: ComponentProps<"div"> & {
  variant?: "navbar" | "floating" | "inset"
  sticky?: boolean
  fluid?: boolean
}) {
  const { isMobile } = useNavbar()

  return (
    <div
      className={cn(
        "group peer relative z-10 text-sidebar-foreground",
        variant === "floating"
          ? "mx-auto min-h-[calc(var(--navbar-height)+var(--navbar-gap))] w-full max-w-7xl xl:max-w-(--breakpoint-xl)"
          : "min-h-(--navbar-height)"
      )}
      data-mobile={isMobile}
      data-slot="navbar"
      data-sticky={sticky}
      data-variant={variant}
    >
      {/* This is what handles the navbar gap on desktop */}
      <div
        className={cn(
          "relative top-0 bg-linear-to-b from-background via-background to-transparent",
          variant === "floating" ? "h-[calc(var(--navbar-height)+var(--navbar-gap))]" : "h-(--navbar-height)",
          sticky && "fixed top-0 right-0 left-0"
        )}
        data-slot="navbar-gap"
      />
      <div
        className={cn(
          "bg-sidebar group-data-[variant=floating]:ring-sidebar-border group-data-[variant=floating]:rounded-none group-data-[variant=floating]:shadow-sm group-data-[variant=floating]:ring-1 fixed inset-x-0 z-30 mx-auto h-(--navbar-height)",
          variant === "floating"
            ? "top-(--navbar-gap) w-(--navbar-width) max-w-7xl xl:max-w-(--breakpoint-xl)"
            : "top-0 w-full",
          variant === "navbar" && "border-b border-b-sidebar-border",
          className
        )}
        data-slot="navbar-container"
        {...props}
      >
        <div
          className={cn(
            "mx-auto flex size-full max-w-7xl items-center overflow-hidden xl:max-w-(--breakpoint-xl)",
            isMobile ? "px-0" : "px-(--navbar-gap)",
            fluid && "max-w-none xl:max-w-none"
          )}
          data-navbar="navbar"
          data-slot="navbar-inner"
        >
          {isMobile && (
            <div className="gap-2 p-2 [--radius:0] mr-2 flex items-center">
              <NavbarTrigger />
              <Separator orientation="vertical" />
            </div>
          )}
          {children}
        </div>
      </div>
    </div>
  )
}

const NavbarTrigger = ({ className, onPress, ...props }: ComponentProps<typeof Button>) => {
  const { toggleNavbar } = useNavbar()

  return (
    <Button
      className={cn(className)}
      data-sidebar="trigger"
      data-slot="navbar-trigger"
      onPress={(e) => {
        onPress?.(e)
        toggleNavbar()
      }}
      size="icon"
      variant="ghost"
      {...props}
    >
      <IconPlaceholder
        hugeicons="Menu01Icon"
        lucide="MenuIcon"
        phosphor="ListIcon"
        remixicon="RiMenuLine"
        tabler="IconMenu2"
      />
      <span className="sr-only">Toggle Navbar</span>
    </Button>
  )
}

const NavbarInset = ({ className, fluid = false, ...props }: ComponentProps<"main"> & { fluid?: boolean }) => (
  <main
    className={cn(
      "bg-background md:peer-data-[variant=inset]:m-2 md:peer-data-[variant=inset]:ml-0 md:peer-data-[variant=inset]:rounded-none md:peer-data-[variant=inset]:shadow-sm md:peer-data-[variant=inset]:peer-data-[state=collapsed]:ml-2 relative mx-auto flex min-h-[calc(100vh-(var(--navbar-height)+var(--navbar-gap)))] w-[calc(100%-var(--navbar-gap))] flex-1 flex-col overflow-auto bg-background peer-data-[variant=floating]:min-h-[calc(100vh-(var(--navbar-height)+var(--navbar-gap)))] peer-data-[variant=default]:w-full md:peer-data-[variant=inset]:mt-0!",
      !fluid && "max-w-7xl xl:max-w-(--breakpoint-xl)",
      className
    )}
    data-slot="navbar-inset"
    {...props}
  />
)

const NavbarHeader = ({ className, ...props }: ComponentProps<"div">) => (
  <div
    className={cn("gap-2 p-2 [--radius:0] flex items-center", className)}
    data-navbar="header"
    data-slot="navbar-header"
    {...props}
  />
)

const NavbarActions = ({ className, ...props }: ComponentProps<"div">) => (
  <div
    className={cn("gap-2 p-2 [--radius:0] ml-auto flex items-center", className)}
    data-navbar="actions"
    data-slot="navbar-actions"
    {...props}
  />
)

const NavbarSeparator = ({ className, ...props }: ComponentProps<typeof Separator>) => (
  <Separator
    className={cn("bg-sidebar-border mx-2 h-full w-px", className)}
    data-navbar="separator"
    data-slot="sidebar-separator"
    {...props}
  />
)

const NavbarContent = ({ className, ...props }: ComponentProps<"div">) => {
  const { isMobile, open, setOpen } = useNavbar()
  if (isMobile) {
    return (
      <Sheet isOpen={open} onOpenChange={setOpen} {...props}>
        <Sheet.Trigger className="sr-only" />
        <Sheet.Content
          className="bg-sidebar p-0 text-sidebar-foreground [&>button]:hidden"
          closeButton={false}
          data-navbar="navbar"
          side="left"
        >
          <Sheet.Header className="sr-only">
            <Sheet.Title>Navbar</Sheet.Title>
            <Sheet.Description>Displays the mobile navbar.</Sheet.Description>
          </Sheet.Header>
          <div className="no-scrollbar isolate flex flex-col overflow-auto will-change-scroll">{props.children}</div>
        </Sheet.Content>
      </Sheet>
    )
  }
  return (
    <div
      className={cn(
        "no-scrollbar gap-2 [--radius:0] flex min-h-0 flex-1 overflow-auto",
        "flex-row in-data-[slot=sheet-content]:flex-col",
        className
      )}
      data-navbar="content"
      data-slot="navbar-content"
      {...props}
    />
  )
}

const NavbarGroup = ({ className, ...props }: ComponentProps<"div">) => (
  <div
    className={cn(
      "p-2 relative flex in-data-[slot=sheet-content]:w-full in-data-[slot=sheet-content]:min-w-0 flex-row in-data-[slot=sheet-content]:flex-col",
      className
    )}
    data-navbar="group"
    data-slot="navbar-group"
    {...props}
  />
)

const NavbarGroupContent = ({ className, ...props }: ComponentProps<"div">) => (
  <div
    className={cn(
      "text-sm flex in-data-[slot=sheet-content]:w-full in-data-[slot=sheet-content]:min-w-0 flex-row in-data-[slot=sheet-content]:flex-col",
      className
    )}
    data-navbar="group-content"
    data-slot="navbar-group-content"
    {...props}
  />
)

const NavbarMenu = ({ className, ...props }: ComponentProps<"ul">) => (
  <ul
    className={cn(
      "gap-2 flex in-data-[slot=sheet-content]:w-full in-data-[slot=sheet-content]:min-w-0 flex-row in-data-[slot=sheet-content]:flex-col",
      className
    )}
    data-navbar="menu"
    data-slot="navbar-menu"
    {...props}
  />
)

const NavbarMenuItem = ({ className, ...props }: ComponentProps<"li">) => (
  <li
    className={cn("group/menu-item relative", className)}
    data-navbar="menu-item"
    data-slot="navbar-menu-item"
    {...props}
  />
)

const navbarMenuButtonVariants = tv({
  base: "ring-sidebar-ring hover:bg-sidebar-accent hover:text-sidebar-accent-foreground active:bg-sidebar-accent active:text-sidebar-accent-foreground data-active:bg-sidebar-accent data-active:text-sidebar-accent-foreground data-open:hover:bg-sidebar-accent data-open:hover:text-sidebar-accent-foreground gap-2 rounded-none px-3 py-2 text-left text-sm transition-[width,height,padding] group-has-data-[sidebar=menu-action]/menu-item:pr-8 group-data-[collapsible=icon]:size-8! group-data-[collapsible=icon]:p-2! focus-visible:ring-2 data-active:font-medium peer/menu-button group/menu-button flex w-full items-center overflow-hidden outline-hidden disabled:pointer-events-none disabled:opacity-50 aria-disabled:pointer-events-none aria-disabled:opacity-50 [&>span:last-child]:truncate [&_svg]:size-4 [&_svg]:shrink-0",
  variants: {
    variant: {
      default: "hover:bg-sidebar-accent hover:text-sidebar-accent-foreground",
      outline: "bg-background hover:bg-sidebar-accent hover:text-sidebar-accent-foreground shadow-[0_0_0_1px_var(--sidebar-border)] hover:shadow-[0_0_0_1px_var(--sidebar-accent)]"
    },
    size: {
      default: "h-9 text-sm",
      sm: "h-8 text-xs",
      lg: "h-14 px-3 text-sm group-data-[collapsible=icon]:p-0!"
    }
  },
  defaultVariants: {
    variant: "default",
    size: "default"
  }
})

const NavbarMenuButton = ({
  isActive = false,
  variant = "default",
  size = "default",
  className,
  ...props
}: Omit<LinkProps, "className" | "slot"> &
  ButtonProps & {
    isActive?: boolean
  } & VariantProps<typeof navbarMenuButtonVariants>) => {
  const Comp = "href" in props ? Link : RACButton

  return (
    <Comp
      className={cn(navbarMenuButtonVariants({ variant, size }), className)}
      {...(isActive && { "data-active": "true" })}
      data-navbar="menu-button"
      data-size={size}
      data-slot="navbar-menu-button"
      type="button"
      {...props}
    />
  )
}

const NavbarMenuSkeleton = ({
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
      className={cn("h-8 gap-2 rounded-none px-2 flex items-center", className)}
      data-navbar="menu-skeleton"
      data-slot="navbar-menu-skeleton"
      {...props}
    >
      {showIcon && <Skeleton className="size-3.5 rounded-none" data-sidebar="menu-skeleton-icon" />}
      <Skeleton
        className="h-4 max-w-(--skeleton-width) flex-1"
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

const NavbarMenuSub = ({ className, ...props }: ComponentProps<"ul">) => {
  return (
    <ul
      className={cn(
        "border-sidebar-border mx-3.5 translate-x-px gap-1 border-l px-2.5 py-0.5 group-data-[collapsible=icon]:hidden flex in-data-[slot=sheet-content]:w-full in-data-[slot=sheet-content]:min-w-0 flex-row in-data-[slot=sheet-content]:flex-col",
        className
      )}
      data-navbar="menu-sub"
      data-slot="navbar-menu-sub"
      {...props}
    />
  )
}

const NavbarMenuSubItem = ({ className, ...props }: ComponentProps<"li">) => {
  return (
    <li
      className={cn("group/menu-sub-item relative", className)}
      data-navbar="menu-sub-item"
      data-slot="navbar-menu-sub-item"
      {...props}
    />
  )
}

const NavbarMenuSubButton = ({
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
      "text-sidebar-foreground ring-sidebar-ring hover:bg-sidebar-accent hover:text-sidebar-accent-foreground active:bg-sidebar-accent active:text-sidebar-accent-foreground [&>svg]:text-sidebar-accent-foreground data-active:bg-sidebar-accent data-active:text-sidebar-accent-foreground h-7 gap-2 rounded-none px-3 focus-visible:ring-2 data-[size=md]:text-sm data-[size=sm]:text-xs [&>svg]:size-3.5 flex min-w-0 -translate-x-px items-center overflow-hidden outline-hidden disabled:pointer-events-none disabled:opacity-50 aria-disabled:pointer-events-none aria-disabled:opacity-50 group-data-[collapsible=icon]:hidden [&>span:last-child]:truncate [&>svg]:shrink-0",
      className
    )}
    {...(isActive && { "data-active": "true" })}
    data-sidebar="menu-sub-button"
    data-size={size}
    data-slot="sidebar-menu-sub-button"
    {...props}
  />
)

Navbar.Provider = NavbarProvider
Navbar.Content = NavbarContent
Navbar.Group = NavbarGroup
Navbar.GroupContent = NavbarGroupContent
Navbar.Header = NavbarHeader
Navbar.Actions = NavbarActions
Navbar.Inset = NavbarInset
Navbar.Menu = NavbarMenu
Navbar.MenuButton = NavbarMenuButton
Navbar.MenuItem = NavbarMenuItem
Navbar.MenuSkeleton = NavbarMenuSkeleton
Navbar.MenuSub = NavbarMenuSub
Navbar.MenuSubButton = NavbarMenuSubButton
Navbar.MenuSubItem = NavbarMenuSubItem
Navbar.Separator = NavbarSeparator
Navbar.Trigger = NavbarTrigger

export {
  Navbar,
  NavbarActions,
  NavbarContent,
  NavbarGroup,
  NavbarGroupContent,
  NavbarHeader,
  NavbarInset,
  NavbarMenu,
  NavbarMenuButton,
  NavbarMenuItem,
  NavbarMenuSkeleton,
  NavbarMenuSub,
  NavbarMenuSubButton,
  NavbarMenuSubItem,
  NavbarProvider,
  NavbarSeparator,
  NavbarTrigger,
  useNavbar
}
