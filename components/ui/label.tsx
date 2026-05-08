"use client"

import { type LabelProps, Label as RACLabel } from "react-aria-components/Label"
import { cn } from "@/lib/utils"

function Label({ className, ...props }: LabelProps) {
  return (
    <RACLabel
      className={cn(
        "group/field-label peer/field-label flex w-fit select-none items-center gap-2 font-medium in-data-[slot=checkbox]:font-normal in-data-invalid:text-destructive text-sm leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-50 group-data-[disabled=true]:pointer-events-none group-data-[disabled=true]/field:opacity-50 group-data-[disabled=true]:opacity-50",
        "has-[>[data-slot=field]]:w-full has-[>[data-slot=field]]:flex-col has-[>[data-slot=field]]:rounded-md has-[>[data-slot=field]]:border *:data-[slot=field]:p-4",
        "has-data-selected:border-primary has-data-selected:bg-primary/5 dark:has-data-selected:bg-primary/10",
        className
      )}
      data-slot="field-label"
      {...props}
    />
  )
}

export { Label }
