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
          className={cn("data-entering:animate-in data-exiting:animate-out data-exiting:fade-out-0 data-entering:fade-in-0 bg-black/80 supports-backdrop-filter:backdrop-blur-xs fixed inset-0 z-50")}
          isDismissable
          isOpen={props?.isOpen || state?.isOpen}
          onOpenChange={props?.onOpenChange || state?.setOpen}
        >
          {({ state }) => (
            <Modal>
              <DrawerRoot
                animate={{ x: 0, y: 0 }}
                aria-label="Drawer"
                className={cn("group/drawer-content before:bg-popover text-popover-foreground before:border-border relative flex h-auto flex-col bg-transparent p-2 text-xs/relaxed before:absolute before:inset-2 before:-z-10 before:rounded-xl before:border data-[direction=bottom]:inset-x-0 data-[direction=bottom]:bottom-0 data-[direction=bottom]:mt-24 data-[direction=bottom]:max-h-[80vh] data-[direction=left]:inset-y-0 data-[direction=left]:left-0 data-[direction=left]:w-3/4 data-[direction=right]:inset-y-0 data-[direction=right]:right-0 data-[direction=right]:w-3/4 data-[direction=top]:inset-x-0 data-[direction=top]:top-0 data-[direction=top]:mb-24 data-[direction=top]:max-h-[80vh] data-[direction=left]:sm:max-w-sm data-[direction=right]:sm:max-w-sm fixed z-50 touch-none", className)}
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
                {notch && side === "bottom" && <div className="notch bg-muted mx-auto group-data-[direction=top]/drawer-content:mb-4 group-data-[direction=bottom]/drawer-content:mt-4 h-1.5 w-25 shrink-0 rounded-full shrink-0 touch-pan-y" />}
                {children as ReactNode}
                {notch && side === "top" && <div className="notch bg-muted mx-auto group-data-[direction=top]/drawer-content:mb-4 group-data-[direction=bottom]/drawer-content:mt-4 h-1.5 w-25 shrink-0 rounded-full mx-auto shrink-0 touch-pan-y" />}
              </DrawerRoot>
            </Modal>
          )}
        </DrawerOverlay>
      )}
    </AnimatePresence>
  )
}

const DrawerHeader = ({ className, ...props }: ComponentPropsWithRef<"div">) => {
  return <div className={cn("gap-1 p-4 group-data-[direction=bottom]/drawer-content:text-center group-data-[direction=top]/drawer-content:text-center md:text-left flex flex-col", className)} slot="header" {...props} />
}

const DrawerTitle = ({ className, ...props }: RACHeadingProps) => (
  <Heading className={cn("text-foreground text-sm font-medium", className)} slot="title" {...props} />
)

const DrawerDescription = ({ className, ...props }: TextProps) => (
  <Text className={cn("text-muted-foreground text-xs/relaxed", className)} slot="description" {...props} />
)

const DrawerBody = ({ className, ...props }: ComponentPropsWithRef<"div">) => (
  <div
    className={cn(
      "no-scrollbar gap-2 p-4 flex touch-pan-y flex-col overflow-auto will-change-scroll",
      className
    )}
    slot="body"
    {...props}
  />
)

const DrawerFooter = ({ className, ...props }: ComponentPropsWithRef<"div">) => {
  return <div className={cn("gap-2 p-4 mt-auto flex flex-col", className)} slot="footer" {...props} />
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
