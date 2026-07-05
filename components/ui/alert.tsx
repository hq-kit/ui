import type { ComponentProps } from "react"
import { tv, type VariantProps } from "tailwind-variants"
import { cn } from "@/lib/utils"

const alertVariants = tv({
  base: "cn-alert group/alert relative w-full",
  variants: {
    variant: {
      default: "cn-alert-variant-default",
      destructive: "cn-alert-variant-destructive"
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
    className={cn("cn-alert-title [&_a]:underline [&_a]:underline-offset-3 [&_a]:hover:text-foreground", className)}
    data-slot="alert-title"
    {...props}
  />
)

const AlertDescription = ({ className, ...props }: ComponentProps<"div">) => (
  <div
    className={cn(
      "cn-alert-description [&_a]:underline [&_a]:underline-offset-3 [&_a]:hover:text-foreground",
      className
    )}
    data-slot="alert-description"
    {...props}
  />
)

const AlertAction = ({ className, ...props }: ComponentProps<"div">) => (
  <div className={cn("cn-alert-action", className)} data-slot="alert-action" {...props} />
)

Alert.Title = AlertTitle
Alert.Description = AlertDescription
Alert.Action = AlertAction

export { Alert, AlertAction, AlertDescription, AlertTitle }
