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
          "bg-popover text-popover-foreground data-entering:animate-in data-exiting:animate-out data-exiting:fade-out-0 data-entering:fade-in-0 data-exiting:zoom-out-95 data-entering:zoom-in-95 data-[placement=bottom]:slide-in-from-top-2 data-[placement=left]:slide-in-from-right-2 data-[placement=right]:slide-in-from-left-2 data-[placement=top]:slide-in-from-bottom-2 ring-foreground/5 flex flex-col gap-4 rounded-2xl p-4 text-sm shadow-2xl ring-1 duration-100 z-50 w-72 outline-hidden has-data-[slot=calendar]:w-auto! has-data-[slot=calendar]:p-0!",
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
                className="size-2.5 rounded-[2px] group-data-[placement=left]:translate-x-[-1.5px] group-data-[placement=right]:translate-x-[1.5px] block fill-popover stroke-foreground/10 drop-shadow-sm group-data-[placement=bottom]:rotate-180 group-data-[placement=left]:-rotate-90 group-data-[placement=right]:rotate-90"
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
  <div className={cn("flex flex-col gap-1 text-sm", className)} data-slot="popover-header" {...props} />
)

const PopoverTitle = ({ className, ...props }: ComponentProps<"h2">) => (
  <div className={cn("text-base font-medium", className)} data-slot="popover-title" {...props} />
)

const PopoverDescription = ({ className, ...props }: ComponentProps<"p">) => (
  <p className={cn("text-muted-foreground", className)} data-slot="popover-description" {...props} />
)

const PopoverTrigger = (props: ButtonProps) => <Button {...props} />

Popover.Trigger = PopoverTrigger
Popover.Content = PopoverContent
Popover.Header = PopoverHeader
Popover.Title = PopoverTitle
Popover.Description = PopoverDescription

export { Popover, PopoverContent, PopoverDescription, PopoverHeader, PopoverTitle, PopoverTrigger }
