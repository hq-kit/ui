"use client"

import type { ComponentProps, HTMLAttributes } from "react"
import { Link as LinkPrimitive, type LinkProps } from "react-aria-components"
import { tv, type VariantProps } from "tailwind-variants"
import { cn } from "@/lib/utils"
import { Separator } from "./separator"

function ItemGroup({ className, ...props }: ComponentProps<"div">) {
  return (
    <div
      className={cn("cn-item-group group/item-group flex w-full flex-col", className)}
      data-slot="item-group"
      role="list"
      {...props}
    />
  )
}

function ItemSeparator({ className, ...props }: ComponentProps<typeof Separator>) {
  return (
    <Separator
      className={cn("cn-item-separator", className)}
      data-slot="item-separator"
      orientation="horizontal"
      {...props}
    />
  )
}

const itemVariants = tv({
  base: "cn-item group/item flex w-full flex-wrap items-center outline-none transition-colors duration-100 focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50 [a]:transition-colors",
  variants: {
    variant: {
      default: "cn-item-variant-default",
      outline: "cn-item-variant-outline",
      muted: "cn-item-variant-muted"
    },
    size: {
      default: "cn-item-size-default",
      sm: "cn-item-size-sm",
      xs: "cn-item-size-xs"
    }
  },
  defaultVariants: {
    variant: "default",
    size: "default"
  }
})

function Item({
  className,
  variant = "default",
  size = "default",
  ...props
}: Omit<LinkProps, "children"> & HTMLAttributes<HTMLElement> & VariantProps<typeof itemVariants>) {
  const Element = "href" in props ? LinkPrimitive : "div"
  return (
    <Element
      className={cn(itemVariants({ variant, size, className }))}
      data-size={size}
      data-slot="item"
      data-variant={variant}
      {...props}
    />
  )
}

const itemMediaVariants = tv({
  base: "cn-item-media flex shrink-0 items-center justify-center [&_svg]:pointer-events-none",
  variants: {
    variant: {
      default: "cn-item-media-variant-default",
      icon: "cn-item-media-variant-icon",
      image: "cn-item-media-variant-image"
    }
  },
  defaultVariants: {
    variant: "default"
  }
})

function ItemMedia({
  className,
  variant = "default",
  ...props
}: ComponentProps<"div"> & VariantProps<typeof itemMediaVariants>) {
  return (
    <div
      className={cn(itemMediaVariants({ variant, className }))}
      data-slot="item-media"
      data-variant={variant}
      {...props}
    />
  )
}

function ItemContent({ className, ...props }: ComponentProps<"div">) {
  return (
    <div
      className={cn("cn-item-content flex flex-1 flex-col [&+[data-slot=item-content]]:flex-none", className)}
      data-slot="item-content"
      {...props}
    />
  )
}

function ItemTitle({ className, ...props }: ComponentProps<"div">) {
  return (
    <div
      className={cn("cn-item-title line-clamp-1 flex w-fit items-center", className)}
      data-slot="item-title"
      {...props}
    />
  )
}

function ItemDescription({ className, ...props }: ComponentProps<"p">) {
  return (
    <p
      className={cn(
        "cn-item-description line-clamp-2 font-normal [&>a:hover]:text-primary [&>a]:underline [&>a]:underline-offset-4",
        className
      )}
      data-slot="item-description"
      {...props}
    />
  )
}

function ItemActions({ className, ...props }: ComponentProps<"div">) {
  return <div className={cn("cn-item-actions flex items-center", className)} data-slot="item-actions" {...props} />
}

function ItemHeader({ className, ...props }: ComponentProps<"div">) {
  return (
    <div
      className={cn("cn-item-header flex basis-full items-center justify-between", className)}
      data-slot="item-header"
      {...props}
    />
  )
}

function ItemFooter({ className, ...props }: ComponentProps<"div">) {
  return (
    <div
      className={cn("cn-item-footer flex basis-full items-center justify-between", className)}
      data-slot="item-footer"
      {...props}
    />
  )
}
Item.Media = ItemMedia
Item.Content = ItemContent
Item.Actions = ItemActions
Item.Group = ItemGroup
Item.Separator = ItemSeparator
Item.Title = ItemTitle
Item.Description = ItemDescription
Item.Header = ItemHeader
Item.Footer = ItemFooter

export {
  Item,
  ItemActions,
  ItemContent,
  ItemDescription,
  ItemFooter,
  ItemGroup,
  ItemHeader,
  ItemMedia,
  ItemSeparator,
  ItemTitle
}
