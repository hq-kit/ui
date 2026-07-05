import type { ComponentProps } from "react"
import { tv, type VariantProps } from "tailwind-variants"
import { cn } from "@/lib/utils"
import { Separator } from "./separator"

const buttonVariants = tv({
  base: "cn-button group/button inline-flex shrink-0 select-none items-center justify-center whitespace-nowrap outline-none transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0",
  variants: {
    variant: {
      default: "cn-button-variant-default",
      outline: "cn-button-variant-outline",
      secondary: "cn-button-variant-secondary",
      ghost: "cn-button-variant-ghost",
      destructive: "cn-button-variant-destructive",
      link: "cn-button-variant-link"
    },
    size: {
      default: "cn-button-size-default",
      xs: "cn-button-size-xs",
      sm: "cn-button-size-sm",
      lg: "cn-button-size-lg",
      icon: "cn-button-size-icon",
      "icon-xs": "cn-button-size-icon-xs",
      "icon-sm": "cn-button-size-icon-sm",
      "icon-lg": "cn-button-size-icon-lg"
    },
    isPending: {
      true: "pointer-events-none opacity-50 [&_svg:not([data-slot='loader'])]:hidden"
    }
  },
  defaultVariants: {
    variant: "default",
    size: "default"
  }
})

const buttonGroupVariants = tv({
  base: "cn-button-group group/button-group flex w-fit items-stretch *:focus-visible:relative *:focus-visible:z-10 [&>[data-slot=select-trigger]:not([class*='w-'])]:w-fit [&>input]:flex-1",
  variants: {
    orientation: {
      horizontal:
        "cn-button-group-orientation-horizontal [&>*:not(:first-child)]:rounded-l-none [&>*:not(:first-child)]:border-l-0 [&>*:not(:last-child)]:rounded-r-none",
      vertical:
        "cn-button-group-orientation-vertical flex-col [&>*:not(:first-child)]:rounded-t-none [&>*:not(:first-child)]:border-t-0 [&>*:not(:last-child)]:rounded-b-none"
    }
  },
  defaultVariants: {
    orientation: "horizontal"
  }
})

const ButtonGroup = ({
  className,
  orientation,
  ...props
}: ComponentProps<"div"> & VariantProps<typeof buttonGroupVariants>) => (
  <div
    className={cn(buttonGroupVariants({ orientation }), className)}
    data-orientation={orientation}
    data-slot="button-group"
    role="group"
    {...props}
  />
)

const ButtonGroupText = ({ className, ...props }: ComponentProps<"div">) => (
  <div className={cn("cn-button-group-text flex items-center [&_svg]:pointer-events-none", className)} {...props} />
)

const ButtonGroupSeparator = ({ className, orientation = "vertical", ...props }: ComponentProps<typeof Separator>) => (
  <Separator
    className={cn(
      "cn-button-group-separator relative self-stretch data-horizontal:mx-px data-vertical:my-px data-vertical:h-auto data-horizontal:w-auto",
      className
    )}
    data-slot="button-group-separator"
    orientation={orientation}
    {...props}
  />
)

ButtonGroup.Text = ButtonGroupText
ButtonGroup.Separator = ButtonGroupSeparator

export { ButtonGroup, ButtonGroupSeparator, ButtonGroupText, buttonVariants }
