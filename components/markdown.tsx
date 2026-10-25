"use client"

import type { ComponentProps } from "react"
import { default as MDX } from "markdown-to-jsx/react"

export function Markdown(props: ComponentProps<typeof MDX>) {
  return <MDX {...props} />
}
