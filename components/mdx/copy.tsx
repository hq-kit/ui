"use client"

import type { ComponentProps, ReactNode } from "react"
import { cn } from "cn"
import { useState } from "react"
import { IconPlaceholder } from "@/components/icon-placeholder"
import { Button } from "@/components/ui/button"
import { Tooltip } from "@/components/ui/tooltip"
import { copyToClipboard } from "@/lib/modifiers"

interface CopyButtonProps extends ComponentProps<typeof Button> {
  isCopied?: boolean
}

export const CopyButton = ({ isCopied, ...props }: CopyButtonProps) => {
  return (
    <Tooltip>
      <Button aria-label="Copy" size={props.size ?? "icon-sm"} variant={props.variant ?? "secondary"} {...props}>
        <IconPlaceholder
          className={cn("rotate-0 scale-100 transition-all duration-200", isCopied && "absolute rotate-90 scale-0")}
          hugeicons="CopyIcon"
          lucide="CopyIcon"
          phosphor="CopyIcon"
          remixicon="RiFileCopyLine"
          tabler="IconCopy"
        />
        <IconPlaceholder
          className={cn(
            "absolute rotate-90 scale-0 transition-all duration-200",
            isCopied && "relative rotate-0 scale-100"
          )}
          hugeicons="Tick02Icon"
          lucide="CheckIcon"
          phosphor="CheckIcon"
          remixicon="RiCheckLine"
          tabler="IconCheck"
        />
        {props?.children as ReactNode}
      </Button>
      <Tooltip.Content>Copy to clipboard</Tooltip.Content>
    </Tooltip>
  )
}

interface CodeCopyProps {
  code: string
  className?: string
}

export const CodeCopy = ({ code, className }: CodeCopyProps) => {
  const [copied, setCopied] = useState(false)

  const copyCode = async () => {
    await copyToClipboard(code).then(() => {
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    })
  }

  return <CopyButton className={className} isCopied={copied} onPress={copyCode} />
}
