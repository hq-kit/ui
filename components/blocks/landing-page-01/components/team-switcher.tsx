"use client"

import type { Team } from "./data"
import { useState } from "react"
import { IconPlaceholder } from "@/components/icon-placeholder"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut
} from "@/components/ui/dropdown-menu"
import { NavbarMenu, NavbarMenuButton, NavbarMenuItem } from "@/components/ui/navbar"

export function TeamSwitcher({ teams }: { teams: Team[] }) {
  const [activeTeam, setActiveTeam] = useState(teams[0])

  if (!activeTeam) {
    return null
  }

  return (
    <NavbarMenu>
      <NavbarMenuItem>
        <DropdownMenu>
          <NavbarMenuButton
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
              <span className="whitespace-nowrap font-medium">{activeTeam.name}</span>
              <span className="whitespace-nowrap text-xs">{activeTeam.plan}</span>
            </div>
            <IconPlaceholder
              className="ml-auto"
              hugeicons="UnfoldMoreIcon"
              lucide="ChevronsUpDownIcon"
              phosphor="CaretUpDownIcon"
              remixicon="RiExpandUpDownLine"
              tabler="IconSelector"
            />
          </NavbarMenuButton>
          <DropdownMenuContent className="min-w-56" placement="bottom start">
            <DropdownMenuLabel className="text-muted-foreground text-xs">Teams</DropdownMenuLabel>
            {teams.map((team, index) => (
              <DropdownMenuItem className="gap-2 p-2" key={team.name} onAction={() => setActiveTeam(team)}>
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
                <DropdownMenuShortcut>⌘{index + 1}</DropdownMenuShortcut>
              </DropdownMenuItem>
            ))}
            <DropdownMenuSeparator />
            <DropdownMenuItem className="gap-2 p-2">
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
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </NavbarMenuItem>
    </NavbarMenu>
  )
}
