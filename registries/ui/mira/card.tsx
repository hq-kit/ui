import type { ComponentProps } from "react"
import { cn } from "@/lib/utils"

const Card = ({ className, size = "default", ...props }: ComponentProps<"div"> & { size?: "default" | "sm" }) => (
  <div className={cn("ring-foreground/10 bg-card text-card-foreground gap-(--card-spacing) overflow-hidden rounded-lg py-(--card-spacing) text-xs/relaxed ring-1 [--card-spacing:--spacing(4)] has-[>img:first-child]:pt-0 data-[size=sm]:[--card-spacing:--spacing(3)] *:[img:first-child]:rounded-t-lg *:[img:last-child]:rounded-b-lg group/card flex flex-col", className)} data-size={size} data-slot="card" {...props} />
)

const CardHeader = ({ className, ...props }: ComponentProps<"div">) => (
  <div
    className={cn(
      "gap-1 rounded-t-lg px-(--card-spacing) [.border-b]:pb-(--card-spacing) group/card-header @container/card-header grid auto-rows-min items-start has-data-[slot=card-action]:grid-cols-[1fr_auto] has-data-[slot=card-description]:grid-rows-[auto_auto]",
      className
    )}
    data-slot="card-header"
    {...props}
  />
)

const CardTitle = ({ className, ...props }: ComponentProps<"div">) => (
  <div className={cn("text-sm font-medium", className)} data-slot="card-title" {...props} />
)

const CardDescription = ({ className, ...props }: ComponentProps<"div">) => (
  <div className={cn("text-muted-foreground text-xs/relaxed", className)} data-slot="card-description" {...props} />
)

const CardAction = ({ className, ...props }: ComponentProps<"div">) => (
  <div
    className={cn("col-start-2 row-span-2 row-start-1 self-start justify-self-end", className)}
    data-slot="card-action"
    {...props}
  />
)

const CardContent = ({ className, ...props }: ComponentProps<"div">) => (
  <div className={cn("px-(--card-spacing)", className)} data-slot="card-content" {...props} />
)

const CardFooter = ({ className, ...props }: ComponentProps<"div">) => (
  <div className={cn("rounded-b-lg px-(--card-spacing) [.border-t]:pt-(--card-spacing) flex items-center", className)} data-slot="card-footer" {...props} />
)

Card.Header = CardHeader
Card.Title = CardTitle
Card.Description = CardDescription
Card.Action = CardAction
Card.Content = CardContent
Card.Footer = CardFooter

export { Card, CardAction, CardContent, CardDescription, CardFooter, CardHeader, CardTitle }
