"use client"

import { type LabelProps, Label as RACLabel } from "react-aria-components/Label"
import { cn } from "@/lib/utils"

function Label({ className, ...props }: LabelProps) {
  return (
    <RACLabel
      className={cn(
        "gap-2 text-sm leading-none font-medium in-data-disabled:opacity-50 flex select-none items-center group-data-disabled/field:pointer-events-none group-data-disabled/field:cursor-not-allowed",
        className
      )}
      data-slot="field-label"
      {...props}
    />
  )
}

export { Label }
