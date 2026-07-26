import type { ComponentProps } from "react"
import { tv, type VariantProps } from "tailwind-variants"
import { cn } from "@/lib/utils"

const Empty = ({ className, ...props }: ComponentProps<"div">) => (
  <div
    className={cn(
      "flex w-full min-w-0 flex-1 flex-col items-center justify-center gap-4 text-balance rounded-xl border-dashed p-6 text-center",
      className
    )}
    data-slot="empty"
    {...props}
  />
)

const EmptyHeader = ({ className, ...props }: ComponentProps<"div">) => (
  <div className={cn("flex max-w-sm flex-col items-center gap-1", className)} data-slot="empty-header" {...props} />
)

const emptyMediaVariants = tv({
  base: "mb-2 flex shrink-0 items-center justify-center [&_svg]:pointer-events-none [&_svg]:shrink-0",
  variants: {
    variant: {
      default: "bg-transparent",
      icon: "flex size-8 shrink-0 items-center justify-center rounded-md bg-muted text-foreground [&_svg:not([class*='size-'])]:size-4"
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
  <div className={cn("font-medium text-sm tracking-tight", className)} data-slot="empty-title" {...props} />
)

const EmptyDescription = ({ className, ...props }: ComponentProps<"p">) => (
  <div
    className={cn(
      "text-muted-foreground text-xs/relaxed [&>a:hover]:text-primary [&>a]:underline [&>a]:underline-offset-4",
      className
    )}
    data-slot="empty-description"
    {...props}
  />
)

const EmptyContent = ({ className, ...props }: ComponentProps<"div">) => (
  <div
    className={cn("flex w-full min-w-0 max-w-sm flex-col items-center gap-2 text-balance text-xs/relaxed", className)}
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
