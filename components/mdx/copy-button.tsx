"use client"

import type { ComponentProps } from "react"
import { IconPlaceholder } from "@/components/icon-placeholder"
import { Button } from "@/components/ui/button"
import { Tooltip } from "@/components/ui/tooltip"
import { cn } from "@/lib/utils"

interface CopyButtonProps extends ComponentProps<typeof Button> {
  isCopied?: boolean
}

export const CopyButton = ({ isCopied, ...props }: CopyButtonProps) => {
  return (
    <Tooltip>
      <Button aria-label="Copy" size="icon-sm" variant="secondary" {...props}>
        <IconPlaceholder
          className={cn("size-4 rotate-0 scale-100 transition-all duration-200", isCopied && "rotate-90 scale-0")}
          hugeicons="CopyIcon"
          lucide="CopyIcon"
          phosphor="CopyIcon"
          remixicon="RiFileCopyLine"
          tabler="IconCopy"
        />
        <IconPlaceholder
          className={cn(
            "absolute size-4 rotate-90 scale-0 transition-all duration-200",
            isCopied && "rotate-0 scale-100"
          )}
          hugeicons="Tick02Icon"
          lucide="CheckIcon"
          phosphor="CheckIcon"
          remixicon="RiCheckLine"
          tabler="IconCheck"
        />
      </Button>
      <Tooltip.Content>Copy to clipboard</Tooltip.Content>
    </Tooltip>
  )
}
