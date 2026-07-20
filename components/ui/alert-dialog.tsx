"use client"

import type { ComponentProps, ReactNode } from "react"
import {
  Dialog as AlertDialogPrimitive,
  DialogTrigger as AlertDialogTriggerPrimitive,
  type DialogTriggerProps as AlertDialogTriggerPrimitiveProps,
  Heading,
  ModalOverlay as ModalOverlayPrimitive,
  type ModalOverlayProps as ModalOverlayPrimitiveProps,
  Modal as ModalPrimitive
} from "react-aria-components"
import { cn } from "@/lib/utils"
import { Button } from "./button"

function AlertDialog({ ...props }: AlertDialogTriggerPrimitiveProps) {
  return <AlertDialogTriggerPrimitive data-slot="alert-dialog-trigger" {...props} />
}

function AlertDialogOverlay({
  className,
  children,
  ...props
}: Omit<ModalOverlayPrimitiveProps, "className" | "children"> & {
  className?: string
  children: ReactNode
}) {
  return (
    <ModalOverlayPrimitive
      className={cn("cn-alert-dialog-overlay-aria fixed inset-0 isolate z-50", className)}
      data-slot="alert-dialog-overlay"
      {...props}
    >
      {children}
    </ModalOverlayPrimitive>
  )
}

function AlertDialogContent({
  className,
  size = "default",
  children,
  ...props
}: Omit<ModalOverlayPrimitiveProps, "className" | "children"> &
  Pick<ComponentProps<typeof ModalPrimitive>, "isDismissable"> & {
    className?: string
    size?: "default" | "sm"
    children: ReactNode
  }) {
  return (
    <AlertDialogOverlay {...props}>
      <ModalPrimitive
        className={cn(
          "cn-alert-dialog-content-aria group/alert-dialog-content fixed top-1/2 left-1/2 z-50 grid w-full -translate-x-1/2 -translate-y-1/2 outline-none",
          className
        )}
        data-size={size}
        data-slot="alert-dialog-content"
      >
        <AlertDialogPrimitive
          className="gap-[inherit] outline-none [display:inherit]"
          data-slot="alert-dialog"
          role="alertdialog"
        >
          {children}
        </AlertDialogPrimitive>
      </ModalPrimitive>
    </AlertDialogOverlay>
  )
}

function AlertDialogHeader({ className, ...props }: ComponentProps<"div">) {
  return <div className={cn("cn-alert-dialog-header", className)} data-slot="alert-dialog-header" {...props} />
}

function AlertDialogFooter({ className, ...props }: ComponentProps<"div">) {
  return (
    <div
      className={cn(
        "cn-alert-dialog-footer flex flex-col-reverse gap-2 group-data-[size=sm]/alert-dialog-content:grid group-data-[size=sm]/alert-dialog-content:grid-cols-2 sm:flex-row sm:justify-end",
        className
      )}
      data-slot="alert-dialog-footer"
      {...props}
    />
  )
}

function AlertDialogMedia({ className, ...props }: ComponentProps<"div">) {
  return <div className={cn("cn-alert-dialog-media", className)} data-slot="alert-dialog-media" {...props} />
}

function AlertDialogTitle({ className, ...props }: Omit<ComponentProps<typeof Heading>, "slot">) {
  return (
    <Heading
      className={cn("cn-alert-dialog-title cn-font-heading", className)}
      data-slot="alert-dialog-title"
      slot="title"
      {...props}
    />
  )
}

function AlertDialogDescription({ className, ...props }: Omit<ComponentProps<"div">, "slot">) {
  return (
    <div className={cn("cn-alert-dialog-description", className)} data-slot="alert-dialog-description" {...props} />
  )
}

function AlertDialogAction({ className, ...props }: ComponentProps<typeof Button>) {
  return (
    <Button
      className={cn("cn-alert-dialog-action", className)}
      data-slot="alert-dialog-action"
      slot="close"
      {...props}
    />
  )
}

function AlertDialogCancel({
  className,
  variant = "outline",
  size = "default",
  ...props
}: ComponentProps<typeof Button>) {
  return (
    <Button
      className={cn("cn-alert-dialog-cancel", className)}
      data-slot="alert-dialog-cancel"
      size={size}
      slot="close"
      variant={variant}
      {...props}
    />
  )
}

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
