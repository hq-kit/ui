"use client"

import { useState } from "react"
import { IconBrandBun, IconBrandNpm, IconBrandPnpm, IconBrandYarn } from "@/components/icons"
import { CopyButton } from "@/components/mdx/copy-button"
import { useStyle } from "@/components/style-provider"
import { DropdownMenu } from "@/components/ui/dropdown-menu"
import { siteConfig } from "@/config/site"
import { copyToClipboard } from "@/lib/modifiers"

interface CLIProps {
  items?: string | string[]
  command: "add" | "install" | "init" | "execute"
  registered?: boolean
}

const url = `${siteConfig.url}/r`

export function CLI({ items, command = "add", registered }: CLIProps) {
  const [pm, setPm] = useState<"npm" | "yarn" | "pnpm" | "bun">("npm")
  const [copied, setCopied] = useState(false)

  const { style } = useStyle()

  const getCommandLine = (p: "npm" | "yarn" | "pnpm" | "bun") => {
    if (command === "add") {
      if (registered) {
        return Array.isArray(items) ? items.map((item) => ` @hq/${item}`).join(" ") : ` @hq/${items}`
      } else {
        return Array.isArray(items)
          ? items.map((item) => ` ${url}/styles/${style}/${item}`).join(" ")
          : ` ${url}/${style}/${items}`
      }
    }
    if (command === "install") {
      return ` ${p === "npm" ? "i" : "add"} ${Array.isArray(items) ? items.join(" ") : items}`
    }
    if (command === "execute") {
      return ` ${items}`
    }
    return ` ${url}/default`
  }

  const getPm = (p: "npm" | "yarn" | "pnpm" | "bun") => {
    if (command === "add") {
      switch (p) {
        case "npm":
          return "npx shadcn add"
        case "pnpm":
          return "pnpm dlx shadcn add"
        case "yarn":
          return "yarn dlx shadcn add"
        case "bun":
          return "bunx --bun shadcn add"
      }
    }
    if (command === "init") {
      switch (p) {
        case "npm":
          return "npx shadcn init"
        case "pnpm":
          return "pnpm dlx shadcn init"
        case "yarn":
          return "yarn dlx shadcn init"
        case "bun":
          return "bunx --bun shadcn init"
      }
    }
    if (command === "execute") {
      switch (p) {
        case "npm":
          return "npx"
        case "pnpm":
          return "pnpm dlx"
        case "yarn":
          return "yarn dlx"
        case "bun":
          return "bunx --bun"
      }
    }
    return p
  }

  const onAction = async (p: "npm" | "yarn" | "pnpm" | "bun") => {
    setPm(p)
    await copyToClipboard(`${getPm(p)}${getCommandLine(p)}`)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className="cn-item-size-sm cn-button-group-text no-scrollbar relative mt-4 flex items-center justify-between overflow-x-auto overflow-y-hidden border bg-[#eff1f5] pr-0 text-sm shadow-sm **:whitespace-nowrap dark:bg-[#1e1e2e]">
      <div className="font-mono!">
        <span className="text-[#1e66f5] dark:text-[#89B4FA]">{getPm(pm)}</span>
        <span className="text-[#40A02B] dark:text-[#A6E3A1]">{getCommandLine(pm)}</span>
      </div>
      <DropdownMenu>
        <CopyButton className="cn-alert-action sticky" data-icon="inline-end" isCopied={copied} />
        <DropdownMenu.Content offset={-6} placement="left top">
          <DropdownMenu.Item onPress={() => onAction("npm")}>
            <IconBrandNpm className="size-3.5" />
            NPM
          </DropdownMenu.Item>
          <DropdownMenu.Item onPress={() => onAction("yarn")}>
            <IconBrandYarn className="size-3.5" />
            Yarn
          </DropdownMenu.Item>
          <DropdownMenu.Item onPress={() => onAction("pnpm")}>
            <IconBrandPnpm className="size-3.5" />
            PNPM
          </DropdownMenu.Item>
          <DropdownMenu.Item onPress={() => onAction("bun")}>
            <IconBrandBun className="size-3.5" />
            Bun
          </DropdownMenu.Item>
        </DropdownMenu.Content>
      </DropdownMenu>
    </div>
  )
}
