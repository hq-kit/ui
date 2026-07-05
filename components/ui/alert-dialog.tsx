"use client"

import type { ComponentProps } from "react"
import { composeRenderProps } from "react-aria-components/composeRenderProps"
import {
  type DialogProps,
  type DialogTriggerProps,
  Heading,
  type HeadingProps,
  Modal,
  type ModalOverlayProps,
  Button as RACButton,
  type ButtonProps as RACButtonProps,
  Dialog as RACDialog,
  DialogTrigger as RACDialogTrigger,
  ModalOverlay as RACModalOverlay
} from "react-aria-components/Modal"
import { Text, type TextProps } from "react-aria-components/Text"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

const AlertDialog = (props: DialogTriggerProps) => <RACDialogTrigger data-slot="alert-dialog" {...props} />

const AlertDialogOverlay = ({ className, ...props }: ModalOverlayProps) => (
  <RACModalOverlay
    className={composeRenderProps(className, (className) =>
      cn("cn-alert-dialog-overlay fixed inset-0 isolate z-50", className)
    )}
    data-slot="overlay"
    isDismissable={false}
    isKeyboardDismissDisabled
    {...props}
  />
)

interface AlertDialogContentProps
  extends Omit<ComponentProps<typeof Modal>, "children" | "isDismissable">,
    Omit<ModalOverlayProps, "className" | "children" | "isDismissable"> {
  "aria-label"?: DialogProps["aria-label"]
  "aria-labelledby"?: DialogProps["aria-labelledby"]
  children?: DialogProps["children"]
  className?: DialogProps["className"]
  overlayClassName?: ModalOverlayProps["className"]
  size?: "default" | "sm"
}

const AlertDialogContent = ({
  className,
  size = "default",
  children,
  overlayClassName,
  ...props
}: AlertDialogContentProps) => (
  <AlertDialogOverlay className={overlayClassName} {...props}>
    <Modal
      className={composeRenderProps(className, (className) =>
        cn(
          "cn-dialog-modal group/alert-dialog-content fixed top-1/2 left-1/2 z-50 w-full -translate-x-1/2 -translate-y-1/2 outline-hidden",
          className
        )
      )}
      data-size={size}
      data-slot="modal"
      isDismissable={false}
      {...props}
    >
      <RACDialog
        aria-label="Alert Dialog"
        className="cn-dialog-content relative grid w-full max-w-[inherit] outline-hidden sm:max-w-[inherit]"
        data-slot="alert-dialog-content"
        role="alertdialog"
        slot="dialog"
      >
        {children}
      </RACDialog>
    </Modal>
  </AlertDialogOverlay>
)

const AlertDialogHeader = ({ className, ...props }: ComponentProps<"div">) => (
  <div className={cn("cn-alert-dialog-header", className)} data-slot="alert-dialog-header" {...props} />
)

const AlertDialogFooter = ({ className, ...props }: ComponentProps<"div">) => (
  <div
    className={cn(
      "cn-alert-dialog-footer flex flex-col-reverse gap-2 group-data-[size=sm]/alert-dialog-content:grid group-data-[size=sm]/alert-dialog-content:grid-cols-2 sm:flex-row sm:justify-end",
      className
    )}
    data-slot="alert-dialog-footer"
    {...props}
  />
)

const AlertDialogMedia = ({ className, ...props }: ComponentProps<"div">) => (
  <div className={cn("cn-alert-dialog-media", className)} data-slot="alert-dialog-media" {...props} />
)

const AlertDialogTitle = ({ className, ...props }: HeadingProps) => (
  <Heading
    className={cn("cn-alert-dialog-title cn-font-heading", className)}
    data-slot="alert-dialog-title"
    {...props}
  />
)

const AlertDialogDescription = ({ className, ...props }: TextProps) => (
  <Text className={cn("cn-alert-dialog-description", className)} data-slot="alert-dialog-description" {...props} />
)

const AlertDialogAction = ({ className, ...props }: ComponentProps<typeof Button>) => (
  <Button className={cn("cn-alert-dialog-action", className)} data-slot="alert-dialog-action" {...props} />
)

const AlertDialogCancel = ({
  className,
  variant = "outline",
  size = "default",
  ...props
}: ComponentProps<typeof Button>) => (
  <Button
    className={cn("cn-alert-dialog-cancel", className)}
    data-slot="alert-dialog-cancel"
    size={size}
    slot="close"
    variant={variant}
    {...props}
  />
)

const AlertDialogTrigger = (props: RACButtonProps) => <RACButton {...props} />

AlertDialog.Action = AlertDialogAction
AlertDialog.Cancel = AlertDialogCancel
AlertDialog.Content = AlertDialogContent
AlertDialog.Description = AlertDialogDescription
AlertDialog.Footer = AlertDialogFooter
AlertDialog.Header = AlertDialogHeader
AlertDialog.Media = AlertDialogMedia
AlertDialog.Overlay = AlertDialogOverlay
AlertDialog.Title = AlertDialogTitle
AlertDialog.Trigger = AlertDialogTrigger

export {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogMedia,
  AlertDialogOverlay,
  AlertDialogTitle,
  AlertDialogTrigger
}
