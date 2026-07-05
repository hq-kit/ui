"use client"

import dynamic from "next/dynamic"
import { usePathname } from "next/navigation"
import { Fragment, useEffect, useState } from "react"
import { Collection, Header, Link } from "react-aria-components"
import { IconPlaceholder } from "@/components/icon-placeholder"
import { IconApp, IconBrandGithub } from "@/components/icons"
import { menus } from "@/components/layouts/menus"
import { ThemeToggle } from "@/components/theme-toggle"
import { Button, buttonVariants } from "../ui/button"
import { Kbd, KbdGroup } from "../ui/kbd"
import { Navbar, useNavbar } from "../ui/navbar"

const CommandMenu = dynamic(() => import("./command-menu").then((mod) => mod.CommandMenu), {
  ssr: false
})

export function AppNavbar() {
  const pathname = usePathname()
  const menuItems = [
    { id: 1, label: "Home", url: "/", active: pathname === "/" },
    { id: 2, label: "Components", url: "/docs", active: pathname.startsWith("/docs") },
    { id: 3, label: "Charts", url: "/charts", active: pathname.startsWith("/charts") }

    // { id: 3, label: 'Blocks', url: '/blocks', active: pathname.startsWith('/blocks') }
  ]

  const { open, setOpen, isMobile } = useNavbar()

  const [openCommand, setOpenCommand] = useState(false)

  useEffect(() => {
    if (open) setOpen(false)
  }, [pathname])

  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault()
        setOpenCommand((openCommand) => !openCommand)
      }
    }
    document.addEventListener("keydown", down)
    return () => document.removeEventListener("keydown", down)
  }, [])

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
          <Navbar.Group>
            <Navbar.Menu>
              <Collection items={menuItems}>
                {(item) => (
                  <Navbar.MenuItem>
                    <Navbar.MenuButton href={item.url} isActive={item.active}>
                      {item.label}
                    </Navbar.MenuButton>
                  </Navbar.MenuItem>
                )}
              </Collection>
            </Navbar.Menu>
          </Navbar.Group>
          {isMobile &&
            menus().map((item) => (
              <Navbar.Group aria-label="Navigation" className="py-1" key={item.title}>
                <Header className="cn-sidebar-menu-button pointer-events-none mt-4 mb-2 font-semibold text-foreground">
                  {item.title}
                </Header>
                <Navbar.Menu className="gap-0.5">
                  {item.items?.map((item) => (
                    <Navbar.MenuItem key={item.slug}>
                      <Navbar.MenuButton href={item.slug} isActive={pathname === item.slug}>
                        {item.title}
                      </Navbar.MenuButton>
                    </Navbar.MenuItem>
                  ))}
                  {item.sections?.map((section) => (
                    <Fragment key={section.title}>
                      <Header className="cn-sidebar-menu-button pointer-events-none mt-4 mb-2 font-semibold text-foreground">
                        {section.title}
                      </Header>
                      {section.items?.map((item) => (
                        <Navbar.MenuItem key={item.slug}>
                          <Navbar.MenuButton href={item.slug} isActive={pathname === item.slug}>
                            {item.title}
                          </Navbar.MenuButton>
                        </Navbar.MenuItem>
                      ))}
                    </Fragment>
                  ))}
                </Navbar.Menu>
              </Navbar.Group>
            ))}
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
      </Navbar>
    </>
  )
}
