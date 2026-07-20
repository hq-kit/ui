"use client"

import { Children, type ComponentProps, type ReactNode } from "react"
import {
  Focusable,
  OverlayArrow,
  Tooltip as TooltipPrimitive,
  TooltipTrigger as TooltipTriggerPrimitive
} from "react-aria-components"
import { cn } from "@/lib/utils"

function Tooltip({ delay = 0, children, ...props }: ComponentProps<typeof TooltipTriggerPrimitive>) {
  const [trigger, tooltip] = Children.toArray(children)

  return (
    <TooltipTriggerPrimitive data-slot="tooltip-trigger" delay={delay} {...props}>
      <Focusable>{trigger as ComponentProps<typeof Focusable>["children"]}</Focusable>
      {tooltip}
    </TooltipTriggerPrimitive>
  )
}

function TooltipContent({
  className,
  placement = "top",
  offset = 4,
  crossOffset = 0,
  children,
  ...props
}: Omit<ComponentProps<typeof TooltipPrimitive>, "children" | "className"> & {
  className?: string
  children?: ReactNode
}) {
  return (
    <TooltipPrimitive
      className={cn(
        "cn-tooltip-content-aria group z-50 w-fit max-w-xs origin-(--trigger-anchor-point) bg-foreground text-background",
        className
      )}
      crossOffset={crossOffset}
      data-slot="tooltip-content"
      offset={offset}
      placement={placement}
      {...props}
    >
      {children}
      <OverlayArrow
        className="cn-tooltip-arrow z-50 bg-foreground fill-foreground"
        style={({ placement, defaultStyle }) => ({
          ...defaultStyle,
          rotate: "0deg",
          translate: "0 0",
          transform:
            placement === "bottom"
              ? "translate(-50%, calc(50% + 2px)) rotate(45deg)"
              : placement === "top"
                ? "translate(-50%, calc(-50% - 2px)) rotate(45deg)"
                : placement === "left"
                  ? "translate(calc(-50% - 2px), -50%) rotate(45deg)"
                  : "translate(calc(50% + 2px), -50%) rotate(45deg)"
        })}
      />
    </TooltipPrimitive>
  )
}

Tooltip.Content = TooltipContent

export { Tooltip, TooltipContent }
