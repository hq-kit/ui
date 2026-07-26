"use client"

import type { Ref } from "react"
import { composeRenderProps } from "react-aria-components/composeRenderProps"
import { ToggleButton as RACToggle, type ToggleButtonProps } from "react-aria-components/ToggleButton"
import { tv, type VariantProps } from "tailwind-variants"
import { cn } from "@/lib/utils"

const toggleVariants = tv({
  base: "group/toggle inline-flex items-center justify-center gap-1.5 whitespace-nowrap rounded-none font-semibold text-xs uppercase tracking-widest outline-none transition-colors hover:bg-muted hover:text-foreground focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/30 disabled:pointer-events-none disabled:opacity-50 aria-pressed:bg-muted aria-invalid:border-destructive aria-invalid:ring-destructive/20 data-selected:bg-muted dark:aria-invalid:ring-destructive/40 [&_svg:not([class*='size-'])]:size-3.5 [&_svg]:pointer-events-none [&_svg]:shrink-0",
  variants: {
    variant: {
      default: "bg-transparent",
      outline: "border border-input bg-transparent hover:bg-muted"
    },
    size: {
      default: "h-10 min-w-10 px-6 has-data-[icon=inline-end]:pr-4 has-data-[icon=inline-start]:pl-4",
      sm: "h-9 min-w-9 px-4 has-data-[icon=inline-end]:pr-3 has-data-[icon=inline-start]:pl-3",
      lg: "h-11 min-w-11 px-8 has-data-[icon=inline-end]:pr-5 has-data-[icon=inline-start]:pl-5"
    }
  },
  defaultVariants: {
    variant: "default",
    size: "default"
  }
})

const Toggle = ({
  className,
  variant = "default",
  size = "default",
  ...props
}: ToggleButtonProps & VariantProps<typeof toggleVariants> & { ref?: Ref<HTMLButtonElement> }) => (
  <RACToggle
    className={composeRenderProps(className, (className) => cn(toggleVariants({ variant, size, className })))}
    data-slot="toggle"
    {...props}
  />
)

export { Toggle, toggleVariants }
