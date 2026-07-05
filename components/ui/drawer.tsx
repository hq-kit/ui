"use client"

import { AnimatePresence, motion } from "motion/react"
import { type ComponentPropsWithRef, type ReactNode, use } from "react"
import { OverlayTriggerStateContext } from "react-aria-components/Dialog"
import {
  Button,
  type ButtonProps,
  Dialog,
  type DialogProps,
  DialogTrigger,
  type DialogTriggerProps,
  Heading,
  Modal,
  ModalOverlay,
  type ModalOverlayProps,
  type HeadingProps as RACHeadingProps
} from "react-aria-components/Modal"
import { Text, type TextProps } from "react-aria-components/Text"
import { cn } from "@/lib/utils"

const DrawerRoot = motion.create(Dialog)
const DrawerOverlay = motion.create(ModalOverlay)

const Drawer = (props: DialogTriggerProps) => <DialogTrigger {...props} />

interface DrawerContentProps
  extends Omit<ModalOverlayProps, "className" | "children" | "isDismissable">,
    Pick<DialogProps, "aria-label" | "aria-labelledby" | "role" | "children" | "className"> {
  isBlurred?: boolean
  className?: string
  side?: "top" | "bottom" | "left" | "right"
  notch?: boolean
}

const DrawerContent = ({
  side = "bottom",
  isBlurred = true,
  notch = true,
  children,
  className,
  ...props
}: DrawerContentProps) => {
  const state = use(OverlayTriggerStateContext)!

  return (
    <AnimatePresence>
      {(props?.isOpen || state?.isOpen) && (
        <DrawerOverlay
          className={cn("cn-drawer-overlay fixed inset-0 z-50")}
          isDismissable
          isOpen={props?.isOpen || state?.isOpen}
          onOpenChange={props?.onOpenChange || state?.setOpen}
        >
          {({ state }) => (
            <Modal>
              <DrawerRoot
                animate={{ x: 0, y: 0 }}
                aria-label="Drawer"
                className={cn("group/drawer-content cn-drawer-content fixed z-50 touch-none", className)}
                data-direction={side}
                drag={side === "left" || side === "right" ? "x" : "y"}
                dragConstraints={{
                  top: 0,
                  bottom: 0,
                  left: 0,
                  right: 0
                }}
                dragElastic={{
                  top: side === "top" ? 1 : 0,
                  bottom: side === "bottom" ? 1 : 0,
                  left: side === "left" ? 1 : 0,
                  right: side === "right" ? 1 : 0
                }}
                dragPropagation
                dragTransition={{
                  bounceStiffness: 600,
                  bounceDamping: 20
                }}
                exit={{
                  x: side === "left" ? "-100%" : side === "right" ? "100%" : 0,
                  y: side === "top" ? "-100%" : side === "bottom" ? "100%" : 0
                }}
                initial={{
                  x: side === "left" ? "-100%" : side === "right" ? "100%" : 0,
                  y: side === "top" ? "-100%" : side === "bottom" ? "100%" : 0
                }}
                onDragEnd={(_, { offset, velocity }) => {
                  if (side === "bottom" && (velocity.y > 150 || offset.y > screen.height * 0.25)) {
                    state.close()
                  }
                  if (side === "top" && (velocity.y < -150 || offset.y < screen.height * 0.25)) {
                    state.close()
                  }
                  if (side === "left" && velocity.x < -150) {
                    state.close()
                  }
                  if (side === "right" && velocity.x > 150) {
                    state.close()
                  }
                }}
                role="dialog"
                transition={{ duration: 0.15, ease: "easeInOut" }}
                whileDrag={{ cursor: "grabbing" }}
              >
                {notch && side === "bottom" && <div className="notch cn-drawer-handle shrink-0 touch-pan-y" />}
                {children as ReactNode}
                {notch && side === "top" && <div className="notch cn-drawer-handle mx-auto shrink-0 touch-pan-y" />}
              </DrawerRoot>
            </Modal>
          )}
        </DrawerOverlay>
      )}
    </AnimatePresence>
  )
}

const DrawerHeader = ({ className, ...props }: ComponentPropsWithRef<"div">) => {
  return <div className={cn("cn-drawer-header flex flex-col", className)} slot="header" {...props} />
}

const DrawerTitle = ({ className, ...props }: RACHeadingProps) => (
  <Heading className={cn("cn-drawer-title cn-font-heading", className)} slot="title" {...props} />
)

const DrawerDescription = ({ className, ...props }: TextProps) => (
  <Text className={cn("cn-drawer-description", className)} slot="description" {...props} />
)

const DrawerBody = ({ className, ...props }: ComponentPropsWithRef<"div">) => (
  <div
    className={cn(
      "no-scrollbar cn-drawer-footer flex touch-pan-y flex-col overflow-auto will-change-scroll",
      className
    )}
    slot="body"
    {...props}
  />
)

const DrawerFooter = ({ className, ...props }: ComponentPropsWithRef<"div">) => {
  return <div className={cn("cn-drawer-footer mt-auto flex flex-col", className)} slot="footer" {...props} />
}

const DrawerTrigger = (props: ButtonProps) => <Button {...props} />

Drawer.Trigger = DrawerTrigger
Drawer.Content = DrawerContent
Drawer.Body = DrawerBody
Drawer.Footer = DrawerFooter
Drawer.Header = DrawerHeader
Drawer.Title = DrawerTitle
Drawer.Description = DrawerDescription

export type { DrawerContentProps }
export { Drawer, DrawerBody, DrawerContent, DrawerDescription, DrawerFooter, DrawerHeader, DrawerTitle, DrawerTrigger }
