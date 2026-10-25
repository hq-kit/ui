"use client"

import { Pressable } from "react-aria-components"
import { ContextMenu, ContextMenuContent, ContextMenuGroup, ContextMenuItem } from "@/components/ui/context-menu"

export default function ContextMenuBasic() {
  return (
    <ContextMenu>
      <Pressable>
        <div className="flex aspect-video w-full max-w-xs items-center justify-center rounded-xl border border-dashed text-sm">
          <span className="hidden pointer-fine:inline-block">Right click here</span>
          <span className="hidden pointer-coarse:inline-block">Long press here</span>
        </div>
      </Pressable>
      <ContextMenuContent>
        <ContextMenuGroup>
          <ContextMenuItem>Back</ContextMenuItem>
          <ContextMenuItem isDisabled>Forward</ContextMenuItem>
          <ContextMenuItem>Reload</ContextMenuItem>
        </ContextMenuGroup>
      </ContextMenuContent>
    </ContextMenu>
  )
}
