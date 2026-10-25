"use client"

import type { Team } from "./data"
import { useState } from "react"
import { IconPlaceholder } from "@/components/icon-placeholder"
import { DropdownMenu } from "@/components/ui/dropdown-menu"
import { Sidebar, useSidebar } from "@/components/ui/sidebar"

export function TeamSwitcher({ teams }: { teams: Team[] }) {
  const { isMobile } = useSidebar()
  const [activeTeam, setActiveTeam] = useState(teams[0])

  if (!activeTeam) {
    return null
  }

  return (
    <Sidebar.Menu>
      <Sidebar.MenuItem>
        <DropdownMenu>
          <Sidebar.MenuButton
            className="data-expanded:bg-sidebar-accent data-expanded:text-sidebar-accent-foreground"
            size="lg"
          >
            <div className="flex aspect-square size-8 items-center justify-center rounded-lg bg-sidebar-primary text-sidebar-primary-foreground">
              {activeTeam.logo ? (
                <activeTeam.logo className="size-4" />
              ) : (
                <IconPlaceholder
                  className="size-4"
                  hugeicons="CircleIcon"
                  lucide="CircleIcon"
                  phosphor="CircleIcon"
                  remixicon="RiCircleLine"
                  tabler="IconCircle"
                />
              )}
            </div>
            <div className="grid flex-1 text-left text-sm leading-tight">
              <span className="truncate font-medium">{activeTeam.name}</span>
              <span className="truncate text-xs">{activeTeam.plan}</span>
            </div>
            <IconPlaceholder
              className="ml-auto"
              hugeicons="UnfoldMoreIcon"
              lucide="ChevronsUpDownIcon"
              phosphor="CaretUpDownIcon"
              remixicon="RiExpandUpDownLine"
              tabler="IconSelector"
            />
          </Sidebar.MenuButton>
          <DropdownMenu.Content className="min-w-56" offset={4} placement={isMobile ? "bottom start" : "right top"}>
            <DropdownMenu.Label className="text-muted-foreground text-xs">Teams</DropdownMenu.Label>
            {teams.map((team, index) => (
              <DropdownMenu.Item className="gap-2 p-2" key={team.name} onAction={() => setActiveTeam(team)}>
                <div className="flex size-6 items-center justify-center rounded-md border">
                  {team.logo ? (
                    <team.logo className="size-3.5 shrink-0" />
                  ) : (
                    <IconPlaceholder
                      className="size-3.5 shrink-0"
                      hugeicons="CircleIcon"
                      lucide="CircleIcon"
                      phosphor="CircleIcon"
                      remixicon="RiCircleLine"
                      tabler="IconCircle"
                    />
                  )}
                </div>
                {team.name}
                <DropdownMenu.Shortcut>⌘{index + 1}</DropdownMenu.Shortcut>
              </DropdownMenu.Item>
            ))}
            <DropdownMenu.Separator />
            <DropdownMenu.Item className="gap-2 p-2">
              <div className="flex size-6 items-center justify-center rounded-md border bg-transparent">
                <IconPlaceholder
                  className="size-4"
                  hugeicons="PlusSignIcon"
                  lucide="PlusIcon"
                  phosphor="PlusIcon"
                  remixicon="RiAddLine"
                  tabler="IconPlus"
                />
              </div>
              <div className="font-medium text-muted-foreground">Add team</div>
            </DropdownMenu.Item>
          </DropdownMenu.Content>
        </DropdownMenu>
      </Sidebar.MenuItem>
    </Sidebar.Menu>
  )
}
