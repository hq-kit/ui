"use client"

import type { Key } from "@/components/ui/select"
import {
  IconBell,
  IconChevronDown,
  IconChevronRight,
  IconCircleCheck,
  IconCreditCard,
  IconHome,
  IconLayoutNavbar,
  IconLayoutSidebar,
  IconLogout,
  IconSparkles,
  IconUser
} from "@tabler/icons-react"
import { type ComponentType, useState } from "react"
import { IconApp } from "@/components/icons"
import { ThemeToggle } from "@/components/theme-toggle"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Breadcrumb } from "@/components/ui/breadcrumb"
import { Card } from "@/components/ui/card"
import { Collapsible, CollapsibleContent } from "@/components/ui/collapsible"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger
} from "@/components/ui/dropdown-menu"
import { FieldGroup, Label } from "@/components/ui/field"
import { Navbar, NavbarGroup, NavbarInset, NavbarMenu, NavbarMenuItem, useNavbar } from "@/components/ui/navbar"
import { Select } from "@/components/ui/select"
import { Skeleton } from "@/components/ui/skeleton"
import { Switch } from "@/components/ui/switch"
import { cn } from "@/lib/utils"

type NavMenu = {
  title: string
  url?: string
  icon?: ComponentType<{ className?: string }>
  items?: {
    title: string
    url: string
  }[]
}[]

const navigations: NavMenu = [
  {
    title: "Home",
    url: "#",
    icon: IconHome
  },
  {
    title: "Sidebars",
    url: "/block/layouts/sidebar",
    icon: IconLayoutSidebar,
    items: [
      {
        title: "Default",
        url: "/block/layouts/sidebar/sidebar-demo"
      },
      {
        title: "Floating",
        url: "/block/layouts/sidebar/sidebar-floating-demo"
      },
      {
        title: "Inset",
        url: "/block/layouts/sidebar/sidebar-inset-demo"
      },
      {
        title: "Default Icon",
        url: "/block/layouts/sidebar/sidebar-icon-demo"
      },
      {
        title: "Floating Icon",
        url: "/block/layouts/sidebar/sidebar-floating-icon-demo"
      },
      {
        title: "Inset Icon",
        url: "/block/layouts/sidebar/sidebar-inset-icon-demo"
      },
      {
        title: "Fixed",
        url: "/block/layouts/sidebar/sidebar-fixed-demo"
      }
    ]
  },
  {
    title: "Navbars",
    url: "/block/layouts/navbar",
    icon: IconLayoutNavbar,
    items: [
      {
        title: "Default",
        url: "/block/layouts/navbar/navbar-demo"
      },
      {
        title: "Floating",
        url: "/block/layouts/navbar/navbar-floating-demo"
      },
      {
        title: "Inset",
        url: "/block/layouts/navbar/navbar-inset-demo"
      }
    ]
  }
]

const user = {
  name: "DQ Al Haqqi",
  email: "dq.alhaqqi@gmail.com",
  avatar: "https://github.com/dq-alhq.png"
}

export default function NavbarDemo() {
  const [variant, setVariant] = useState<Key | null>("navbar")
  const [sticky, setSticky] = useState<boolean>(false)
  const [fluidNavbar, setFluidNavbar] = useState<boolean>(false)
  const [fluidContent, setFluidContent] = useState<boolean>(false)
  return (
    <Navbar.Provider>
      <Navbar fluid={fluidNavbar} sticky={sticky} variant={variant as "navbar" | "inset" | "floating"}>
        <Navbar.Content>
          <Navbar.Header>
            <Navbar.Menu>
              <Navbar.MenuButton className="data-[slot=navbar-menu-button]:p-1.5!">
                <IconApp className="size-5!" />
                <span className="font-semibold text-base">HQ UI</span>
              </Navbar.MenuButton>
            </Navbar.Menu>
          </Navbar.Header>
          <NavbarGroup>
            <NavbarMenu>
              <Navigation items={navigations} />
            </NavbarMenu>
          </NavbarGroup>
        </Navbar.Content>
        <Breadcrumb className="flex-nowrap justify-end overflow-x-auto">
          <Breadcrumb.Item href="#">Home</Breadcrumb.Item>
          <Breadcrumb.Item href="#">Blocks</Breadcrumb.Item>
          <Breadcrumb.Item>Navbar</Breadcrumb.Item>
        </Breadcrumb>

        <Navbar.Actions>
          <ThemeToggle variant="ghost" />
          <NavUser user={user} />
        </Navbar.Actions>
      </Navbar>
      <NavbarInset fluid={fluidContent}>
        <div className="flex flex-1 flex-col gap-4 p-4">
          <div className="grid auto-rows-min gap-4 md:grid-cols-3">
            <Skeleton />
            <Card>
              <Card.Content>
                <FieldGroup>
                  <Select aria-label="Variant" onChange={setVariant} value={variant}>
                    <Label>Variant</Label>
                    <Select.Trigger>
                      <Select.Value />
                    </Select.Trigger>
                    <Select.Content>
                      <Select.Item id="navbar">Navbar</Select.Item>
                      <Select.Item id="inset">Inset</Select.Item>
                      <Select.Item id="floating">Floating</Select.Item>
                    </Select.Content>
                  </Select>
                  <Switch isSelected={sticky} onChange={setSticky}>
                    Sticky Navbar
                  </Switch>
                  <Switch isSelected={fluidNavbar} onChange={setFluidNavbar}>
                    Fluid Navbar
                  </Switch>
                  <Switch isSelected={fluidContent} onChange={setFluidContent}>
                    Fluid Content
                  </Switch>
                </FieldGroup>
              </Card.Content>
            </Card>
            <Skeleton />
          </div>
          <Skeleton className={cn("min-h-screen flex-1 md:min-h-full", sticky && "md:min-h-screen")} />
        </div>
      </NavbarInset>
    </Navbar.Provider>
  )
}

