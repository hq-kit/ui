"use client"
import type { ComponentProps } from "react"
import { AppBreadcrumbs } from "@/components/blocks/landing-page-01/components/app-breadcrumbs"
import { navItems, teams, user } from "@/components/blocks/landing-page-01/components/data"
import { NavDocuments } from "@/components/blocks/landing-page-01/components/nav-documents"
import { NavMain } from "@/components/blocks/landing-page-01/components/nav-main"
import { NavSecondary } from "@/components/blocks/landing-page-01/components/nav-secondary"
import { NavUser } from "@/components/blocks/landing-page-01/components/nav-user"
import { TeamSwitcher } from "@/components/blocks/landing-page-01/components/team-switcher"
import { ThemeToggle } from "@/components/theme-toggle"
import { Navbar } from "@/components/ui/navbar"

export function AppNavbar(props: ComponentProps<typeof Navbar>) {
  return (
    <Navbar {...props}>
      <Navbar.Content>
        <Navbar.Header>
          <TeamSwitcher teams={teams} />
        </Navbar.Header>
        <NavMain items={navItems.navMain} />
        <NavDocuments items={navItems.documents} />
        <NavSecondary items={navItems.navSecondary} />
      </Navbar.Content>
      <AppBreadcrumbs />
      <Navbar.Actions>
        <ThemeToggle variant="ghost" />
        <NavUser user={user} />
      </Navbar.Actions>
    </Navbar>
  )
}
