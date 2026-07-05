"use client"

import type { ComponentProps, ComponentPropsWithRef } from "react"
import { composeRenderProps } from "react-aria-components/composeRenderProps"
import {
  type DialogProps,
  type DialogTriggerProps,
  Heading,
  Modal,
  type ModalOverlayProps,
  Button as RACButton,
  type ButtonProps as RACButtonProps,
  Dialog as RACDialog,
  DialogTrigger as RACDialogTrigger,
  type HeadingProps as RACHeadingProps,
  ModalOverlay as RACModalOverlay
} from "react-aria-components/Modal"
import { Text, type TextProps } from "react-aria-components/Text"
import { IconPlaceholder } from "@/components/icon-placeholder"
import { cn } from "@/lib/utils"
import { Button, type ButtonProps } from "./button"

const Dialog = (props: DialogTriggerProps) => <RACDialogTrigger {...props} />

const DialogOverlay = ({ className, isDismissable = true, ...props }: ModalOverlayProps) => (
  <RACModalOverlay
    className={composeRenderProps(className, (className) =>
      cn("cn-dialog-overlay fixed inset-0 isolate z-50", className)
    )}
    data-slot="overlay"
    isDismissable={isDismissable}
    isKeyboardDismissDisabled={!isDismissable}
    {...props}
  />
)

interface DialogContentProps
  extends Omit<ComponentProps<typeof Modal>, "children" | "isDismissable">,
    Omit<ModalOverlayProps, "className" | "children" | "isDismissable"> {
  "aria-label"?: DialogProps["aria-label"]
  "aria-labelledby"?: DialogProps["aria-labelledby"]
  role?: DialogProps["role"]
  closeButton?: boolean
  children?: DialogProps["children"]
  className?: DialogProps["className"]
  overlayClassName?: ModalOverlayProps["className"]
}

const DialogContent = ({
  role = "dialog",
  closeButton = true,
  className,
  children,
  overlayClassName,
  ...props
}: DialogContentProps) => {
  const isDismissable = role !== "alertdialog"
  return (
    <DialogOverlay className={overlayClassName} isDismissable={isDismissable} {...props}>
      <Modal
        className={composeRenderProps(className, (className) =>
          cn(
            "cn-dialog-modal fixed top-1/2 left-1/2 z-50 w-full -translate-x-1/2 -translate-y-1/2 outline-hidden",
            className
          )
        )}
        data-slot="modal"
        isDismissable={isDismissable}
        {...props}
      >
        <RACDialog
          aria-label="Dialog"
          className="cn-dialog-content relative size-full outline-hidden"
          data-slot="dialog-content"
          role={role}
          slot="dialog"
        >
          {(values) => (
            <>
              {typeof children === "function" ? children(values) : children}
              {closeButton && isDismissable && <DialogX />}
            </>
          )}
        </RACDialog>
      </Modal>
    </DialogOverlay>
  )
}

const DialogHeader = ({ className, ...props }: ComponentPropsWithRef<"div">) => (
  <div className={cn("cn-dialog-header flex flex-col", className)} data-slot="header" {...props} />
)

const DialogTitle = ({ className, ...props }: RACHeadingProps) => (
  <Heading className={cn("cn-dialog-title cn-font-heading", className)} data-slot="title" {...props} />
)

const DialogDescription = ({ className, ...props }: TextProps) => (
  <Text className={cn("cn-dialog-description", className)} data-slot="description" {...props} />
)

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

const DialogFooter = ({ className, ...props }: ComponentPropsWithRef<"div">) => (
  <div
    className={cn("cn-dialog-footer flex flex-col-reverse gap-2 sm:flex-row sm:justify-end", className)}
    data-slot="footer"
    {...props}
  />
)

const DialogX = (props: ButtonProps) => (
  <Button aria-label="Close" className="cn-dialog-close" size="icon-sm" slot="close" variant="ghost" {...props}>
    <IconPlaceholder hugeicons="Cancel01Icon" lucide="XIcon" phosphor="XIcon" remixicon="RiCloseLine" tabler="IconX" />
  </Button>
)

const DialogTrigger = (props: RACButtonProps) => <RACButton {...props} />

Dialog.Trigger = DialogTrigger
Dialog.Content = DialogContent
Dialog.Body = DialogBody
Dialog.Footer = DialogFooter
Dialog.Header = DialogHeader
Dialog.Overlay = DialogOverlay
Dialog.Title = DialogTitle
Dialog.Description = DialogDescription
Dialog.X = DialogX

export {
  Dialog,
  DialogBody,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogOverlay,
  DialogTitle,
  DialogTrigger,
  DialogX
}
