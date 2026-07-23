"use client"

import type { ComponentProps, ComponentPropsWithRef, ReactNode } from "react"
import {
  Dialog,
  DialogTrigger,
  type DialogTriggerProps,
  Heading,
  Modal,
  ModalOverlay,
  type ModalOverlayProps
} from "react-aria-components/Modal"
import { IconPlaceholder } from "@/components/icon-placeholder"
import { cn } from "@/lib/utils"
import { Button } from "./button"

const Sheet = ({ ...props }: DialogTriggerProps) => <DialogTrigger data-slot="sheet-trigger" {...props} />

const SheetClose = ({ className, variant = "outline", size = "default", ...props }: ComponentProps<typeof Button>) => (
  <Button className={cn(className)} data-slot="sheet-close" size={size} slot="close" variant={variant} {...props} />
)

const SheetOverlay = ({
  className,
  children,
  ...props
}: Omit<ModalOverlayProps, "className" | "children"> & {
  className?: string
  children: ReactNode
}) => (
  <ModalOverlay
    className={cn(
      "bg-black/80 supports-backdrop-filter:backdrop-blur-xs fixed inset-0 z-50 transition-opacity duration-150 data-entering:opacity-0 data-exiting:opacity-0",
      className
    )}
    data-slot="sheet-overlay"
    isDismissable
    {...props}
  >
    {children}
  </ModalOverlay>
)

const SheetContent = ({
  className,
  children,
  side = "right",
  showCloseButton = true,
  overlayClassName,
  ...props
}: Omit<ModalOverlayProps, "className" | "children"> &
  Pick<ComponentProps<typeof Modal>, "isDismissable"> & {
    className?: string
    overlayClassName?: string
    children: ReactNode
    side?: "top" | "right" | "bottom" | "left"
    showCloseButton?: boolean
  }) => (
  <SheetOverlay {...props} className={overlayClassName}>
    <Modal
      className={cn(
        "bg-popover text-popover-foreground fixed z-50 flex flex-col bg-clip-padding text-xs/relaxed shadow-lg transition duration-200 ease-in-out data-[side=bottom]:inset-x-0 data-[side=bottom]:bottom-0 data-[side=bottom]:h-auto data-[side=bottom]:border-t data-[side=left]:inset-y-0 data-[side=left]:left-0 data-[side=left]:h-full data-[side=left]:w-3/4 data-[side=left]:border-r data-[side=right]:inset-y-0 data-[side=right]:right-0 data-[side=right]:h-full data-[side=right]:w-3/4 data-[side=right]:border-l data-[side=top]:inset-x-0 data-[side=top]:top-0 data-[side=top]:h-auto data-[side=top]:border-b data-[side=left]:sm:max-w-sm data-[side=right]:sm:max-w-sm data-[side=left]:data-entering:translate-x-[-2.5rem] data-[side=left]:data-exiting:translate-x-[-2.5rem] data-[side=right]:data-entering:translate-x-[2.5rem] data-[side=right]:data-exiting:translate-x-[2.5rem] data-[side=bottom]:data-entering:translate-y-[2.5rem] data-[side=bottom]:data-exiting:translate-y-[2.5rem] data-[side=top]:data-entering:translate-y-[-2.5rem] data-[side=top]:data-exiting:translate-y-[-2.5rem] data-entering:opacity-0 data-exiting:opacity-0",
        className
      )}
      data-side={side}
      data-slot="sheet-content"
    >
      <Dialog
        className="h-full max-h-[inherit] gap-[inherit] outline-none [display:inherit] [flex-direction:inherit]"
        data-slot="sheet"
      >
        {children}
        {showCloseButton && (
          <SheetClose className="absolute top-4 right-4" size="icon-sm" variant="ghost">
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
      </Dialog>
    </Modal>
  </SheetOverlay>
)

const SheetHeader = ({ className, ...props }: ComponentProps<"div">) => (
  <div className={cn("gap-1.5 p-6 flex flex-col", className)} data-slot="sheet-header" {...props} />
)

const SheetBody = ({ className, ...props }: ComponentPropsWithRef<"div">) => (
  <div
    className={cn(
      "no-scrollbar gap-2 p-6 isolate flex flex-col overflow-auto py-0! will-change-scroll",
      className
    )}
    data-slot="sheet-body"
    slot="body"
    {...props}
  />
)

const SheetFooter = ({ className, ...props }: ComponentProps<"div">) => (
  <div className={cn("gap-2 p-6 mt-auto flex flex-col", className)} data-slot="sheet-footer" {...props} />
)

const SheetTitle = ({ className, ...props }: Omit<ComponentProps<typeof Heading>, "slot">) => (
  <Heading
    className={cn("text-foreground text-sm font-medium", className)}
    data-slot="sheet-title"
    slot="title"
    {...props}
  />
)

const SheetDescription = ({ className, ...props }: Omit<ComponentProps<"div">, "slot">) => (
  <div className={cn("text-muted-foreground text-xs/relaxed", className)} data-slot="sheet-description" {...props} />
)

Sheet.Close = SheetClose
Sheet.Content = SheetContent
Sheet.Header = SheetHeader
Sheet.Footer = SheetFooter
Sheet.Body = SheetBody
Sheet.Title = SheetTitle
Sheet.Description = SheetDescription

export { Sheet, SheetBody, SheetClose, SheetContent, SheetDescription, SheetFooter, SheetHeader, SheetTitle }
