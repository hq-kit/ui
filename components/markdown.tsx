"use client"

import type { ComponentProps } from "react"
import { Streamdown } from "streamdown"
import { cn } from "@/lib/utils"

function Markdown({ className, controls = false, ...props }: ComponentProps<typeof Streamdown>) {
  return (
    <Streamdown
      className={cn("cn-markdown w-full min-w-0 overflow-hidden", className)}
      controls={controls}
      data-slot="markdown"
      {...props}
    />
  )
}

export { Markdown }
