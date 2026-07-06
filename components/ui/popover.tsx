"use client"

import type { ComponentProps } from "react"
import { Button, type ButtonProps } from "react-aria-components/Button"
import { composeRenderProps } from "react-aria-components/composeRenderProps"
import {
  DialogTrigger,
  type DialogTriggerProps,
  OverlayArrow,
  type PopoverProps,
  Popover as RACPopover
} from "react-aria-components/Popover"
import { cn } from "@/lib/utils"

const Popover = (props: DialogTriggerProps) => <DialogTrigger data-slot="popover" {...props} />

const PopoverContent = ({
  className,
  offset = 8,
  showArrow = true,
  ...props
}: PopoverProps & { showArrow?: boolean }) => {
  return (
    <RACPopover
      className={composeRenderProps(className, (className) =>
        cn(
          "cn-popover-content z-50 w-72 outline-hidden has-data-[slot=calendar]:w-auto! has-data-[slot=calendar]:p-0!",
          className
        )
      )}
      data-slot="popover-content"
      offset={offset}
      {...props}
    >
      {(values) => (
        <>
          {showArrow && (
            <OverlayArrow className="group">
              <svg
                className="cn-tooltip-arrow block fill-popover stroke-foreground/10 drop-shadow-sm group-data-[placement=bottom]:rotate-180 group-data-[placement=left]:-rotate-90 group-data-[placement=right]:rotate-90"
                viewBox="0 0 12 12"
              >
                <path d="M0 0 L6 6 L12 0" />
              </svg>
            </OverlayArrow>
          )}
          {typeof props.children === "function" ? props.children(values) : props.children}
        </>
      )}
    </RACPopover>
  )
}

const PopoverHeader = ({ className, ...props }: ComponentProps<"div">) => (
  <div className={cn("cn-popover-header", className)} data-slot="popover-header" {...props} />
)

const PopoverTitle = ({ className, ...props }: ComponentProps<"h2">) => (
  <div className={cn("cn-popover-title", className)} data-slot="popover-title" {...props} />
)

const PopoverDescription = ({ className, ...props }: ComponentProps<"p">) => (
  <p className={cn("cn-popover-description", className)} data-slot="popover-description" {...props} />
)

const PopoverTrigger = (props: ButtonProps) => <Button {...props} />

Popover.Trigger = PopoverTrigger
Popover.Content = PopoverContent
Popover.Header = PopoverHeader
Popover.Title = PopoverTitle
Popover.Description = PopoverDescription

export { Popover, PopoverContent, PopoverDescription, PopoverHeader, PopoverTitle, PopoverTrigger }
