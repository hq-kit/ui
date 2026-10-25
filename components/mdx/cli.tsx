"use client"

import { cn } from "cn"
import { useState } from "react"
import { BrandIcon } from "@/components/icons"
import { DropdownMenu } from "@/components/ui/dropdown-menu"
import { siteConfig } from "@/config/site"
import { copyToClipboard } from "@/lib/modifiers"
import { CopyButton } from "./copy-button"

interface CLIProps {
  items?: string | string[]
  command: "add" | "install" | "init" | "execute"
  registered?: boolean
  className?: string
}

const url = `${siteConfig.url}/r`

export function CLI({ items, command = "add", registered, className }: CLIProps) {
  const [pm, setPm] = useState<"npm" | "yarn" | "pnpm" | "bun">("npm")
  const [copied, setCopied] = useState(false)

  const getCommandLine = (p: "npm" | "yarn" | "pnpm" | "bun") => {
    if (command === "add") {
      if (registered) {
        return Array.isArray(items) ? items.map((item) => ` @hq/${item}`).join(" ") : ` @hq/${items}`
      } else {
        return Array.isArray(items) ? items.map((item) => ` ${url}/${item}`).join(" ") : ` ${url}/${items}`
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
    <div
      className={cn(
        "flex w-full items-center justify-between rounded-lg border bg-[#eff1f5] p-1 text-xs shadow-sm sm:text-sm dark:bg-[#1e1e2e]",
        className
      )}
      data-theme={""}
    >
      <p className="pl-2 font-mono break-all">
        <span className="text-[#1e66f5] dark:text-[#89B4FA]">{getPm(pm)}</span>
        <span className="text-[#40A02B] dark:text-[#A6E3A1]">{getCommandLine(pm)}</span>
      </p>
      <DropdownMenu>
        <CopyButton isCopied={copied} size={"icon-sm"} />
        <DropdownMenu.Content placement="left top">
          <DropdownMenu.Item onPress={() => onAction("npm")}>
            <BrandIcon name="npm" />
            NPM
          </DropdownMenu.Item>
          <DropdownMenu.Item onPress={() => onAction("yarn")}>
            <BrandIcon name="yarn" />
            Yarn
          </DropdownMenu.Item>
          <DropdownMenu.Item onPress={() => onAction("pnpm")}>
            <BrandIcon name="pnpm" />
            PNPM
          </DropdownMenu.Item>
          <DropdownMenu.Item onPress={() => onAction("bun")}>
            <BrandIcon name="bun" />
            Bun
          </DropdownMenu.Item>
        </DropdownMenu.Content>
      </DropdownMenu>
    </div>
  )
}
