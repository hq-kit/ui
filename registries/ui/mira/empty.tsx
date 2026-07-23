import type { ComponentProps } from "react"
import { tv, type VariantProps } from "tailwind-variants"
import { cn } from "@/lib/utils"

const Empty = ({ className, ...props }: ComponentProps<"div">) => (
  <div
    className={cn(
      "gap-4 rounded-xl border-dashed p-6 flex w-full min-w-0 flex-1 flex-col items-center justify-center text-balance text-center",
      className
    )}
    data-slot="empty"
    {...props}
  />
)

const EmptyHeader = ({ className, ...props }: ComponentProps<"div">) => (
  <div
    className={cn("gap-1 flex max-w-sm flex-col items-center", className)}
    data-slot="empty-header"
    {...props}
  />
)

const emptyMediaVariants = tv({
  base: "mb-2 flex shrink-0 items-center justify-center [&_svg]:pointer-events-none [&_svg]:shrink-0",
  variants: {
    variant: {
      default: "bg-transparent",
      icon: "bg-muted text-foreground flex size-8 shrink-0 items-center justify-center rounded-md [&_svg:not([class*='size-'])]:size-4"
    }
  },
  defaultVariants: {
    variant: "default"
  }
})

const EmptyMedia = ({
  className,
  variant = "default",
  ...props
}: ComponentProps<"div"> & VariantProps<typeof emptyMediaVariants>) => (
  <div
    className={cn(emptyMediaVariants({ variant, className }))}
    data-slot="empty-icon"
    data-variant={variant}
    {...props}
  />
)

const EmptyTitle = ({ className, ...props }: ComponentProps<"div">) => (
  <div className={cn("text-sm font-medium tracking-tight", className)} data-slot="empty-title" {...props} />
)

const EmptyDescription = ({ className, ...props }: ComponentProps<"p">) => (
  <div
    className={cn(
      "text-xs/relaxed text-muted-foreground [&>a:hover]:text-primary [&>a]:underline [&>a]:underline-offset-4",
      className
    )}
    data-slot="empty-description"
    {...props}
  />
)

const EmptyContent = ({ className, ...props }: ComponentProps<"div">) => (
  <div
    className={cn("gap-2 text-xs/relaxed flex w-full min-w-0 max-w-sm flex-col items-center text-balance", className)}
    data-slot="empty-content"
    {...props}
  />
)

Empty.Content = EmptyContent
Empty.Description = EmptyDescription
Empty.Header = EmptyHeader
Empty.Media = EmptyMedia
Empty.Title = EmptyTitle

export { Empty, EmptyContent, EmptyDescription, EmptyHeader, EmptyMedia, EmptyTitle }
