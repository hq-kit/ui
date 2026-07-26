"use client"

import { useState } from "react"
import { Pressable, type Selection } from "react-aria-components"
import { ContextMenu, ContextMenuContent, ContextMenuGroup, ContextMenuItem } from "@/components/ui/context-menu"

export default function ContextMenuCheckboxes() {
  const [selectedKeys, setSelectedKeys] = useState<Selection>(new Set(["bookmarks-bar", "developer-tools"]))

  return (
    <ContextMenu>
      <Pressable>
        <div className="flex aspect-video w-full max-w-xs items-center justify-center rounded-xl border border-dashed text-sm">
          <span className="pointer-fine:inline-block hidden">Right click here</span>
          <span className="pointer-coarse:inline-block hidden">Long press here</span>
        </div>
      </Pressable>
      <ContextMenuContent>
        <ContextMenuGroup onSelectionChange={setSelectedKeys} selectedKeys={selectedKeys} selectionMode="multiple">
          <ContextMenuItem id="bookmarks-bar">Show Bookmarks Bar</ContextMenuItem>
          <ContextMenuItem>Show Full URLs</ContextMenuItem>
          <ContextMenuItem id="developer-tools">Show Developer Tools</ContextMenuItem>
        </ContextMenuGroup>
      </ContextMenuContent>
    </ContextMenu>
  )
}
