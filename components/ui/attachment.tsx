"use client"

import type { ComponentProps } from "react"
import { type ButtonProps, Button as RACButton } from "react-aria-components/Button"
import { tv, type VariantProps } from "tailwind-variants"
import { cn } from "@/lib/utils"
import { Button } from "./button"
import { Link, type LinkProps } from "./link"

const attachmentVariants = tv({
  base: "cn-attachment group/attachment relative flex min-w-0 max-w-full shrink-0 flex-wrap border bg-card text-card-foreground transition-colors has-[>a,>button]:hover:bg-muted/50 data-[state=error]:border-destructive/30 data-[state=idle]:border-dashed",
  variants: {
    size: {
      default: "cn-attachment-size-default",
      sm: "cn-attachment-size-sm",
      xs: "cn-attachment-size-xs"
    },
    orientation: {
      horizontal: "cn-attachment-orientation-horizontal items-center",
      vertical: "cn-attachment-orientation-vertical flex-col"
    }
  }
})

const Attachment = ({
  className,
  state = "done",
  size = "default",
  orientation = "horizontal",
  ...props
}: ComponentProps<"div"> &
  VariantProps<typeof attachmentVariants> & {
    state?: "idle" | "uploading" | "processing" | "error" | "done"
  }) => {
  const resolvedOrientation = orientation ?? "horizontal"

  return (
    <div
      className={cn(attachmentVariants({ size, orientation }), className)}
      data-orientation={resolvedOrientation}
      data-size={size}
      data-slot="attachment"
      data-state={state}
      {...props}
    />
  )
}

const attachmentMediaVariants = tv({
  base: "cn-attachment-media relative flex aspect-square shrink-0 items-center justify-center overflow-hidden group-data-[state=error]/attachment:bg-destructive/10 group-data-[state=error]/attachment:text-destructive [&_svg]:pointer-events-none",
  variants: {
    variant: {
      icon: "cn-attachment-media-variant-icon",
      image: "cn-attachment-media-variant-image *:[img]:aspect-square *:[img]:w-full *:[img]:object-cover"
    }
  },
  defaultVariants: {
    variant: "icon"
  }
})

const AttachmentMedia = ({
  className,
  variant = "icon",
  ...props
}: ComponentProps<"div"> & VariantProps<typeof attachmentMediaVariants>) => (
  <div
    className={cn(attachmentMediaVariants({ variant }), className)}
    data-slot="attachment-media"
    data-variant={variant}
    {...props}
  />
)

const AttachmentContent = ({ className, ...props }: ComponentProps<"div">) => (
  <div
    className={cn("cn-attachment-content min-w-0 max-w-full flex-1", className)}
    data-slot="attachment-content"
    {...props}
  />
)

const AttachmentTitle = ({ className, ...props }: ComponentProps<"span">) => (
  <span
    className={cn(
      "cn-attachment-title group-data-[state=processing]/attachment:shimmer group-data-[state=uploading]/attachment:shimmer block min-w-0 max-w-full truncate",
      className
    )}
    data-slot="attachment-title"
    {...props}
  />
)

const AttachmentDescription = ({ className, ...props }: ComponentProps<"span">) => (
  <span
    className={cn(
      "cn-attachment-description block min-w-0 truncate text-muted-foreground group-data-[state=error]/attachment:text-destructive/80",
      "max-w-full",
      className
    )}
    data-slot="attachment-description"
    {...props}
  />
)

const AttachmentActions = ({ className, ...props }: ComponentProps<"div">) => (
  <div
    className={cn("cn-attachment-actions flex shrink-0 items-center", className)}
    data-slot="attachment-actions"
    {...props}
  />
)

const AttachmentAction = ({ className, variant, size = "icon-xs", ...props }: ComponentProps<typeof Button>) => (
  <Button
    className={cn("cn-attachment-action", className)}
    data-slot="attachment-action"
    size={size}
    variant={variant ?? "ghost"}
    {...props}
  />
)

const AttachmentTrigger = ({
  className,
  type,
  ...props
}: Omit<LinkProps, "slot" | "className" | "ref"> & ButtonProps) => {
  const Comp = "href" in props ? Link : RACButton

  return (
    <Comp
      className={cn("cn-attachment-trigger absolute inset-0 z-10 outline-none", className)}
      data-slot="attachment-trigger"
      type={"href" in props ? undefined : (type ?? "button")}
      {...props}
    />
  )
}

const AttachmentGroup = ({
  className,
  orientation,
  layout,
  ...props
}: ComponentProps<"div"> & {
  orientation?: "horizontal" | "vertical"
  layout?: "grid" | "stack"
}) => (
  <div
    className={cn(
      "cn-attachment-group scrollbar-none relative min-w-0 snap-x snap-mandatory overflow-auto overscroll-x-contain empty:flex empty:items-center empty:justify-center empty:text-sm empty:italic *:data-[slot=attachment]:flex-none *:data-[slot=attachment]:snap-start",
      "data-[orientation=horizontal]:flex data-[orientation=horizontal]:w-full data-[orientation=horizontal]:flex-nowrap data-[orientation=horizontal]:overflow-x-auto",
      "data-[orientation=vertical]:grid data-[orientation=vertical]:px-1",
      "data-[layout=grid]:grid data-[layout=grid]:not-data-[orientation=vertical]:grid-cols-[repeat(auto-fit,minmax(250px,1fr))]",
      className
    )}
    data-layout={layout ?? "stack"}
    data-orientation={orientation ?? "horizontal"}
    data-slot="attachment-group"
    {...props}
  />
)

Attachment.Action = AttachmentAction
Attachment.Actions = AttachmentActions
Attachment.Content = AttachmentContent
Attachment.Description = AttachmentDescription
Attachment.Group = AttachmentGroup
Attachment.Media = AttachmentMedia
Attachment.Title = AttachmentTitle
Attachment.Trigger = AttachmentTrigger

export {
  Attachment,
  AttachmentAction,
  AttachmentActions,
  AttachmentContent,
  AttachmentDescription,
  AttachmentGroup,
  AttachmentMedia,
  AttachmentTitle,
  AttachmentTrigger,
  attachmentMediaVariants,
  attachmentVariants
}
