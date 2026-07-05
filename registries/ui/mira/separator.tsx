"use client"

import { Separator as RACSeparator, type SeparatorProps } from "react-aria-components/Separator"
import { cn } from "@/lib/utils"

const Separator = ({ className, orientation = "horizontal", ...props }: SeparatorProps) => (
  <RACSeparator
    className={cn("shrink-0 bg-border", orientation === "horizontal" ? "h-px w-full" : "w-px self-stretch", className)}
    data-slot="separator"
    orientation={orientation}
    {...props}
  />
)

export { Separator, type SeparatorProps }
