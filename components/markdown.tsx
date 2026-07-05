"use client"

import type { ComponentProps } from "react"
import { code } from "@streamdown/code"
import { Streamdown } from "streamdown"
import { cn } from "@/lib/utils"

const DEFAULT_PLUGINS = { code }

function Markdown({
  className,
  plugins = DEFAULT_PLUGINS,
  controls = false,
  ...props
}: ComponentProps<typeof Streamdown>) {
  return (
    <Streamdown
      className={cn("cn-markdown w-full min-w-0 overflow-hidden", className)}
      controls={controls}
      data-slot="markdown"
      plugins={plugins}
      {...props}
    />
  )
}

export { Markdown }
