import type { ComponentProps } from "react"
import { tv, type VariantProps } from "tailwind-variants"
import { cn } from "@/lib/utils"

const alertVariants = tv({
  base: "grid gap-1 bg-background border px-4 py-3 text-left text-sm has-data-[slot=alert-action]:relative has-data-[slot=alert-action]:pr-18 has-[>svg]:grid-cols-[auto_1fr] has-[>svg]:gap-x-2.5 *:[svg]:row-span-2 *:[svg]:translate-y-0.5 *:[svg]:text-current *:[svg:not([class*='size-'])]:size-4 relative after:-inset-y-px after:-left-px after:w-0.5 after:absolute group/alert relative w-full",
  variants: {
    variant: {
      default: "bg-card text-card-foreground after:bg-foreground",
      destructive: "text-destructive bg-card *:data-[slot=alert-description]:text-destructive/90 *:[svg]:text-current after:bg-destructive"
    }
  },
  defaultVariants: {
    variant: "default"
  }
})

const Alert = ({ className, variant, ...props }: ComponentProps<"div"> & VariantProps<typeof alertVariants>) => (
  <div className={cn(alertVariants({ variant }), className)} data-slot="alert" role="alert" {...props} />
)

const AlertTitle = ({ className, ...props }: ComponentProps<"div">) => (
  <div
    className={cn("font-semibold group-has-[>svg]/alert:col-start-2 text-sm [&_a]:underline [&_a]:underline-offset-3 [&_a]:hover:text-foreground", className)}
    data-slot="alert-title"
    {...props}
  />
)

const AlertDescription = ({ className, ...props }: ComponentProps<"div">) => (
  <div
    className={cn(
      "text-muted-foreground text-sm text-balance md:text-pretty [&_p:not(:last-child)]:mb-4 [&_a]:underline [&_a]:underline-offset-3 [&_a]:hover:text-foreground",
      className
    )}
    data-slot="alert-description"
    {...props}
  />
)

const AlertAction = ({ className, ...props }: ComponentProps<"div">) => (
  <div className={cn("absolute top-2.5 right-3", className)} data-slot="alert-action" {...props} />
)

Alert.Title = AlertTitle
Alert.Description = AlertDescription
Alert.Action = AlertAction

export { Alert, AlertAction, AlertDescription, AlertTitle }
