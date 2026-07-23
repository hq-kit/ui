"use client"

import type { ComponentProps, ReactNode } from "react"
import {
  Dialog,
  DialogTrigger,
  type DialogTriggerProps,
  Heading,
  Modal,
  ModalOverlay,
  type ModalOverlayProps
} from "react-aria-components/Modal"
import { cn } from "@/lib/utils"
import { Button } from "./button"

const AlertDialog = ({ ...props }: DialogTriggerProps) => <DialogTrigger data-slot="alert-dialog-trigger" {...props} />

const AlertDialogOverlay = ({
  className,
  children,
  ...props
}: Omit<ModalOverlayProps, "className" | "children"> & {
  className?: string
  children: ReactNode
}) => (
  <ModalOverlay
    className={cn("cn-alert-dialog-overlay-aria fixed inset-0 isolate z-50", className)}
    data-slot="alert-dialog-overlay"
    {...props}
  >
    {children}
  </ModalOverlay>
)

const AlertDialogContent = ({
  className,
  size = "default",
  children,
  ...props
}: Omit<ModalOverlayProps, "className" | "children"> &
  Pick<ComponentProps<typeof Modal>, "isDismissable"> & {
    className?: string
    size?: "default" | "sm"
    children: ReactNode
  }) => (
  <AlertDialogOverlay {...props}>
    <Modal
      className={cn(
        "cn-alert-dialog-content-aria group/alert-dialog-content fixed top-1/2 left-1/2 z-50 grid w-full -translate-x-1/2 -translate-y-1/2 outline-none",
        className
      )}
      data-size={size}
      data-slot="alert-dialog-content"
    >
      <Dialog className="gap-[inherit] outline-none [display:inherit]" data-slot="alert-dialog" role="alertdialog">
        {children}
      </Dialog>
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

const AlertDialogTitle = ({ className, ...props }: Omit<ComponentProps<typeof Heading>, "slot">) => (
  <Heading
    className={cn("cn-alert-dialog-title cn-font-heading", className)}
    data-slot="alert-dialog-title"
    slot="title"
    {...props}
  />
)

const AlertDialogDescription = ({ className, ...props }: Omit<ComponentProps<"div">, "slot">) => (
  <div className={cn("cn-alert-dialog-description", className)} data-slot="alert-dialog-description" {...props} />
)

const AlertDialogAction = ({ className, ...props }: ComponentProps<typeof Button>) => (
  <Button className={cn("cn-alert-dialog-action", className)} data-slot="alert-dialog-action" slot="close" {...props} />
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

AlertDialog.Action = AlertDialogAction
AlertDialog.Cancel = AlertDialogCancel
AlertDialog.Description = AlertDialogDescription
AlertDialog.Footer = AlertDialogFooter
AlertDialog.Header = AlertDialogHeader
AlertDialog.Media = AlertDialogMedia
AlertDialog.Overlay = AlertDialogOverlay
AlertDialog.Title = AlertDialogTitle
AlertDialog.Content = AlertDialogContent

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
  AlertDialogTitle
}
