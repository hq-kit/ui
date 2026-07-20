import type { ComponentProps, ComponentPropsWithoutRef } from "react"
import { tv, type VariantProps } from "tailwind-variants"
import { Link, type LinkProps } from "./link"
import { cn } from "@/lib/utils"

const markerVariants = tv({
  base: "gap-2 text-xs text-muted-foreground [a]:hover:text-foreground [a]:underline-offset-3 [a]:underline [&_svg:not([class*='size-'])]:size-3.5 min-h-4 text-left group/marker relative flex w-full items-center",
  variants: {
    variant: {
      default: "",
      separator: "before:h-px before:min-w-0 before:flex-1 before:bg-border after:h-px after:min-w-0 after:flex-1 after:bg-border before:mr-1 after:ml-1",
      border: "border-b border-border pb-2"
    }
  }
})

const Marker = ({
  className,
  variant = "default",
  ...props
}: Omit<LinkProps, "slot" | "className" | "ref"> &
  Omit<ComponentPropsWithoutRef<"div">, "style"> &
  VariantProps<typeof markerVariants>) => {
  const Comp = "href" in props ? Link : "div"

  return (
    <Comp className={cn(markerVariants({ variant, className }))} data-slot="marker" data-variant={variant} {...props} />
  )
}

const MarkerIcon = ({ className, ...props }: ComponentProps<"span">) => (
  <span aria-hidden="true" className={cn("size-3.5 [&_svg:not([class*='size-'])]:size-3.5 shrink-0", className)} data-slot="marker-icon" {...props} />
)

const MarkerContent = ({ className, ...props }: ComponentProps<"span">) => (
  <span className={cn("group-data-[variant=separator]/marker:flex-none group-data-[variant=separator]/marker:text-center *:[a]:hover:text-foreground *:[a]:underline *:[a]:underline-offset-3 wrap-break-word min-w-0", className)} data-slot="marker-content" {...props} />
)

Marker.Content = MarkerContent
Marker.Icon = MarkerIcon

export { Marker, MarkerContent, MarkerIcon, markerVariants }
