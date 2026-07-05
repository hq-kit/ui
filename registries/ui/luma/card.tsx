import type { ComponentProps } from "react"
import { cn } from "@/lib/utils"

const Card = ({ className, size = "default", ...props }: ComponentProps<"div"> & { size?: "default" | "sm" }) => (
  <div className={cn("bg-card text-card-foreground ring-foreground/5 dark:ring-foreground/10 gap-(--card-spacing) overflow-hidden rounded-4xl py-(--card-spacing) text-sm shadow-md ring-1 [--card-spacing:--spacing(6)] has-[>img:first-child]:pt-0 data-[size=sm]:[--card-spacing:--spacing(4)] *:[img:first-child]:rounded-t-4xl *:[img:last-child]:rounded-b-4xl group/card flex flex-col", className)} data-size={size} data-slot="card" {...props} />
)

const CardHeader = ({ className, ...props }: ComponentProps<"div">) => (
  <div
    className={cn(
      "gap-1.5 rounded-t-4xl px-(--card-spacing) [.border-b]:pb-(--card-spacing) group/card-header @container/card-header grid auto-rows-min items-start has-data-[slot=card-action]:grid-cols-[1fr_auto] has-data-[slot=card-description]:grid-rows-[auto_auto]",
      className
    )}
    data-slot="card-header"
    {...props}
  />
)

const CardTitle = ({ className, ...props }: ComponentProps<"div">) => (
  <div className={cn("text-base font-medium", className)} data-slot="card-title" {...props} />
)

const CardDescription = ({ className, ...props }: ComponentProps<"div">) => (
  <div className={cn("text-muted-foreground text-sm", className)} data-slot="card-description" {...props} />
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
  <div className={cn("rounded-b-4xl px-(--card-spacing) [.border-t]:pt-(--card-spacing) flex items-center", className)} data-slot="card-footer" {...props} />
)

Card.Header = CardHeader
Card.Title = CardTitle
Card.Description = CardDescription
Card.Action = CardAction
Card.Content = CardContent
Card.Footer = CardFooter

export { Card, CardAction, CardContent, CardDescription, CardFooter, CardHeader, CardTitle }
