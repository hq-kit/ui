"use client"

import type { ComponentProps, HTMLAttributes } from "react"
import { Link, type LinkProps } from "react-aria-components/Link"
import { tv, type VariantProps } from "tailwind-variants"
import { cn } from "@/lib/utils"
import { Separator } from "./separator"

const ItemGroup = ({ className, ...props }: ComponentProps<"div">) => (
  <div
    className={cn(
      "group/item-group flex w-full flex-col gap-4 has-data-[size=sm]:gap-2.5 has-data-[size=xs]:gap-2",
      className
    )}
    data-slot="item-group"
    role="list"
    {...props}
  />
)

const ItemSeparator = ({ className, ...props }: ComponentProps<typeof Separator>) => (
  <Separator className={cn("my-2", className)} data-slot="item-separator" orientation="horizontal" {...props} />
)

const itemVariants = tv({
  base: "group/item flex w-full flex-wrap items-center rounded-none border text-sm outline-none transition-colors duration-100 focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50 [a]:transition-colors [a]:hover:bg-muted",
  variants: {
    variant: {
      default: "border-transparent",
      outline: "border-border",
      muted: "border-transparent bg-muted/50"
    },
    size: {
      default: "gap-3.5 px-4 py-3.5",
      sm: "gap-3.5 px-3.5 py-3",
      xs: "gap-2.5 in-data-[slot=dropdown-menu-content]:p-0 px-3 py-2.5"
    }
  },
  defaultVariants: {
    variant: "default",
    size: "default"
  }
})

const Item = ({
  className,
  variant = "default",
  size = "default",
  ...props
}: Omit<LinkProps, "children"> & HTMLAttributes<HTMLElement> & VariantProps<typeof itemVariants>) => {
  const Element = "href" in props ? Link : "div"
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
  base: "flex shrink-0 items-center justify-center gap-2 group-has-data-[slot=item-description]/item:translate-y-0.5 group-has-data-[slot=item-description]/item:self-start [&_svg]:pointer-events-none",
  variants: {
    variant: {
      default: "bg-transparent",
      icon: "[&_svg:not([class*='size-'])]:size-4",
      image:
        "size-10 overflow-hidden rounded-none group-data-[size=sm]/item:size-8 group-data-[size=xs]/item:size-6 group-data-[size=xs]/item:rounded-none [&_img]:size-full [&_img]:object-cover"
    }
  },
  defaultVariants: {
    variant: "default"
  }
})

const ItemMedia = ({
  className,
  variant = "default",
  ...props
}: ComponentProps<"div"> & VariantProps<typeof itemMediaVariants>) => (
  <div
    className={cn(itemMediaVariants({ variant, className }))}
    data-slot="item-media"
    data-variant={variant}
    {...props}
  />
)

const ItemContent = ({ className, ...props }: ComponentProps<"div">) => (
  <div
    className={cn(
      "flex flex-1 flex-col gap-1 group-data-[size=xs]/item:gap-0.5 [&+[data-slot=item-content]]:flex-none",
      className
    )}
    data-slot="item-content"
    {...props}
  />
)

const ItemTitle = ({ className, ...props }: ComponentProps<"div">) => (
  <div
    className={cn(
      "line-clamp-1 flex w-fit items-center gap-2 font-semibold text-xs uppercase leading-snug underline-offset-4",
      className
    )}
    data-slot="item-title"
    {...props}
  />
)

const ItemDescription = ({ className, ...props }: ComponentProps<"p">) => (
  <p
    className={cn(
      "line-clamp-2 text-left font-normal text-muted-foreground text-sm leading-relaxed [&>a:hover]:text-primary [&>a]:underline [&>a]:underline-offset-4",
      className
    )}
    data-slot="item-description"
    {...props}
  />
)

const ItemActions = ({ className, ...props }: ComponentProps<"div">) => (
  <div className={cn("flex items-center gap-2", className)} data-slot="item-actions" {...props} />
)

const ItemHeader = ({ className, ...props }: ComponentProps<"div">) => (
  <div
    className={cn("flex basis-full items-center justify-between gap-2", className)}
    data-slot="item-header"
    {...props}
  />
)

const ItemFooter = ({ className, ...props }: ComponentProps<"div">) => (
  <div
    className={cn("flex basis-full items-center justify-between gap-2", className)}
    data-slot="item-footer"
    {...props}
  />
)

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
