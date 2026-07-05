"use client"

import type { ComponentProps, ComponentPropsWithoutRef } from "react"
import { tv, type VariantProps } from "tailwind-variants"
import { cn } from "@/lib/utils"
import { Link, type LinkProps } from "./link"
import { Separator } from "./separator"

const ItemGroup = ({ className, ...props }: ComponentProps<"div">) => (
  <div
    className={cn("gap-4 has-data-[size=sm]:gap-2.5 has-data-[size=xs]:gap-2 group/item-group flex w-full flex-col", className)}
    data-slot="item-group"
    role="list"
    {...props}
  />
)

const ItemSeparator = ({ className, ...props }: ComponentProps<typeof Separator>) => (
  <Separator
    className={cn("my-2", className)}
    data-slot="item-separator"
    orientation="horizontal"
    {...props}
  />
)

const itemVariants = tv({
  base: "[a]:hover:bg-muted rounded-md border text-sm group/item flex w-full flex-wrap items-center outline-none transition-colors duration-100 focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50 [a]:transition-colors",
  variants: {
    variant: {
      default: "border-transparent",
      outline: "border-border",
      muted: "bg-muted/50 border-transparent"
    },
    size: {
      default: "gap-3.5 px-4 py-3.5",
      sm: "gap-2.5 px-3 py-2.5",
      xs: "gap-2 px-2.5 py-2 in-data-[slot=dropdown-menu-content]:p-0"
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
}: Omit<LinkProps, "slot" | "className" | "ref"> &
  Omit<ComponentPropsWithoutRef<"div">, "style"> &
  VariantProps<typeof itemVariants>) => {
  const Comp = "href" in props ? Link : "div"

  return (
    <Comp
      className={cn(itemVariants({ variant, size, className }))}
      data-size={size}
      data-slot="item"
      data-variant={variant}
      {...props}
    />
  )
}

const itemMediaVariants = tv({
  base: "gap-2 group-has-data-[slot=item-description]/item:translate-y-0.5 group-has-data-[slot=item-description]/item:self-start flex shrink-0 items-center justify-center [&_svg]:pointer-events-none",
  variants: {
    variant: {
      default: "bg-transparent",
      icon: "[&_svg:not([class*='size-'])]:size-4",
      image: "size-10 overflow-hidden rounded-sm group-data-[size=sm]/item:size-8 group-data-[size=xs]/item:size-6 [&_img]:size-full [&_img]:object-cover"
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
    className={cn("gap-1 group-data-[size=xs]/item:gap-0 flex flex-1 flex-col [&+[data-slot=item-content]]:flex-none", className)}
    data-slot="item-content"
    {...props}
  />
)

const ItemTitle = ({ className, ...props }: ComponentProps<"div">) => (
  <div
    className={cn("gap-2 text-sm leading-snug font-medium underline-offset-4 line-clamp-1 flex w-fit items-center", className)}
    data-slot="item-title"
    {...props}
  />
)

const ItemDescription = ({ className, ...props }: ComponentProps<"p">) => (
  <p
    className={cn(
      "text-muted-foreground text-left text-sm leading-normal group-data-[size=xs]/item:text-xs line-clamp-2 font-normal [&>a:hover]:text-primary [&>a]:underline [&>a]:underline-offset-4",
      className
    )}
    data-slot="item-description"
    {...props}
  />
)

const ItemActions = ({ className, ...props }: ComponentProps<"div">) => (
  <div className={cn("gap-2 flex items-center", className)} data-slot="item-actions" {...props} />
)

const ItemHeader = ({ className, ...props }: ComponentProps<"div">) => (
  <div
    className={cn("gap-2 flex basis-full items-center justify-between", className)}
    data-slot="item-header"
    {...props}
  />
)

const ItemFooter = ({ className, ...props }: ComponentProps<"div">) => (
  <div
    className={cn("gap-2 flex basis-full items-center justify-between", className)}
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
  ItemTitle,
  itemMediaVariants,
  itemVariants
}
