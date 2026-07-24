"use client"

import dynamic from "next/dynamic"
import { usePathname } from "next/navigation"
import { Fragment, memo, useCallback, useEffect, useMemo, useState } from "react"
import { Collection, Header, Link } from "react-aria-components"
import { IconPlaceholder } from "@/components/icon-placeholder"
import { IconApp, IconBrandGithub } from "@/components/icons"
import { menus } from "@/components/layouts/menus"
import { ThemeToggle } from "@/components/theme-toggle"
import { Button, buttonVariants } from "../ui/button"
import { Kbd, KbdGroup } from "../ui/kbd"
import { Navbar, useNavbar } from "../ui/navbar"

const CommandMenu = dynamic(() => import("./command-menu").then((mod) => mod.CommandMenu), {
  ssr: false,
  loading: () => null
})

const MainMenuItems = memo(({ pathname }: { pathname: string }) => {
  const menuItems = useMemo(
    () => [
      { id: 1, label: "Home", url: "/", active: pathname === "/" },
      { id: 2, label: "Components", url: "/docs", active: pathname.startsWith("/docs") },
      { id: 3, label: "Charts", url: "/charts", active: pathname.startsWith("/charts") }
    ],
    [pathname]
  )

  return (
    <Navbar.Group>
      <Navbar.Menu>
        <Collection items={menuItems}>
          {(item) => (
            <Navbar.MenuItem key={item.id}>
              <Navbar.MenuButton href={item.url} isActive={item.active}>
                {item.label}
              </Navbar.MenuButton>
            </Navbar.MenuItem>
          )}
        </Collection>
      </Navbar.Menu>
    </Navbar.Group>
  )
})
MainMenuItems.displayName = "MainMenuItems"

// Memoized mobile menu component
const MobileMenuItems = memo(({ pathname }: { pathname: string }) => {
  const menuList = useMemo(() => menus(), [])

  return (
    <>
      {menuList.map((item) => (
        <Navbar.Group aria-label="Navigation" className="py-1" key={item.title}>
          <Header className="cn-sidebar-menu-button pointer-events-none mt-4 mb-2 font-semibold text-foreground">
            {item.title}
          </Header>
          <Navbar.Menu className="gap-0.5">
            {item.items?.map((menuItem) => (
              <Navbar.MenuItem key={menuItem.slug}>
                <Navbar.MenuButton href={menuItem.slug} isActive={pathname === menuItem.slug}>
                  {menuItem.title}
                </Navbar.MenuButton>
              </Navbar.MenuItem>
            ))}
            {item.sections?.map((section) => (
              <Fragment key={section.title}>
                <Header className="cn-sidebar-menu-button pointer-events-none mt-4 mb-2 font-semibold text-foreground">
                  {section.title}
                </Header>
                {section.items?.map((sectionItem) => (
                  <Navbar.MenuItem key={sectionItem.slug}>
                    <Navbar.MenuButton href={sectionItem.slug} isActive={pathname === sectionItem.slug}>
                      {sectionItem.title}
                    </Navbar.MenuButton>
                  </Navbar.MenuItem>
                ))}
              </Fragment>
            ))}
          </Navbar.Menu>
        </Navbar.Group>
      ))}
    </>
  )
})
MobileMenuItems.displayName = "MobileMenuItems"

// Memoized navbar actions component
const NavbarActions = memo(
  ({ isMobile, setOpenCommand }: { isMobile: boolean; setOpenCommand: (open: boolean) => void }) => {
    return (
      <Navbar.Actions>
        <Button onPress={() => setOpenCommand(true)} size={isMobile ? "icon" : "default"} variant="outline">
          <IconPlaceholder
            hugeicons="SearchIcon"
            lucide="SearchIcon"
            phosphor="MagnifyingGlassIcon"
            remixicon="RiSearchLine"
            tabler="IconSearch"
          />
          {!isMobile && (
            <>
              <span className="mr-2 text-muted-foreground">Search...</span>
              <KbdGroup>
                <Kbd>⌘</Kbd>
                <Kbd>K</Kbd>
              </KbdGroup>
            </>
          )}
        </Button>
        <Link
          aria-label="Github Repository"
          className={buttonVariants({
            variant: "outline",
            size: "icon"
          })}
          href={"https://github.com/hq-kit/ui"}
          target="_blank"
        >
          <IconBrandGithub />
        </Link>
        <ThemeToggle />
      </Navbar.Actions>
    )
  }
)
NavbarActions.displayName = "NavbarActions"

function AppNavbarComponent() {
  const pathname = usePathname()
  const { open, setOpen, isMobile } = useNavbar()
  const [openCommand, setOpenCommand] = useState(false)

  useEffect(() => {
    if (open) setOpen(false)
  }, [pathname, open, setOpen])

  const handleKeyDown = useCallback((e: KeyboardEvent) => {
    if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
      e.preventDefault()
      setOpenCommand((prev) => !prev)
    }
  }, [])

  useEffect(() => {
    document.addEventListener("keydown", handleKeyDown)
    return () => document.removeEventListener("keydown", handleKeyDown)
  }, [handleKeyDown])

  return (
    <>
      {openCommand && <CommandMenu open={openCommand} setOpen={setOpenCommand} />}
      <Navbar fluid sticky>
        <Navbar.Content>
          <Navbar.Header className="sticky top-0 z-10 bg-sidebar md:relative">
            <Navbar.Menu>
              <Navbar.MenuButton href="/">
                <IconApp className="size-5!" />
                <span className="font-semibold text-base">HQ UI</span>
              </Navbar.MenuButton>
            </Navbar.Menu>
          </Navbar.Header>
          <MainMenuItems pathname={pathname} />
          {isMobile && <MobileMenuItems pathname={pathname} />}
        </Navbar.Content>
        {isMobile && (
          <Navbar.Header className="-ml-4">
            <Navbar.Menu>
              <Navbar.MenuButton href="/">
                <IconApp className="size-5!" />
                <span className="font-semibold text-base">HQ UI</span>
              </Navbar.MenuButton>
            </Navbar.Menu>
          </Navbar.Header>
        )}
        <NavbarActions isMobile={isMobile} setOpenCommand={setOpenCommand} />
      </Navbar>
    </>
  )
}

export const AppNavbar = memo(AppNavbarComponent)
AppNavbar.displayName = "AppNavbar"
