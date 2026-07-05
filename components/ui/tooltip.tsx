"use client"

import type { ComponentProps, ReactNode } from "react"
import type { ButtonProps } from "react-aria-components"
import { Button } from "react-aria-components/Button"
import { composeRenderProps } from "react-aria-components/composeRenderProps"
import {
  OverlayArrow,
  Tooltip as RACTooltip,
  type TooltipProps as RACTooltipProps,
  TooltipTrigger as RACTooltipTrigger
} from "react-aria-components/Tooltip"
import { cn } from "@/lib/utils"

const Tooltip = (props: ComponentProps<typeof RACTooltipTrigger>) => (
  <RACTooltipTrigger closeDelay={props.closeDelay ?? 100} delay={props.delay ?? 100} {...props} />
)

interface TooltipContentProps extends Omit<RACTooltipProps, "children"> {
  showArrow?: boolean
  children: ReactNode
  isInverse?: boolean
}

const TooltipContent = ({
  offset = 10,
  showArrow = true,
  isInverse = true,
  className,
  children,
  ...props
}: TooltipContentProps) => {
  return (
    <RACTooltip
      {...props}
      className={composeRenderProps(className, (className) =>
        cn(
          "cn-tooltip-content cn-tooltip-content-logical z-50 w-fit max-w-xs origin-(--trigger-anchor-point) bg-foreground text-background",
          className
        )
      )}
      data-slot="tooltip-content"
      offset={offset}
    >
      {children}
      {showArrow && (
        <OverlayArrow className="group">
          <svg
            className="cn-tooltip-arrow block fill-foreground group-data-[placement=bottom]:rotate-180 group-data-[placement=left]:-rotate-90 group-data-[placement=right]:rotate-90"
            viewBox="0 0 12 12"
          >
            <path d="M0 0 L6 6 L12 0" />
          </svg>
        </OverlayArrow>
      )}
    </RACTooltip>
  )
}

const TooltipTrigger = (props: ButtonProps) => <Button {...props} />

Tooltip.Trigger = TooltipTrigger
Tooltip.Content = TooltipContent

export { Tooltip, TooltipContent, TooltipTrigger }
