"use client"

import { useState } from "react"
import { Sidebar } from "@/components/ui/sidebar"
import { navItems, teams, user } from "./data"
import { NavDocuments } from "./nav-documents"
import { NavMain } from "./nav-main"
import { NavSecondary } from "./nav-secondary"
import { NavUser } from "./nav-user"
import { SidebarControl, type Values } from "./sidebar-control"
import { TeamSwitcher } from "./team-switcher"

export function AppSidebar() {
  const [options, setOptions] = useState<Values>({
    variant: "sidebar",
    side: "left",
    collapsible: "offcanvas"
  })
  return (
    <>
      <SidebarControl onChange={setOptions} value={options} />
      <Sidebar {...options}>
        <Sidebar.Header>
          <TeamSwitcher teams={teams} />
          <Sidebar.Group className="px-0 py-0">
            <Sidebar.GroupContent className="relative">
              <Sidebar.Input />
            </Sidebar.GroupContent>
          </Sidebar.Group>
        </Sidebar.Header>
        <Sidebar.Content>
          <NavMain items={navItems.navMain} />
          <NavDocuments items={navItems.documents} />
          <NavSecondary className="mt-auto" items={navItems.navSecondary} />
        </Sidebar.Content>
        <Sidebar.Footer>
          <NavUser user={user} />
        </Sidebar.Footer>
      </Sidebar>
    </>
  )
}
