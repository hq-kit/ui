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
          "data-entering:animate-in data-entering:fade-in-0 data-entering:zoom-in-95 data-[state=delayed-open]:animate-in data-[state=delayed-open]:fade-in-0 data-[state=delayed-open]:zoom-in-95 data-exiting:animate-out data-exiting:fade-out-0 data-exiting:zoom-out-95 data-[placement=bottom]:slide-in-from-top-2 data-[placement=left]:slide-in-from-right-2 data-[placement=right]:slide-in-from-left-2 data-[placement=top]:slide-in-from-bottom-2 inline-flex items-center gap-1.5 rounded-2xl px-3 py-1.5 text-xs has-data-[slot=kbd]:pr-1.5 **:data-[slot=kbd]:relative **:data-[slot=kbd]:isolate **:data-[slot=kbd]:z-50 **:data-[slot=kbd]:rounded-4xl data-[placement=start]:slide-in-from-right-2 data-[placement=end]:slide-in-from-left-2 z-50 w-fit max-w-xs origin-(--trigger-anchor-point) bg-foreground text-background",
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
            className="size-2.5 rounded-[2px] group-data-[placement=left]:translate-x-[-1.5px] group-data-[placement=right]:translate-x-[1.5px] block fill-foreground group-data-[placement=bottom]:rotate-180 group-data-[placement=left]:-rotate-90 group-data-[placement=right]:rotate-90"
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
