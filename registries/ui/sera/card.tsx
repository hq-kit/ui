import type { ComponentProps } from "react"
import { cn } from "@/lib/utils"

const Card = ({ className, size = "default", ...props }: ComponentProps<"div"> & { size?: "default" | "sm" }) => (
  <div className={cn("bg-card text-card-foreground ring-foreground/5 gap-(--card-spacing) overflow-hidden py-(--card-spacing) text-sm shadow-sm ring-1 [--card-spacing:--spacing(8)] has-[>img:first-child]:pt-0 data-[size=sm]:[--card-spacing:--spacing(5)] *:[img:first-child]:rounded-none *:[img:last-child]:rounded-none group/card flex flex-col", className)} data-size={size} data-slot="card" {...props} />
)

const CardHeader = ({ className, ...props }: ComponentProps<"div">) => (
  <div
    className={cn(
      "gap-1.5 rounded-none px-(--card-spacing) [.border-b]:pb-(--card-spacing) group/card-header @container/card-header grid auto-rows-min items-start has-data-[slot=card-action]:grid-cols-[1fr_auto] has-data-[slot=card-description]:grid-rows-[auto_auto]",
      className
    )}
    data-slot="card-header"
    {...props}
  />
)

const CardTitle = ({ className, ...props }: ComponentProps<"div">) => (
  <div className={cn("text-lg font-semibold tracking-wider uppercase", className)} data-slot="card-title" {...props} />
)

const CardDescription = ({ className, ...props }: ComponentProps<"div">) => (
  <div className={cn("text-muted-foreground text-sm leading-relaxed", className)} data-slot="card-description" {...props} />
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
  <div className={cn("px-(--card-spacing) [.border-t]:pt-(--card-spacing) flex items-center", className)} data-slot="card-footer" {...props} />
)

Card.Header = CardHeader
Card.Footer = CardFooter
Card.Title = CardTitle
Card.Action = CardAction
Card.Description = CardDescription
Card.Content = CardContent

export { Card, CardAction, CardContent, CardDescription, CardFooter, CardHeader, CardTitle }
