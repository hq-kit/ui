"use client"

import type { ComponentProps, ComponentPropsWithRef, ReactNode } from "react"
import {
  DialogTrigger,
  type DialogTriggerProps,
  Heading,
  ModalOverlay,
  type ModalOverlayProps,
  Dialog as RACDialog,
  Modal as RACModal
} from "react-aria-components/Modal"
import { IconPlaceholder } from "@/components/icon-placeholder"
import { cn } from "@/lib/utils"
import { Button } from "./button"

const Dialog = ({ ...props }: DialogTriggerProps) => <DialogTrigger data-slot="dialog-trigger" {...props} />

const DialogClose = ({ className, variant = "outline", size = "default", ...props }: ComponentProps<typeof Button>) => (
  <Button className={cn(className)} data-slot="dialog-close" size={size} slot="close" variant={variant} {...props} />
)

const DialogOverlay = ({
  className,
  children,
  ...props
}: Omit<ModalOverlayProps, "className" | "children"> & {
  className?: string
  children: ReactNode
}) => (
  <ModalOverlay
    className={cn("data-entering:animate-in data-exiting:animate-out data-exiting:fade-out-0 data-entering:fade-in-0 bg-black/80 duration-100 supports-backdrop-filter:backdrop-blur-xs fixed inset-0 isolate z-50", className)}
    data-slot="dialog-overlay"
    {...props}
  >
    {children}
  </ModalOverlay>
)

const DialogContent = ({
  className,
  children,
  showCloseButton = true,
  isDismissable = true,
  ...props
}: Omit<ModalOverlayProps, "className" | "children"> &
  Pick<ComponentProps<typeof RACModal>, "isDismissable"> & {
    className?: string
    children: ReactNode
    showCloseButton?: boolean
  }) => (
  <DialogOverlay isDismissable={isDismissable} {...props}>
    <RACModal
      className={cn(
        "bg-popover text-popover-foreground data-entering:animate-in data-exiting:animate-out data-exiting:fade-out-0 data-entering:fade-in-0 data-exiting:zoom-out-95 data-entering:zoom-in-95 ring-foreground/5 grid max-w-[calc(100%-2rem)] gap-6 rounded-4xl p-6 text-sm ring-1 duration-100 sm:max-w-md fixed top-1/2 left-1/2 z-50 w-full -translate-x-1/2 -translate-y-1/2 outline-none",
        className
      )}
      data-slot="dialog-content"
    >
      <RACDialog className="gap-[inherit] outline-none [display:inherit]" data-slot="dialog">
        {children}
        {showCloseButton && (
          <DialogClose className="absolute top-4 right-4" size="icon-sm" variant="ghost">
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
      </RACDialog>
    </RACModal>
  </DialogOverlay>
)

const DialogHeader = ({ className, ...props }: ComponentProps<"div">) => (
  <div className={cn("gap-2 flex flex-col", className)} data-slot="dialog-header" {...props} />
)

const DialogFooter = ({
  className,
  showCloseButton = false,
  children,
  ...props
}: ComponentProps<"div"> & {
  showCloseButton?: boolean
}) => (
  <div
    className={cn("flex flex-col-reverse gap-2 sm:flex-row sm:justify-end", className)}
    data-slot="dialog-footer"
    {...props}
  >
    {children}
    {showCloseButton && <DialogClose variant="outline">Close</DialogClose>}
  </div>
)

const DialogTitle = ({ className, ...props }: Omit<ComponentProps<typeof Heading>, "slot">) => (
  <Heading
    className={cn("text-base leading-none font-medium", className)}
    data-slot="dialog-title"
    slot="title"
    {...props}
  />
)

const DialogDescription = ({ className, ...props }: Omit<ComponentProps<"div">, "slot">) => (
  <div className={cn("text-muted-foreground *:[a]:hover:text-foreground text-sm *:[a]:underline *:[a]:underline-offset-3", className)} data-slot="dialog-description" {...props} />
)

const DialogBody = ({ className, ...props }: ComponentPropsWithRef<"div">) => (
  <div
    className={cn(
      "no-scrollbar gap-2 isolate flex max-h-[calc(var(--visual-viewport-height)-var(--visual-viewport-vertical-padding))] flex-col overflow-auto will-change-scroll",
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
