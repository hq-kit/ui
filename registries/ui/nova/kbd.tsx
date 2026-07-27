"use client"

import type { ComponentProps } from "react"
import { Keyboard } from "react-aria-components/Keyboard"
import { cn } from "@/lib/utils"

type ShortcutKeyResult = {
  symbol: string
  readable: string
}

const shortcutKeyMap: Record<string, ShortcutKeyResult> = {
  ctrl: { symbol: "⌃", readable: "Control" },
  mod: { symbol: "⌘", readable: "Command/Control" },
  win: { symbol: "⌘", readable: "Win" },
  meta: { symbol: "⌘", readable: "Meta" },
  alt: { symbol: "⌥", readable: "Option/Alt" },
  shift: { symbol: "⇧", readable: "Shift" },
  space: { symbol: "␣", readable: "Space" },
  tab: { symbol: "⇥", readable: "Tab" },
  delete: { symbol: "⌫", readable: "Delete" },
  capslock: { symbol: "⇪", readable: "Caps Lock" },
  up: { symbol: "↑", readable: "Up" },
  right: { symbol: "→", readable: "Right" },
  down: { symbol: "↓", readable: "Down" },
  left: { symbol: "←", readable: "Left" },
  pageup: { symbol: "⇞", readable: "Page Up" },
  pagedown: { symbol: "⇟", readable: "Page Down" },
  home: { symbol: "↖", readable: "Home" },
  end: { symbol: "↘", readable: "End" },
  enter: { symbol: "↵", readable: "Enter" },
  esc: { symbol: "⎋", readable: "Escape" },
  fn: { symbol: "Fn", readable: "Function" }
}

type Key = keyof typeof shortcutKeyMap

const getShortcutKey = (key: Key): ShortcutKeyResult =>
  shortcutKeyMap[key.toLowerCase()] || { symbol: key, readable: key }

const Kbd = ({ className, ...props }: ComponentProps<typeof Keyboard>) => (
  <Keyboard
    className={cn("bg-muted text-muted-foreground in-data-[slot=tooltip-content]:bg-background/20 in-data-[slot=tooltip-content]:text-background dark:in-data-[slot=tooltip-content]:bg-background/10 h-5 w-fit min-w-5 gap-1 rounded-sm px-1 font-sans text-xs font-medium [&_svg:not([class*='size-'])]:size-3 pointer-events-none inline-flex select-none items-center justify-center", className)}
    data-slot="kbd"
    {...props}
  >
    {String(props?.children).toLowerCase() in shortcutKeyMap
      ? getShortcutKey(String(props.children).toLowerCase()).symbol
      : props.children}
  </Keyboard>
)

const KbdGroup = ({ className, ...props }: ComponentProps<"div">) => (
  <kbd className={cn("gap-1 inline-flex items-center", className)} data-slot="kbd-group" {...props} />
)

export { Kbd, KbdGroup }
