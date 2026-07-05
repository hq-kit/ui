"use client"

import { type LabelProps, Label as RACLabel } from "react-aria-components/Label"
import { cn } from "@/lib/utils"

function Label({ className, ...props }: LabelProps) {
  return (
    <RACLabel
      className={cn(
        "gap-2 font-semibold peer-data-[slot=checkbox]:text-sm peer-data-[slot=radio-group-item]:text-sm peer-data-[slot=switch]:text-sm leading-relaxed group-data-[disabled=true]:opacity-50 peer-disabled:opacity-50 peer-data-[slot=checkbox]:font-normal peer-data-[slot=radio-group-item]:font-normal peer-data-[slot=switch]:font-normal uppercase text-xs tracking-wide peer-data-[slot=checkbox]:normal-case peer-data-[slot=checkbox]:tracking-normal peer-data-[slot=radio-group-item]:normal-case peer-data-[slot=radio-group-item]:tracking-normal peer-data-[slot=switch]:normal-case peer-data-[slot=switch]:tracking-normal flex select-none items-center group-data-disabled/field:pointer-events-none group-data-disabled/field:cursor-not-allowed",
        className
      )}
      data-slot="field-label"
      {...props}
    />
  )
}

export { Label }
