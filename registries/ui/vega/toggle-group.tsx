"use client"

import type { Selection } from "react-aria-components"
import type { VariantProps } from "tailwind-variants"
import { type CSSProperties, createContext, type Ref, use } from "react"
import { composeRenderProps } from "react-aria-components/composeRenderProps"
import {
  ToggleButton,
  ToggleButtonGroup,
  type ToggleButtonGroupProps,
  type ToggleButtonProps
} from "react-aria-components/ToggleButtonGroup"
import { cn } from "@/lib/utils"
import { toggleVariants } from "./toggle"

const ToggleGroupContext = createContext<
  VariantProps<typeof toggleVariants> & {
    spacing?: number
    orientation?: "horizontal" | "vertical"
  }
>({
  size: "default",
  variant: "default",
  spacing: 0,
  orientation: "horizontal"
})

const ToggleGroup = ({
  className,
  variant,
  size,
  spacing = 2,
  ...props
}: ToggleButtonGroupProps &
  VariantProps<typeof toggleVariants> & {
    spacing?: number
  }) => (
  <ToggleGroupContext.Provider value={{ variant, size, spacing, orientation: props.orientation }}>
    <ToggleButtonGroup
      className={composeRenderProps(className, (className) =>
        cn(
          "rounded-md data-[spacing=0]:data-[variant=outline]:shadow-xs group/toggle-group flex w-fit flex-row items-center gap-[--spacing(var(--gap))] data-[orientation=vertical]:flex-col data-[orientation=vertical]:items-stretch",
          className
        )
      )}
      data-size={size}
      data-slot="toggle-group"
      data-spacing={spacing}
      data-variant={variant}
      style={{ "--gap": spacing } as CSSProperties}
      {...props}
    />
  </ToggleGroupContext.Provider>
)

const ToggleGroupItem = ({
  className,
  variant = "default",
  size = "default",
  ref,
  ...props
}: ToggleButtonProps & VariantProps<typeof toggleVariants> & { ref?: Ref<HTMLButtonElement> }) => {
  const context = use(ToggleGroupContext)

  return (
    <ToggleButton
      className={cn(
        toggleVariants({
          variant: context.variant || variant,
          size: context.size || size,
          className:
            "data-[state=on]:bg-muted group-data-[spacing=0]/toggle-group:rounded-none group-data-[spacing=0]/toggle-group:px-2 group-data-[spacing=0]/toggle-group:shadow-none group-data-[spacing=0]/toggle-group:has-data-[icon=inline-end]:pr-1.5 group-data-[spacing=0]/toggle-group:has-data-[icon=inline-start]:pl-1.5 group-data-[orientation=horizontal]/toggle-group:data-[spacing=0]:first:rounded-l-md group-data-[orientation=vertical]/toggle-group:data-[spacing=0]:first:rounded-t-md group-data-[orientation=horizontal]/toggle-group:data-[spacing=0]:last:rounded-r-md group-data-[orientation=vertical]/toggle-group:data-[spacing=0]:last:rounded-b-md shrink-0 focus:z-10 focus-visible:z-10 group-data-[orientation=vertical]/toggle-group:data-[spacing=0]:data-[variant=outline]:border-t-0 group-data-[orientation=horizontal]/toggle-group:data-[spacing=0]:data-[variant=outline]:border-l-0 group-data-[orientation=vertical]/toggle-group:data-[spacing=0]:data-[variant=outline]:first:border-t group-data-[orientation=horizontal]/toggle-group:data-[spacing=0]:data-[variant=outline]:first:border-l"
        }),
        className
      )}
      data-orientation={context.orientation}
      data-size={context.size || size}
      data-slot="toggle-group-item"
      data-spacing={context.spacing}
      data-variant={context.variant || variant}
      ref={ref}
      {...props}
    />
  )
}

ToggleGroup.Item = ToggleGroupItem

export type { Selection }
export { ToggleGroup, ToggleGroupItem }
