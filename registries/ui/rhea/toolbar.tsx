"use client"

import { type ComponentProps, type CSSProperties, createContext, use, useContext } from "react"
import { composeRenderProps } from "react-aria-components/composeRenderProps"
import { useSlottedContext } from "react-aria-components/slots"
import {
  ToggleButtonGroup,
  ToggleButtonGroupContext,
  type ToggleButtonGroupProps
} from "react-aria-components/ToggleButtonGroup"
import { Toolbar as RACToolbar, type ToolbarProps } from "react-aria-components/Toolbar"
import { cn } from "@/lib/utils"
import { Separator } from "./separator"
import { Toggle } from "./toggle"

const ToolbarContext = createContext<ToolbarProps>({
  orientation: "horizontal"
})

const Toolbar = ({
  orientation = "horizontal",
  spacing = 2,
  className,
  ...props
}: ToolbarProps & {
  spacing?: number
}) => (
  <ToolbarContext.Provider value={{ orientation }}>
    <RACToolbar
      orientation={orientation}
      style={{ "--gap": spacing } as CSSProperties}
      {...props}
      className={composeRenderProps(className, (className) =>
        cn(
          "data-[spacing=0]:data-[variant=outline]:rounded-2xl group/toolbar flex gap-[--spacing(var(--gap))] data-[orientation=vertical]:flex-col data-[orientation=vertical]:items-stretch",
          className
        )
      )}
    />
  </ToolbarContext.Provider>
)

const ToolbarGroup = ({ className, ...props }: ToggleButtonGroupProps) => {
  const { orientation } = use(ToolbarContext)
  return (
    <ToggleButtonGroupContext.Provider value={{ isDisabled: props.isDisabled }}>
      <ToggleButtonGroup
        className="group/toggle-group flex gap-1.5 group-data-[orientation=vertical]/toolbar:flex-col group-data-[orientation=vertical]/toolbar:items-start group-data-[orientation=horizontal]/toolbar:items-center"
        data-orientation={orientation}
        {...props}
      />
    </ToggleButtonGroupContext.Provider>
  )
}

const ToolbarItem = ({ size = "sm", variant = "outline", ref, className, ...props }: ComponentProps<typeof Toggle>) => {
  const groupContext = useSlottedContext(ToggleButtonGroupContext)
  const isDisabled = groupContext?.isDisabled || props.isDisabled
  return <Toggle data-slot="toolbar-item" isDisabled={isDisabled} ref={ref} size={size} variant={variant} {...props} />
}

const ToolbarSeparator = ({ className, ...props }: ComponentProps<typeof Separator>) => {
  const { orientation } = useContext(ToolbarContext)
  const reverseOrientation = orientation === "vertical" ? "horizontal" : "vertical"
  return <Separator orientation={reverseOrientation} {...props} />
}

export type { ToolbarProps }
export { Toolbar, ToolbarGroup, ToolbarItem, ToolbarSeparator }
