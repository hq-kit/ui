import type { ComponentProps, ComponentPropsWithoutRef } from "react"
import { tv, type VariantProps } from "tailwind-variants"
import { Link, type LinkProps } from "./link"
import { cn } from "@/lib/utils"

const markerVariants = tv({
  base: "cn-marker group/marker relative flex w-full items-center",
  variants: {
    variant: {
      default: "cn-marker-variant-default",
      separator: "cn-marker-variant-separator",
      border: "cn-marker-variant-border"
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
  <span aria-hidden="true" className={cn("cn-marker-icon shrink-0", className)} data-slot="marker-icon" {...props} />
)

const MarkerContent = ({ className, ...props }: ComponentProps<"span">) => (
  <span className={cn("cn-marker-content wrap-break-word min-w-0", className)} data-slot="marker-content" {...props} />
)

Marker.Content = MarkerContent
Marker.Icon = MarkerIcon

export { Marker, MarkerContent, MarkerIcon, markerVariants }
