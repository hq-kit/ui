"use client"

import { Pressable } from "react-aria-components"
import { ContextMenu, ContextMenuContent, ContextMenuGroup, ContextMenuItem } from "@/components/ui/context-menu"

export default function ContextMenuSides() {
  return (
    <div className="grid w-full max-w-sm grid-cols-2 gap-4">
      <ContextMenu>
        <Pressable>
          <div className="flex aspect-video w-full max-w-xs items-center justify-center rounded-xl border border-dashed text-sm">
            <span className="pointer-fine:inline-block hidden">Right click (top)</span>
            <span className="pointer-coarse:inline-block hidden">Long press (top)</span>
          </div>
        </Pressable>
        <ContextMenuContent placement="top start">
          <ContextMenuGroup>
            <ContextMenuItem>Back</ContextMenuItem>
            <ContextMenuItem>Forward</ContextMenuItem>
            <ContextMenuItem>Reload</ContextMenuItem>
          </ContextMenuGroup>
        </ContextMenuContent>
      </ContextMenu>
      <ContextMenu>
        <Pressable>
          <div className="flex aspect-video w-full max-w-xs items-center justify-center rounded-xl border border-dashed text-sm">
            <span className="pointer-fine:inline-block hidden">Right click (right)</span>
            <span className="pointer-coarse:inline-block hidden">Long press (right)</span>
          </div>
        </Pressable>
        <ContextMenuContent placement="right top">
          <ContextMenuGroup>
            <ContextMenuItem>Back</ContextMenuItem>
            <ContextMenuItem>Forward</ContextMenuItem>
            <ContextMenuItem>Reload</ContextMenuItem>
          </ContextMenuGroup>
        </ContextMenuContent>
      </ContextMenu>
      <ContextMenu>
        <Pressable>
          <div className="flex aspect-video w-full max-w-xs items-center justify-center rounded-xl border border-dashed text-sm">
            <span className="pointer-fine:inline-block hidden">Right click (bottom)</span>
            <span className="pointer-coarse:inline-block hidden">Long press (bottom)</span>
          </div>
        </Pressable>
        <ContextMenuContent placement="bottom start">
          <ContextMenuGroup>
            <ContextMenuItem>Back</ContextMenuItem>
            <ContextMenuItem>Forward</ContextMenuItem>
            <ContextMenuItem>Reload</ContextMenuItem>
          </ContextMenuGroup>
        </ContextMenuContent>
      </ContextMenu>
      <ContextMenu>
        <Pressable>
          <div className="flex aspect-video w-full max-w-xs items-center justify-center rounded-xl border border-dashed text-sm">
            <span className="pointer-fine:inline-block hidden">Right click (left)</span>
            <span className="pointer-coarse:inline-block hidden">Long press (left)</span>
          </div>
        </Pressable>
        <ContextMenuContent placement="left top">
          <ContextMenuGroup>
            <ContextMenuItem>Back</ContextMenuItem>
            <ContextMenuItem>Forward</ContextMenuItem>
            <ContextMenuItem>Reload</ContextMenuItem>
          </ContextMenuGroup>
        </ContextMenuContent>
      </ContextMenu>
    </div>
  )
}
