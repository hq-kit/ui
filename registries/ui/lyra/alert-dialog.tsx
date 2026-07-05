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
      cn("data-entering:animate-in data-exiting:animate-out data-exiting:fade-out-0 data-entering:fade-in-0 bg-black/10 duration-100 supports-backdrop-filter:backdrop-blur-xs fixed inset-0 isolate z-50", className)
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
          "bg-popover text-popover-foreground data-entering:animate-in data-exiting:animate-out data-exiting:fade-out-0 data-entering:fade-in-0 data-exiting:zoom-out-95 data-entering:zoom-in-95 ring-foreground/10 max-w-[calc(100%-2rem)] rounded-none ring-1 duration-100 sm:max-w-sm group/alert-dialog-content fixed top-1/2 left-1/2 z-50 w-full -translate-x-1/2 -translate-y-1/2 outline-hidden",
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
        className="grid gap-4 p-4 text-xs/relaxed relative grid w-full max-w-[inherit] outline-hidden sm:max-w-[inherit]"
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
  <div className={cn("grid grid-rows-[auto_1fr] place-items-center gap-1.5 text-center has-data-[slot=alert-dialog-media]:grid-rows-[auto_auto_1fr] has-data-[slot=alert-dialog-media]:gap-x-4 sm:group-data-[size=default]/alert-dialog-content:place-items-start sm:group-data-[size=default]/alert-dialog-content:text-left sm:group-data-[size=default]/alert-dialog-content:has-data-[slot=alert-dialog-media]:grid-rows-[auto_1fr]", className)} data-slot="alert-dialog-header" {...props} />
)

const AlertDialogFooter = ({ className, ...props }: ComponentProps<"div">) => (
  <div
    className={cn(
      "flex flex-col-reverse gap-2 group-data-[size=sm]/alert-dialog-content:grid group-data-[size=sm]/alert-dialog-content:grid-cols-2 sm:flex-row sm:justify-end",
      className
    )}
    data-slot="alert-dialog-footer"
    {...props}
  />
)

const AlertDialogMedia = ({ className, ...props }: ComponentProps<"div">) => (
  <div className={cn("bg-muted mb-2 inline-flex size-10 items-center justify-center rounded-none sm:group-data-[size=default]/alert-dialog-content:row-span-2 *:[svg:not([class*='size-'])]:size-6", className)} data-slot="alert-dialog-media" {...props} />
)

const AlertDialogTitle = ({ className, ...props }: HeadingProps) => (
  <Heading
    className={cn("text-sm font-medium sm:group-data-[size=default]/alert-dialog-content:group-has-data-[slot=alert-dialog-media]/alert-dialog-content:col-start-2", className)}
    data-slot="alert-dialog-title"
    {...props}
  />
)

const AlertDialogDescription = ({ className, ...props }: TextProps) => (
  <Text className={cn("text-muted-foreground *:[a]:hover:text-foreground text-xs/relaxed text-balance md:text-pretty *:[a]:underline *:[a]:underline-offset-3", className)} data-slot="alert-dialog-description" {...props} />
)

const AlertDialogAction = ({ className, ...props }: ComponentProps<typeof Button>) => (
  <Button className={cn(className)} data-slot="alert-dialog-action" {...props} />
)

const AlertDialogCancel = ({
  className,
  variant = "outline",
  size = "default",
  ...props
}: ComponentProps<typeof Button>) => (
  <Button
    className={cn(className)}
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
