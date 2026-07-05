import type { ComponentProps } from "react"
import { tv, type VariantProps } from "tailwind-variants"
import { cn } from "@/lib/utils"
import { Separator } from "./separator"

const buttonVariants = tv({
  base: "focus-visible:border-ring focus-visible:ring-ring/30 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive dark:aria-invalid:border-destructive/50 rounded-2xl border border-transparent bg-clip-padding text-sm font-medium focus-visible:ring-3 aria-invalid:ring-3 data-pressed:translate-y-px [&_svg:not([class*='size-'])]:size-4 group/button inline-flex shrink-0 select-none items-center justify-center whitespace-nowrap outline-none transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0",
  variants: {
    variant: {
      default: "bg-primary text-primary-foreground hover:bg-primary/80",
      outline: "border-border bg-background dark:bg-transparent hover:bg-muted hover:text-foreground dark:hover:bg-input/30 aria-expanded:bg-muted aria-expanded:text-foreground",
      secondary: "bg-secondary text-secondary-foreground hover:bg-[color-mix(in_oklch,var(--secondary),var(--foreground)_5%)] aria-expanded:bg-secondary aria-expanded:text-secondary-foreground",
      ghost: "hover:bg-muted hover:text-foreground dark:hover:bg-muted/50 aria-expanded:bg-muted aria-expanded:text-foreground",
      destructive: "bg-destructive/10 hover:bg-destructive/20 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/20 text-destructive focus-visible:border-destructive/40 dark:hover:bg-destructive/30",
      link: "text-primary underline-offset-4 hover:underline"
    },
    size: {
      default: "h-8 gap-1.5 px-3 has-data-[icon=inline-end]:pr-2.5 has-data-[icon=inline-start]:pl-2.5",
      xs: "h-6 gap-1 px-2.5 text-xs has-data-[icon=inline-end]:pr-2 has-data-[icon=inline-start]:pl-2 [&_svg:not([class*='size-'])]:size-3",
      sm: "h-7 gap-1 px-3 has-data-[icon=inline-end]:pr-2 has-data-[icon=inline-start]:pl-2",
      lg: "h-9 gap-1.5 px-4 has-data-[icon=inline-end]:pr-3 has-data-[icon=inline-start]:pl-3",
      icon: "size-8",
      "icon-xs": "size-6 [&_svg:not([class*='size-'])]:size-3",
      "icon-sm": "size-7",
      "icon-lg": "size-9"
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
  base: "has-[>[data-slot=button-group]]:gap-2 has-[select[aria-hidden=true]:last-child]:[&>[data-slot=select-trigger]:last-of-type]:rounded-r-2xl has-[>[data-variant=outline]]:[&>input]:border-border has-[>[data-variant=outline]]:[&>input:focus-visible]:border-ring has-[>[data-variant=outline]]:*:data-[slot=input-group]:border-border has-[>[data-variant=outline]]:[&>[data-slot=input-group]:has(:focus-visible)]:border-ring has-[>[data-variant=outline]]:*:data-[slot=select-trigger]:border-border has-[>[data-variant=outline]]:[&>[data-slot=select-trigger]:focus-visible]:border-ring group/button-group flex w-fit items-stretch *:focus-visible:relative *:focus-visible:z-10 [&>[data-slot=select-trigger]:not([class*='w-'])]:w-fit [&>input]:flex-1",
  variants: {
    orientation: {
      horizontal:
        "[&>[data-slot]:not(:has(~[data-slot]))]:rounded-r-2xl! [&>*:not(:first-child)]:rounded-l-none [&>*:not(:first-child)]:border-l-0 [&>*:not(:last-child)]:rounded-r-none",
      vertical:
        "[&>[data-slot]:not(:has(~[data-slot]))]:rounded-b-2xl! flex-col [&>*:not(:first-child)]:rounded-t-none [&>*:not(:first-child)]:border-t-0 [&>*:not(:last-child)]:rounded-b-none"
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
  <div className={cn("bg-muted gap-2 rounded-2xl border px-2.5 text-sm font-medium [&_svg:not([class*='size-'])]:size-4 flex items-center [&_svg]:pointer-events-none", className)} {...props} />
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
