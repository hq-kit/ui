"use client"

import type { ComponentProps, ComponentPropsWithRef, ReactNode } from "react"
import {
  Dialog as DialogPrimitive,
  DialogTrigger as DialogTriggerPrimitive,
  type DialogTriggerProps as DialogTriggerPrimitiveProps,
  Heading,
  ModalOverlay as ModalOverlayPrimitive,
  type ModalOverlayProps as ModalOverlayPrimitiveProps,
  Modal as ModalPrimitive
} from "react-aria-components"
import { IconPlaceholder } from "@/components/icon-placeholder"
import { cn } from "@/lib/utils"
import { Button } from "./button"

function Dialog({ ...props }: DialogTriggerPrimitiveProps) {
  return <DialogTriggerPrimitive data-slot="dialog-trigger" {...props} />
}

function DialogClose({ className, variant = "outline", size = "default", ...props }: ComponentProps<typeof Button>) {
  return (
    <Button className={cn(className)} data-slot="dialog-close" size={size} slot="close" variant={variant} {...props} />
  )
}

function DialogOverlay({
  className,
  children,
  ...props
}: Omit<ModalOverlayPrimitiveProps, "className" | "children"> & {
  className?: string
  children: ReactNode
}) {
  return (
    <ModalOverlayPrimitive
      className={cn("cn-dialog-overlay-aria fixed inset-0 isolate z-50", className)}
      data-slot="dialog-overlay"
      {...props}
    >
      {children}
    </ModalOverlayPrimitive>
  )
}

function DialogContent({
  className,
  children,
  showCloseButton = true,
  isDismissable = true,
  ...props
}: Omit<ModalOverlayPrimitiveProps, "className" | "children"> &
  Pick<ComponentProps<typeof ModalPrimitive>, "isDismissable"> & {
    className?: string
    children: ReactNode
    showCloseButton?: boolean
  }) {
  return (
    <DialogOverlay isDismissable={isDismissable} {...props}>
      <ModalPrimitive
        className={cn(
          "cn-dialog-content-aria fixed top-1/2 left-1/2 z-50 w-full -translate-x-1/2 -translate-y-1/2 outline-none",
          className
        )}
        data-slot="dialog-content"
      >
        <DialogPrimitive className="gap-[inherit] outline-none [display:inherit]" data-slot="dialog">
          {children}
          {showCloseButton && (
            <DialogClose className="cn-dialog-close" size="icon-sm" variant="ghost">
              <IconPlaceholder
                hugeicons="Cancel01Icon"
                lucide="XIcon"
                phosphor="XIcon"
                remixicon="RiCloseLine"
                tabler="IconX"
              />
              <span className="sr-only">Close</span>
            </DialogClose>
          )}
        </DialogPrimitive>
      </ModalPrimitive>
    </DialogOverlay>
  )
}

function DialogHeader({ className, ...props }: ComponentProps<"div">) {
  return <div className={cn("cn-dialog-header flex flex-col", className)} data-slot="dialog-header" {...props} />
}

function DialogFooter({
  className,
  showCloseButton = false,
  children,
  ...props
}: ComponentProps<"div"> & {
  showCloseButton?: boolean
}) {
  return (
    <div
      className={cn("cn-dialog-footer flex flex-col-reverse gap-2 sm:flex-row sm:justify-end", className)}
      data-slot="dialog-footer"
      {...props}
    >
      {children}
      {showCloseButton && <DialogClose variant="outline">Close</DialogClose>}
    </div>
  )
}

function DialogTitle({ className, ...props }: Omit<ComponentProps<typeof Heading>, "slot">) {
  return (
    <Heading
      className={cn("cn-dialog-title cn-font-heading", className)}
      data-slot="dialog-title"
      slot="title"
      {...props}
    />
  )
}

function DialogDescription({ className, ...props }: Omit<ComponentProps<"div">, "slot">) {
  return <div className={cn("cn-dialog-description", className)} data-slot="dialog-description" {...props} />
}

const DialogBody = ({ className, ...props }: ComponentPropsWithRef<"div">) => (
  <div
    className={cn(
      "no-scrollbar cn-dialog-footer isolate flex max-h-[calc(var(--visual-viewport-height)-var(--visual-viewport-vertical-padding))] flex-col overflow-auto will-change-scroll",
      className
    )}
    data-slot="body"
    {...props}
  />
)

Dialog.Close = DialogClose
Dialog.Content = DialogContent
Dialog.Description = DialogDescription
Dialog.Footer = DialogFooter
Dialog.Header = DialogHeader
Dialog.Body = DialogBody
Dialog.Overlay = DialogOverlay
Dialog.Title = DialogTitle

export {
  Dialog,
  DialogBody,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogOverlay,
  DialogTitle
}
