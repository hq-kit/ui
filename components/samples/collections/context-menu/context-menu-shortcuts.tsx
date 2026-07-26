"use client"

import { Pressable } from "react-aria-components"
import {
  ContextMenu,
  ContextMenuContent,
  ContextMenuGroup,
  ContextMenuItem,
  ContextMenuSeparator,
  ContextMenuShortcut
} from "@/components/ui/context-menu"

export default function ContextMenuShortcuts() {
  return (
    <ContextMenu>
      <Pressable>
        <div className="flex aspect-video w-full max-w-xs items-center justify-center rounded-xl border border-dashed text-sm">
          <span className="pointer-fine:inline-block hidden">Right click here</span>
          <span className="pointer-coarse:inline-block hidden">Long press here</span>
        </div>
      </Pressable>
      <ContextMenuContent>
        <ContextMenuGroup>
          <ContextMenuItem>
            Back
            <ContextMenuShortcut>⌘[</ContextMenuShortcut>
          </ContextMenuItem>
          <ContextMenuItem isDisabled>
            Forward
            <ContextMenuShortcut>⌘]</ContextMenuShortcut>
          </ContextMenuItem>
          <ContextMenuItem>
            Reload
            <ContextMenuShortcut>⌘R</ContextMenuShortcut>
          </ContextMenuItem>
        </ContextMenuGroup>
        <ContextMenuSeparator />
        <ContextMenuGroup>
          <ContextMenuItem>
            Save
            <ContextMenuShortcut>⌘S</ContextMenuShortcut>
          </ContextMenuItem>
          <ContextMenuItem>
            Save As...
            <ContextMenuShortcut>⇧⌘S</ContextMenuShortcut>
          </ContextMenuItem>
        </ContextMenuGroup>
      </ContextMenuContent>
    </ContextMenu>
  )
}
