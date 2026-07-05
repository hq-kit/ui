"use client"

import type { Ref } from "react"
import { composeRenderProps } from "react-aria-components/composeRenderProps"
import { ToggleButton, type ToggleButtonProps } from "react-aria-components/ToggleButton"
import { tv, type VariantProps } from "tailwind-variants"
import { cn } from "@/lib/utils"

const toggleVariants = tv({
  base: "cn-toggle group/toggle inline-flex items-center justify-center whitespace-nowrap outline-none hover:bg-muted focus-visible:ring-[3px] disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0",
  variants: {
    variant: {
      default: "cn-toggle-variant-default",
      outline: "cn-toggle-variant-outline"
    },
    size: {
      default: "cn-toggle-size-default",
      sm: "cn-toggle-size-sm",
      lg: "cn-toggle-size-lg"
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