const Navigation = ({ items }: { items: NavMenu }) => {
  const { isMobile } = useNavbar()
  return items.map((item) => {
    if (item.items) {
      return isMobile ? (
        <Collapsible defaultExpanded={true} key={item.title}>
          <Navbar.MenuItem>
            <Navbar.MenuButton slot="trigger">
              {item.icon && <item.icon />}
              <span>{item.title}</span>
              <IconChevronRight className="ml-auto transition-transform duration-200 group-data-expanded/collapsible:rotate-90" />
            </Navbar.MenuButton>
            <CollapsibleContent>
              <Navbar.MenuSub>
                {item.items?.map((subItem) => (
                  <Navbar.MenuSubItem key={subItem.title}>
                    <Navbar.MenuSubButton
                      href={subItem.url}
                      isActive={subItem.url === "/block/layouts/sidebar/sidebar-demo"}
                    >
                      {subItem.title}
                    </Navbar.MenuSubButton>
                  </Navbar.MenuSubItem>
                ))}
              </Navbar.MenuSub>
            </CollapsibleContent>
          </Navbar.MenuItem>
        </Collapsible>
      ) : (
        <DropdownMenu key={item.title}>
          <Navbar.MenuItem>
            <Navbar.MenuButton isActive={item.title === "Navbar"}>
              {item.icon && <item.icon />}
              <span>{item.title}</span>
              <IconChevronDown className="ml-auto in-aria-expanded:rotate-180 transition-transform" />
            </Navbar.MenuButton>
            <DropdownMenuContent placement="bottom start">
              {item.items?.map((subItem) => (
                <DropdownMenuItem href={subItem.url} key={subItem.title}>
                  {subItem.title}
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </Navbar.MenuItem>
        </DropdownMenu>
      )
    } else {
      return (
        <NavbarMenuItem key={item.title}>
          <Navbar.MenuButton href={item.url}>
            {item.icon && <item.icon />}
            <span>{item.title}</span>
          </Navbar.MenuButton>
        </NavbarMenuItem>
      )
    }
  })
}

const NavUser = ({
  user
}: {
  user: {
    name: string
    email: string
    avatar: string
  }
}) => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground">
        <Avatar className="size-8 rounded-md">
          <AvatarImage alt={user.name} src={user.avatar} />
          <AvatarFallback>
            <IconUser />
          </AvatarFallback>
        </Avatar>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="min-w-56 rounded-lg" placement="bottom end">
        <DropdownMenuLabel className="p-0 font-normal">
          <div className="flex items-center gap-2 px-1 py-1.5 text-left text-sm">
            <Avatar className="size-8 rounded-md">
              <AvatarImage alt={user.name} src={user.avatar} />
              <AvatarFallback>
                <IconUser />
              </AvatarFallback>
            </Avatar>
            <div className="grid flex-1 text-left text-sm leading-tight">
              <span className="truncate font-medium">{user.name}</span>
              <span className="truncate text-xs">{user.email}</span>
            </div>
          </div>
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuItem>
            <IconSparkles />
            Upgrade to Pro
          </DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuItem>
            <IconCircleCheck />
            Account
          </DropdownMenuItem>
          <DropdownMenuItem>
            <IconCreditCard />
            Billing
          </DropdownMenuItem>
          <DropdownMenuItem>
            <IconBell />
            Notifications
          </DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuItem>
          <IconLogout />
          Log out
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
