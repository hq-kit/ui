"use client"

import { composeRenderProps } from "react-aria-components/composeRenderProps"
import { type DropZoneProps, DropZone as RACDropZone } from "react-aria-components/DropZone"
import { cn } from "@/lib/utils"

const DropZone = ({ className, ...props }: DropZoneProps) => (
  <RACDropZone
    className={composeRenderProps(className, (className) =>
      cn(
        "gap-4 rounded-lg border-dashed p-12 group flex max-h-50 max-w-xl flex-col items-center justify-center border text-sm outline-hidden transition duration-200 has-[[slot=description]]:text-center",
        "drop-target:border-solid data-drop-target:border-primary data-drop-target:bg-primary/10 data-drop-target:ring-4 data-drop-target:ring-ring/50 data-drop-target:[&_.text-muted-foreground]:text-primary",
        "hover:border-ring focus:border-primary/70 focus:outline-hidden focus:ring-4 focus:ring-ring/50 focus:data-invalid:border-destructive/70 focus:data-invalid:ring-destructive/50",
        "focus-visible:ring-4 focus-visible:ring-ring/50",
        className
      )
    )}
    {...props}
  />
)

export { DropZone }
