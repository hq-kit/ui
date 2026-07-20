"use client"

import type { ComponentProps } from "react"
import {
  DialogTrigger,
  type DialogTriggerProps,
  Heading,
  Popover as PopoverPrimitive,
  type PopoverProps as PopoverPrimitiveProps
} from "react-aria-components"
import { cn } from "@/lib/utils"

function Popover({ children, ...props }: DialogTriggerProps) {
  return (
    <DialogTrigger data-slot="popover-trigger" {...props}>
      {children}
    </DialogTrigger>
  )
}

function PopoverContent({
  className,
  placement = "bottom",
  offset = 4,
  crossOffset = 0,
  ...props
}: Omit<PopoverPrimitiveProps, "className"> & {
  className?: string
}) {
  return (
    <PopoverPrimitive
      className={cn("bg-popover text-popover-foreground data-entering:animate-in data-exiting:animate-out data-exiting:fade-out-0 data-entering:fade-in-0 data-exiting:zoom-out-95 data-entering:zoom-in-95 data-[placement=bottom]:slide-in-from-top-2 data-[placement=left]:slide-in-from-right-2 data-[placement=right]:slide-in-from-left-2 data-[placement=top]:slide-in-from-bottom-2 ring-foreground/5 dark:ring-foreground/10 flex flex-col gap-4 rounded-3xl p-4 text-sm shadow-lg ring-1 duration-100 z-50 w-72 origin-(--trigger-anchor-point) outline-hidden", className)}
      crossOffset={crossOffset}
      data-slot="popover-content"
      offset={offset}
      placement={placement}
      {...props}
    />
  )
}

function PopoverHeader({ className, ...props }: ComponentProps<"div">) {
  return <div className={cn("flex flex-col gap-1 text-sm", className)} data-slot="popover-header" {...props} />
}

function PopoverTitle({ className, ...props }: ComponentProps<typeof Heading>) {
  return <Heading className={cn("text-base font-medium", className)} data-slot="popover-title" {...props} />
}

function PopoverDescription({ className, ...props }: ComponentProps<"div">) {
  return <div className={cn("text-muted-foreground", className)} data-slot="popover-description" {...props} />
}

Popover.Description = PopoverDescription
Popover.Header = PopoverHeader
Popover.Title = PopoverTitle
Popover.Content = PopoverContent

export { Popover, PopoverContent, PopoverDescription, PopoverHeader, PopoverTitle }
