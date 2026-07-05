import type { ComponentProps } from "react"
import { tv, type VariantProps } from "tailwind-variants"
import { cn } from "@/lib/utils"
import { Separator } from "./separator"

const buttonVariants = tv({
  base: "focus-visible:border-ring focus-visible:ring-ring/30 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive dark:aria-invalid:border-destructive/50 rounded-md border border-transparent bg-clip-padding text-xs/relaxed font-medium focus-visible:ring-2 aria-invalid:ring-2 data-pressed:translate-y-px [&_svg:not([class*='size-'])]:size-4 group/button inline-flex shrink-0 select-none items-center justify-center whitespace-nowrap outline-none transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0",
  variants: {
    variant: {
      default: "bg-primary text-primary-foreground hover:bg-primary/80",
      outline: "border-border dark:bg-input/30 hover:bg-input/50 hover:text-foreground aria-expanded:bg-muted aria-expanded:text-foreground",
      secondary: "bg-secondary text-secondary-foreground hover:bg-[color-mix(in_oklch,var(--secondary),var(--foreground)_5%)] aria-expanded:bg-secondary aria-expanded:text-secondary-foreground",
      ghost: "hover:bg-muted hover:text-foreground dark:hover:bg-muted/50 aria-expanded:bg-muted aria-expanded:text-foreground",
      destructive: "bg-destructive/10 hover:bg-destructive/20 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/20 text-destructive focus-visible:border-destructive/40 dark:hover:bg-destructive/30",
      link: "text-primary underline-offset-4 hover:underline"
    },
    size: {
      default: "h-7 gap-1 px-2 text-xs/relaxed has-data-[icon=inline-end]:pr-1.5 has-data-[icon=inline-start]:pl-1.5 [&_svg:not([class*='size-'])]:size-3.5",
      xs: "h-5 gap-1 rounded-sm px-2 text-[0.625rem] has-data-[icon=inline-end]:pr-1.5 has-data-[icon=inline-start]:pl-1.5 [&_svg:not([class*='size-'])]:size-2.5",
      sm: "h-6 gap-1 px-2 text-xs/relaxed has-data-[icon=inline-end]:pr-1.5 has-data-[icon=inline-start]:pl-1.5 [&_svg:not([class*='size-'])]:size-3",
      lg: "h-8 gap-1 px-2.5 text-xs/relaxed has-data-[icon=inline-end]:pr-2 has-data-[icon=inline-start]:pl-2 [&_svg:not([class*='size-'])]:size-4",
      icon: "size-7 [&_svg:not([class*='size-'])]:size-3.5",
      "icon-xs": "size-5 rounded-sm [&_svg:not([class*='size-'])]:size-2.5",
      "icon-sm": "size-6 [&_svg:not([class*='size-'])]:size-3",
      "icon-lg": "size-8 [&_svg:not([class*='size-'])]:size-4"
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
  base: "has-[>[data-slot=button-group]]:gap-2 has-[select[aria-hidden=true]:last-child]:[&>[data-slot=select-trigger]:last-of-type]:rounded-r-md group/button-group flex w-fit items-stretch *:focus-visible:relative *:focus-visible:z-10 [&>[data-slot=select-trigger]:not([class*='w-'])]:w-fit [&>input]:flex-1",
  variants: {
    orientation: {
      horizontal:
        "[&>[data-slot]:not(:has(~[data-slot]))]:rounded-r-md! [&>*:not(:first-child)]:rounded-l-none [&>*:not(:first-child)]:border-l-0 [&>*:not(:last-child)]:rounded-r-none",
      vertical:
        "[&>[data-slot]:not(:has(~[data-slot]))]:rounded-b-md! flex-col [&>*:not(:first-child)]:rounded-t-none [&>*:not(:first-child)]:border-t-0 [&>*:not(:last-child)]:rounded-b-none"
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
  <div className={cn("bg-muted gap-2 rounded-md border px-2.5 text-xs/relaxed font-medium [&_svg:not([class*='size-'])]:size-4 flex items-center [&_svg]:pointer-events-none", className)} {...props} />
)

const ButtonGroupSeparator = ({ className, orientation = "vertical", ...props }: ComponentProps<typeof Separator>) => (
  <Separator
    className={cn(
      "bg-input relative self-stretch data-horizontal:mx-px data-vertical:my-px data-vertical:h-auto data-horizontal:w-auto",
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
