"use client"

import type { ComponentProps } from "react"
import { Heading } from "react-aria-components/Dialog"
import {
  DialogTrigger,
  type DialogTriggerProps,
  Popover as RACPopover,
  type PopoverProps as RACPopoverProps
} from "react-aria-components/Popover"
import { cn } from "@/lib/utils"

const Popover = ({ children, ...props }: DialogTriggerProps) => (
  <DialogTrigger data-slot="popover-trigger" {...props}>
    {children}
  </DialogTrigger>
)

const PopoverContent = ({
  className,
  placement = "bottom",
  offset = 4,
  crossOffset = 0,
  ...props
}: Omit<RACPopoverProps, "className"> & {
  className?: string
}) => (
  <RACPopover
    className={cn("cn-popover-content-aria z-50 w-72 origin-(--trigger-anchor-point) outline-hidden", className)}
    crossOffset={crossOffset}
    data-slot="popover-content"
    offset={offset}
    placement={placement}
    {...props}
  />
)

const PopoverHeader = ({ className, ...props }: ComponentProps<"div">) => (
  <div className={cn("cn-popover-header", className)} data-slot="popover-header" {...props} />
)

const PopoverTitle = ({ className, ...props }: ComponentProps<typeof Heading>) => (
  <Heading className={cn("cn-popover-title", className)} data-slot="popover-title" {...props} />
)

const PopoverDescription = ({ className, ...props }: ComponentProps<"div">) => (
  <div className={cn("cn-popover-description", className)} data-slot="popover-description" {...props} />
)

Popover.Description = PopoverDescription
Popover.Header = PopoverHeader
Popover.Title = PopoverTitle
Popover.Content = PopoverContent

export { Popover, PopoverContent, PopoverDescription, PopoverHeader, PopoverTitle }
