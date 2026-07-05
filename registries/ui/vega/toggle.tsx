"use client"

import type { Ref } from "react"
import { composeRenderProps } from "react-aria-components/composeRenderProps"
import { ToggleButton, type ToggleButtonProps } from "react-aria-components/ToggleButton"
import { tv, type VariantProps } from "tailwind-variants"
import { cn } from "@/lib/utils"

const toggleVariants = tv({
  base: "hover:text-foreground data-selected:bg-muted focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive gap-1 rounded-md text-sm font-medium transition-[color,box-shadow] [&_svg:not([class*='size-'])]:size-4 group/toggle inline-flex items-center justify-center whitespace-nowrap outline-none hover:bg-muted focus-visible:ring-[3px] disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0",
  variants: {
    variant: {
      default: "bg-transparent",
      outline: "border-input hover:bg-muted border bg-transparent shadow-xs"
    },
    size: {
      default: "h-9 min-w-9 px-2.5 has-data-[icon=inline-end]:pr-2 has-data-[icon=inline-start]:pl-2",
      sm: "h-8 min-w-8 px-2.5 has-data-[icon=inline-end]:pr-1.5 has-data-[icon=inline-start]:pl-1.5",
      lg: "h-10 min-w-10 px-2.5 has-data-[icon=inline-end]:pr-2 has-data-[icon=inline-start]:pl-2"
    }
  },
  defaultVariants: {
    variant: "default",
    size: "default"
  }
})

export interface ToggleProps extends ToggleButtonProps, VariantProps<typeof toggleVariants> {
  ref?: Ref<HTMLButtonElement>
}

const Toggle = ({ className, variant, size, ref, ...props }: ToggleProps) => (
  <ToggleButton
    className={composeRenderProps(className, (className) => cn(toggleVariants({ variant, size, className })))}
    data-slot="toggle"
    ref={ref}
    {...props}
  />
)

export { Toggle, toggleVariants }
