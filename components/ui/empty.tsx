import type { ComponentProps } from "react"
import { tv, type VariantProps } from "tailwind-variants"
import { cn } from "@/lib/utils"

const Empty = ({ className, ...props }: ComponentProps<"div">) => (
  <div
    className={cn(
      "cn-empty flex w-full min-w-0 flex-1 flex-col items-center justify-center text-balance text-center",
      className
    )}
    data-slot="empty"
    {...props}
  />
)

const EmptyHeader = ({ className, ...props }: ComponentProps<"div">) => (
  <div
    className={cn("cn-empty-header flex max-w-sm flex-col items-center", className)}
    data-slot="empty-header"
    {...props}
  />
)

const emptyMediaVariants = tv({
  base: "cn-empty-media flex shrink-0 items-center justify-center [&_svg]:pointer-events-none [&_svg]:shrink-0",
  variants: {
    variant: {
      default: "cn-empty-media-default",
      icon: "cn-empty-media-icon"
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
  <div className={cn("cn-empty-title cn-font-heading", className)} data-slot="empty-title" {...props} />
)

const EmptyDescription = ({ className, ...props }: ComponentProps<"p">) => (
  <div
    className={cn(
      "cn-empty-description text-muted-foreground [&>a:hover]:text-primary [&>a]:underline [&>a]:underline-offset-4",
      className
    )}
    data-slot="empty-description"
    {...props}
  />
)

const EmptyContent = ({ className, ...props }: ComponentProps<"div">) => (
  <div
    className={cn("cn-empty-content flex w-full min-w-0 max-w-sm flex-col items-center text-balance", className)}
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
