import type { ComponentProps } from "react"
import { cn } from "@/lib/utils"

function Card({ className, size = "default", ...props }: ComponentProps<"div"> & { size?: "default" | "sm" }) {
  return (
    <div className={cn("cn-card group/card flex flex-col", className)} data-size={size} data-slot="card" {...props} />
  )
}

function CardHeader({ className, ...props }: ComponentProps<"div">) {
  return (
    <div
      className={cn(
        "cn-card-header group/card-header @container/card-header grid auto-rows-min items-start has-data-[slot=card-action]:grid-cols-[1fr_auto] has-data-[slot=card-description]:grid-rows-[auto_auto]",
        className
      )}
      data-slot="card-header"
      {...props}
    />
  )
}

function CardTitle({ className, ...props }: ComponentProps<"div">) {
  return <div className={cn("cn-card-title cn-font-heading", className)} data-slot="card-title" {...props} />
}

function CardDescription({ className, ...props }: ComponentProps<"div">) {
  return <div className={cn("cn-card-description", className)} data-slot="card-description" {...props} />
}

function CardAction({ className, ...props }: ComponentProps<"div">) {
  return (
    <div
      className={cn("cn-card-action col-start-2 row-span-2 row-start-1 self-start justify-self-end", className)}
      data-slot="card-action"
      {...props}
    />
  )
}

function CardContent({ className, ...props }: ComponentProps<"div">) {
  return <div className={cn("cn-card-content", className)} data-slot="card-content" {...props} />
}

function CardFooter({ className, ...props }: ComponentProps<"div">) {
  return <div className={cn("cn-card-footer flex items-center", className)} data-slot="card-footer" {...props} />
}

Card.Header = CardHeader
Card.Footer = CardFooter
Card.Title = CardTitle
Card.Action = CardAction
Card.Description = CardDescription
Card.Content = CardContent

export { Card, CardAction, CardContent, CardDescription, CardFooter, CardHeader, CardTitle }
