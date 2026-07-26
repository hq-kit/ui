import type { ComponentProps, ComponentPropsWithoutRef } from "react"
import { tv, type VariantProps } from "tailwind-variants"
import { cn } from "@/lib/utils"
import { Link, type LinkProps } from "./link"

const markerVariants = tv({
  base: "group/marker relative flex min-h-4 w-full items-center gap-2 text-left text-muted-foreground text-xs/relaxed [&_svg:not([class*='size-'])]:size-3.5 [a]:underline [a]:underline-offset-3 [a]:hover:text-foreground",
  variants: {
    variant: {
      default: "",
      separator:
        "before:mr-1 before:h-px before:min-w-0 before:flex-1 before:bg-border after:ml-1 after:h-px after:min-w-0 after:flex-1 after:bg-border",
      border: "border-border border-b pb-2"
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
  <span
    aria-hidden="true"
    className={cn("size-3.5 shrink-0 [&_svg:not([class*='size-'])]:size-3.5", className)}
    data-slot="marker-icon"
    {...props}
  />
)

const MarkerContent = ({ className, ...props }: ComponentProps<"span">) => (
  <span
    className={cn(
      "wrap-break-word min-w-0 group-data-[variant=separator]/marker:flex-none group-data-[variant=separator]/marker:text-center *:[a]:underline *:[a]:underline-offset-3 *:[a]:hover:text-foreground",
      className
    )}
    data-slot="marker-content"
    {...props}
  />
)

Marker.Content = MarkerContent
Marker.Icon = MarkerIcon

export { Marker, MarkerContent, MarkerIcon, markerVariants }
