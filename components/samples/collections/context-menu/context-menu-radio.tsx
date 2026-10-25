"use client"

import * as React from "react"
import { Pressable } from "react-aria-components"
import {
  ContextMenu,
  ContextMenuContent,
  ContextMenuGroup,
  ContextMenuItem,
  ContextMenuLabel,
  ContextMenuSeparator
} from "@/components/ui/context-menu"

export default function ContextMenuRadio() {
  const [user, setUser] = React.useState("pedro")
  const [theme, setTheme] = React.useState("light")

  return (
    <ContextMenu>
      <Pressable>
        <div className="flex aspect-video w-full max-w-xs items-center justify-center rounded-xl border border-dashed text-sm">
          <span className="pointer-fine:inline-block hidden">Right click here</span>
          <span className="pointer-coarse:inline-block hidden">Long press here</span>
        </div>
      </Pressable>
      <ContextMenuContent>
        <ContextMenuGroup
          onSelectionChange={(keys) => setUser(keys === "all" ? "pedro" : (keys.values().next().value as string))}
          selectedKeys={[user]}
          selectionMode="single"
        >
          <ContextMenuLabel>People</ContextMenuLabel>
          <ContextMenuItem id="pedro">Pedro Duarte</ContextMenuItem>
          <ContextMenuItem id="colm">Colm Tuite</ContextMenuItem>
        </ContextMenuGroup>
        <ContextMenuSeparator />
        <ContextMenuGroup
          onSelectionChange={(keys) => setTheme(keys === "all" ? "system" : (keys.values().next().value as string))}
          selectedKeys={[theme]}
          selectionMode="single"
        >
          <ContextMenuLabel>Theme</ContextMenuLabel>
          <ContextMenuItem id="light">Light</ContextMenuItem>
          <ContextMenuItem id="dark">Dark</ContextMenuItem>
          <ContextMenuItem id="system">System</ContextMenuItem>
        </ContextMenuGroup>
      </ContextMenuContent>
    </ContextMenu>
  )
}
