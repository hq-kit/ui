import type { ComponentProps } from "react"
import { tv, type VariantProps } from "tailwind-variants"
import { cn } from "@/lib/utils"

function Empty({ className, ...props }: ComponentProps<"div">) {
  return (
    <div
      className={cn(
        "gap-4 rounded-lg border-dashed p-12 flex w-full min-w-0 flex-1 flex-col items-center justify-center text-balance text-center",
        className
      )}
      data-slot="empty"
      {...props}
    />
  )
}

function EmptyHeader({ className, ...props }: ComponentProps<"div">) {
  return (
    <div
      className={cn("gap-2 flex max-w-sm flex-col items-center", className)}
      data-slot="empty-header"
      {...props}
    />
  )
}

const emptyMediaVariants = tv({
  base: "mb-2 flex shrink-0 items-center justify-center [&_svg]:pointer-events-none [&_svg]:shrink-0",
  variants: {
    variant: {
      default: "bg-transparent",
      icon: "bg-muted text-foreground flex size-10 shrink-0 items-center justify-center rounded-lg [&_svg:not([class*='size-'])]:size-6"
    }
  },
  defaultVariants: {
    variant: "default"
  }
})

function EmptyMedia({
  className,
  variant = "default",
  ...props
}: ComponentProps<"div"> & VariantProps<typeof emptyMediaVariants>) {
  return (
    <div
      className={cn(emptyMediaVariants({ variant, className }))}
      data-slot="empty-icon"
      data-variant={variant}
      {...props}
    />
  )
}

function EmptyTitle({ className, ...props }: ComponentProps<"div">) {
  return <div className={cn("text-lg font-medium tracking-tight", className)} data-slot="empty-title" {...props} />
}

function EmptyDescription({ className, ...props }: ComponentProps<"p">) {
  return (
    <div
      className={cn(
        "text-sm/relaxed text-muted-foreground [&>a:hover]:text-primary [&>a]:underline [&>a]:underline-offset-4",
        className
      )}
      data-slot="empty-description"
      {...props}
    />
  )
}

function EmptyContent({ className, ...props }: ComponentProps<"div">) {
  return (
    <div
      className={cn("gap-4 text-sm flex w-full min-w-0 max-w-sm flex-col items-center text-balance", className)}
      data-slot="empty-content"
      {...props}
    />
  )
}

export { Empty, EmptyContent, EmptyDescription, EmptyHeader, EmptyMedia, EmptyTitle }
