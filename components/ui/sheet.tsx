"use client"

import type { ComponentProps, ComponentPropsWithRef } from "react"
import { composeRenderProps } from "react-aria-components/composeRenderProps"
import {
  Dialog,
  type DialogProps,
  DialogTrigger,
  type DialogTriggerProps,
  Heading,
  type HeadingProps,
  Modal,
  ModalOverlay,
  type ModalOverlayProps,
  Button as RACButton,
  type ButtonProps as RACButtonProps
} from "react-aria-components/Modal"
import { Text, type TextProps } from "react-aria-components/Text"
import { IconPlaceholder } from "@/components/icon-placeholder"
import { cn } from "@/lib/utils"
import { Button, type ButtonProps } from "./button"

const Sheet = (props: DialogTriggerProps) => <DialogTrigger {...props} />

const SheetOverlay = ({ className, isDismissable = true, ...props }: ModalOverlayProps) => (
  <ModalOverlay
    className={composeRenderProps(className, (className) =>
      cn(
        "cn-sheet-overlay data-entering:fade-in-0 data-exiting:fade-out-0 fixed inset-0 z-50 duration-200 data-entering:animate-in data-exiting:animate-out",
        className
      )
    )}
    data-slot="overlay"
    isDismissable={isDismissable}
    isKeyboardDismissDisabled={!isDismissable}
    {...props}
  />
)

interface DialogContentProps
  extends Omit<ComponentProps<typeof Modal>, "children">,
    Omit<ModalOverlayProps, "className" | "children"> {
  "aria-label"?: DialogProps["aria-label"]
  "aria-labelledby"?: DialogProps["aria-labelledby"]
  role?: DialogProps["role"]
  closeButton?: boolean
  side?: "bottom" | "top" | "left" | "right"
  children?: DialogProps["children"]
  className?: DialogProps["className"]
  overlayClassName?: ModalOverlayProps["className"]
}

const SheetContent = ({
  role = "dialog",
  side = "right",
  closeButton = true,
  className,
  overlayClassName,
  children,
  ...props
}: DialogContentProps) => {
  const isDismissable = role !== "alertdialog"
  return (
    <SheetOverlay className={overlayClassName} isDismissable={isDismissable} {...props}>
      <Modal
        className={cn(
          "cn-sheet-content data-entering:fade-in-0 data-[side=bottom]:data-entering:slide-in-from-bottom-10 data-[side=left]:data-entering:slide-in-from-left-10 data-[side=right]:data-entering:slide-in-from-right-10 data-[side=top]:data-entering:slide-in-from-top-10 data-exiting:fade-out-0 data-[side=bottom]:data-exiting:slide-out-to-bottom-10 data-[side=left]:data-exiting:slide-out-to-left-10 data-[side=right]:data-exiting:slide-out-to-right-10 data-[side=top]:data-exiting:slide-out-to-top-10 duration-100 data-entering:animate-in data-exiting:animate-out data-entering:duration-300! data-exiting:duration-200!",
          className
        )}
        data-side={side}
        data-slot="modal"
        isDismissable={isDismissable}
        {...props}
      >
        <Dialog
          aria-label="Sheet"
          className="flex h-[inherit] max-h-[inherit] max-w-[inherit] flex-1 flex-col"
          data-side={side}
          data-slot="sheet-content"
          role={role}
          slot="dialog"
        >
          {(values) => (
            <>
              {typeof children === "function" ? children(values) : children}
              {closeButton && isDismissable && <SheetX />}
            </>
          )}
        </Dialog>
      </Modal>
    </SheetOverlay>
  )
}

const SheetHeader = ({ className, ...props }: ComponentPropsWithRef<"div">) => (
  <div className={cn("cn-sheet-header flex flex-col", className)} data-slot="sheet-header" {...props} />
)

const SheetTitle = ({ className, ...props }: HeadingProps) => (
  <Heading
    className={cn("cn-sheet-title cn-font-heading", className)}
    data-slot="sheet-title"
    slot="title"
    {...props}
  />
)

const SheetDescription = ({ className, ...props }: TextProps) => (
  <Text className={cn("cn-sheet-description", className)} data-slot="sheet-description" slot="description" {...props} />
)

const SheetBody = ({ className, ...props }: ComponentPropsWithRef<"div">) => (
  <div
    className={cn(
      "no-scrollbar cn-sheet-footer isolate flex flex-col overflow-auto py-0! will-change-scroll",
      className
    )}
    data-slot="sheet-body"
    slot="body"
    {...props}
  />
)

const SheetFooter = ({ className, ...props }: ComponentPropsWithRef<"div">) => (
  <div className={cn("cn-sheet-footer mt-auto flex flex-col", className)} data-slot="sheet-footer" {...props} />
)

const SheetX = (props: ButtonProps) => (
  <Button aria-label="Close" className="cn-sheet-close" size="icon-sm" slot="close" variant="ghost" {...props}>
    <IconPlaceholder hugeicons="Cancel01Icon" lucide="XIcon" phosphor="XIcon" remixicon="RiCloseLine" tabler="IconX" />
  </Button>
)

const SheetTrigger = (props: RACButtonProps) => <RACButton {...props} />

Sheet.Trigger = SheetTrigger
Sheet.Content = SheetContent
Sheet.Body = SheetBody
Sheet.Footer = SheetFooter
Sheet.Header = SheetHeader
Sheet.Overlay = SheetOverlay
Sheet.Title = SheetTitle
Sheet.Description = SheetDescription
Sheet.X = SheetX

export {
  Sheet,
  SheetBody,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetOverlay,
  SheetTitle,
  SheetTrigger,
  SheetX
}
