"use client"

import type { SeparatorProps } from "react-aria-components/Separator"
import { Separator as RACSeparator } from "react-aria-components/Separator"
import { cn } from "@/lib/utils"

const Separator = ({ className, orientation = "horizontal", ...props }: SeparatorProps) => (
  <RACSeparator
    className={cn(
      "block shrink-0 border-0 bg-border aria-[orientation=horizontal]:h-px aria-[orientation=horizontal]:w-full aria-[orientation=vertical]:w-px aria-[orientation=vertical]:self-stretch [:is(hr)]:h-px [:is(hr)]:w-full",
      className
    )}
    data-slot="separator"
    orientation={orientation}
    {...props}
  />
)

export { Separator }
