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
    className={cn(
      "data-exiting:fade-out-0 data-entering:fade-in-0 fixed inset-0 isolate z-50 bg-black/10 duration-100 data-entering:animate-in data-exiting:animate-out supports-backdrop-filter:backdrop-blur-xs",
      className
    )}
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
        "data-exiting:fade-out-0 data-entering:fade-in-0 data-exiting:zoom-out-95 data-entering:zoom-in-95 fixed top-1/2 left-1/2 z-50 grid w-full max-w-[calc(100%-2rem)] -translate-x-1/2 -translate-y-1/2 gap-4 rounded-none bg-popover p-4 text-popover-foreground text-xs/relaxed outline-none ring-1 ring-foreground/10 duration-100 data-entering:animate-in data-exiting:animate-out sm:max-w-sm",
        className
      )}
      data-slot="dialog-content"
    >
      <RACDialog className="gap-[inherit] outline-none [display:inherit]" data-slot="dialog">
        {children}
        {showCloseButton && (
          <DialogClose className="absolute top-2 right-2" size="icon-sm" variant="ghost">
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
  <div className={cn("flex flex-col gap-1 text-left", className)} data-slot="dialog-header" {...props} />
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
  <Heading className={cn("font-medium text-sm", className)} data-slot="dialog-title" slot="title" {...props} />
)

const DialogDescription = ({ className, ...props }: Omit<ComponentProps<"div">, "slot">) => (
  <div
    className={cn(
      "text-muted-foreground text-xs/relaxed *:[a]:underline *:[a]:underline-offset-3 *:[a]:hover:text-foreground",
      className
    )}
    data-slot="dialog-description"
    {...props}
  />
)

const DialogBody = ({ className, ...props }: ComponentPropsWithRef<"div">) => (
  <div
    className={cn(
      "no-scrollbar isolate flex max-h-[calc(var(--visual-viewport-height)-var(--visual-viewport-vertical-padding))] flex-col overflow-auto will-change-scroll",
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
