"use client"

import type { ComponentProps, ComponentPropsWithRef, ReactNode } from "react"
import {
  Heading,
  ModalOverlay as ModalOverlayPrimitive,
  type ModalOverlayProps as ModalOverlayPrimitiveProps,
  Modal as ModalPrimitive,
  Dialog as SheetPrimitive,
  DialogTrigger as SheetTriggerPrimitive,
  type DialogTriggerProps as SheetTriggerPrimitiveProps
} from "react-aria-components"
import { IconPlaceholder } from "@/components/icon-placeholder"
import { cn } from "@/lib/utils"
import { Button } from "./button"

function Sheet({ ...props }: SheetTriggerPrimitiveProps) {
  return <SheetTriggerPrimitive data-slot="sheet-trigger" {...props} />
}

function SheetClose({ className, variant = "outline", size = "default", ...props }: ComponentProps<typeof Button>) {
  return (
    <Button className={cn(className)} data-slot="sheet-close" size={size} slot="close" variant={variant} {...props} />
  )
}

function SheetOverlay({
  className,
  children,
  ...props
}: Omit<ModalOverlayPrimitiveProps, "className" | "children"> & {
  className?: string
  children: ReactNode
}) {
  return (
    <ModalOverlayPrimitive
      className={cn(
        "bg-black/20 supports-backdrop-filter:backdrop-blur-sm fixed inset-0 z-50 transition-opacity duration-150 data-entering:opacity-0 data-exiting:opacity-0",
        className
      )}
      data-slot="sheet-overlay"
      isDismissable
      {...props}
    >
      {children}
    </ModalOverlayPrimitive>
  )
}

function SheetContent({
  className,
  children,
  side = "right",
  showCloseButton = true,
  overlayClassName,
  ...props
}: Omit<ModalOverlayPrimitiveProps, "className" | "children"> &
  Pick<ComponentProps<typeof ModalPrimitive>, "isDismissable"> & {
    className?: string
    overlayClassName?: string
    children: ReactNode
    side?: "top" | "right" | "bottom" | "left"
    showCloseButton?: boolean
  }) {
  return (
    <SheetOverlay {...props} className={overlayClassName}>
      <ModalPrimitive
        className={cn(
          "bg-popover text-popover-foreground fixed z-50 flex flex-col bg-clip-padding text-sm shadow-md transition duration-200 ease-in-out data-[side=bottom]:inset-x-0 data-[side=bottom]:bottom-0 data-[side=bottom]:h-auto data-[side=bottom]:border-t data-[side=left]:inset-y-0 data-[side=left]:left-0 data-[side=left]:h-full data-[side=left]:w-3/4 data-[side=left]:border-r data-[side=right]:inset-y-0 data-[side=right]:right-0 data-[side=right]:h-full data-[side=right]:w-3/4 data-[side=right]:border-l data-[side=top]:inset-x-0 data-[side=top]:top-0 data-[side=top]:h-auto data-[side=top]:border-b data-[side=left]:sm:max-w-sm data-[side=right]:sm:max-w-sm data-[side=left]:data-entering:translate-x-[-2.5rem] data-[side=left]:data-exiting:translate-x-[-2.5rem] data-[side=right]:data-entering:translate-x-[2.5rem] data-[side=right]:data-exiting:translate-x-[2.5rem] data-[side=bottom]:data-entering:translate-y-[2.5rem] data-[side=bottom]:data-exiting:translate-y-[2.5rem] data-[side=top]:data-entering:translate-y-[-2.5rem] data-[side=top]:data-exiting:translate-y-[-2.5rem] data-entering:opacity-0 data-exiting:opacity-0",
          className
        )}
        data-side={side}
        data-slot="sheet-content"
      >
        <SheetPrimitive
          className="h-full max-h-[inherit] gap-[inherit] outline-none [display:inherit] [flex-direction:inherit]"
          data-slot="sheet"
        >
          {children}
          {showCloseButton && (
            <SheetClose className="absolute top-4 right-4 bg-secondary" size="icon-sm" variant="ghost">
              <IconPlaceholder
                hugeicons="Cancel01Icon"
                lucide="XIcon"
                phosphor="XIcon"
                remixicon="RiCloseLine"
                tabler="IconX"
              />
              <span className="sr-only">Close</span>
            </SheetClose>
          )}
        </SheetPrimitive>
      </ModalPrimitive>
    </SheetOverlay>
  )
}

function SheetHeader({ className, ...props }: ComponentProps<"div">) {
  return <div className={cn("gap-1.5 p-8 flex flex-col", className)} data-slot="sheet-header" {...props} />
}

const SheetBody = ({ className, ...props }: ComponentPropsWithRef<"div">) => (
  <div
    className={cn(
      "no-scrollbar gap-2 p-8 isolate flex flex-col overflow-auto py-0! will-change-scroll",
      className
    )}
    data-slot="sheet-body"
    slot="body"
    {...props}
  />
)

function SheetFooter({ className, ...props }: ComponentProps<"div">) {
  return <div className={cn("gap-2 p-8 mt-auto flex flex-col", className)} data-slot="sheet-footer" {...props} />
}

function SheetTitle({ className, ...props }: Omit<ComponentProps<typeof Heading>, "slot">) {
  return (
    <Heading
      className={cn("text-foreground text-lg font-semibold uppercase tracking-wider", className)}
      data-slot="sheet-title"
      slot="title"
      {...props}
    />
  )
}

function SheetDescription({ className, ...props }: Omit<ComponentProps<"div">, "slot">) {
  return <div className={cn("text-muted-foreground text-sm leading-relaxed mt-0.5", className)} data-slot="sheet-description" {...props} />
}

Sheet.Close = SheetClose
Sheet.Content = SheetContent
Sheet.Header = SheetHeader
Sheet.Footer = SheetFooter
Sheet.Body = SheetBody
Sheet.Title = SheetTitle
Sheet.Description = SheetDescription

export { Sheet, SheetBody, SheetClose, SheetContent, SheetDescription, SheetFooter, SheetHeader, SheetTitle }
