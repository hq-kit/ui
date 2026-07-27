import type { ComponentProps, ComponentPropsWithoutRef } from "react"
import { tv, type VariantProps } from "tailwind-variants"
import { cn } from "@/lib/utils"
import { Link, type LinkProps } from "./link"

const BubbleGroup = ({ className, ...props }: ComponentProps<"div">) => (
  <div className={cn("gap-2 flex min-w-0 flex-col", className)} data-slot="bubble-group" {...props} />
)

const bubbleVariants = tv({
  base: "gap-1 data-[align=end]:self-end max-w-[80%] data-[variant=ghost]:max-w-full group-data-[align=end]/message:self-end group/bubble relative flex w-fit min-w-0 flex-col",
  variants: {
    variant: {
      default: "*:data-[slot=bubble-content]:bg-primary *:data-[slot=bubble-content]:text-primary-foreground [&>[data-slot=bubble-content]:is(button,a):hover]:bg-primary/80",
      secondary: "*:data-[slot=bubble-content]:bg-secondary *:data-[slot=bubble-content]:text-secondary-foreground [&>[data-slot=bubble-content]:is(button,a):hover]:bg-[color-mix(in_oklch,var(--secondary),var(--foreground)_5%)]",
      muted: "*:data-[slot=bubble-content]:bg-muted [&>[data-slot=bubble-content]:is(button,a):hover]:bg-[color-mix(in_oklch,var(--muted),var(--foreground)_5%)]",
      tinted: "*:data-[slot=bubble-content]:bg-[oklch(from_var(--primary)_0.93_calc(c*0.4)_h)] dark:*:data-[slot=bubble-content]:bg-[oklch(from_var(--primary)_0.3_calc(c*0.4)_h)] *:data-[slot=bubble-content]:text-foreground [&>[data-slot=bubble-content]:is(button,a):hover]:bg-[oklch(from_var(--primary)_0.88_calc(c*0.5)_h)] dark:[&>[data-slot=bubble-content]:is(button,a):hover]:bg-[oklch(from_var(--primary)_0.35_calc(c*0.5)_h)]",
      outline: "*:data-[slot=bubble-content]:bg-background *:data-[slot=bubble-content]:border-border [&>[data-slot=bubble-content]:is(button,a):hover]:bg-muted [&>[data-slot=bubble-content]:is(button,a):hover]:text-foreground dark:[&>[data-slot=bubble-content]:is(button,a):hover]:bg-input/30",
      ghost: "*:data-[slot=bubble-content]:rounded-none *:data-[slot=bubble-content]:bg-transparent *:data-[slot=bubble-content]:p-0 [&>[data-slot=bubble-content]:is(button,a):hover]:bg-muted [&>[data-slot=bubble-content]:is(button,a):hover]:text-foreground dark:[&>[data-slot=bubble-content]:is(button,a):hover]:bg-muted/50 border-none",
      destructive: "*:data-[slot=bubble-content]:bg-destructive/10 dark:*:data-[slot=bubble-content]:bg-destructive/20 *:data-[slot=bubble-content]:text-destructive [&>[data-slot=bubble-content]:is(button,a):hover]:bg-destructive/20 dark:[&>[data-slot=bubble-content]:is(button,a):hover]:bg-destructive/30"
    }
  },
  defaultVariants: {
    variant: "default"
  }
})

const Bubble = ({
  variant = "default",
  align = "start",
  className,
  ...props
}: ComponentProps<"div"> &
  VariantProps<typeof bubbleVariants> & {
    align?: "start" | "end"
  }) => (
  <div
    className={cn(bubbleVariants({ variant }), className)}
    data-align={align}
    data-slot="bubble"
    data-variant={variant}
    {...props}
  />
)

const BubbleContent = ({
  className,
  ...props
}: Omit<LinkProps, "slot" | "className" | "ref"> & Omit<ComponentPropsWithoutRef<"div">, "style">) => {
  const Comp = "href" in props ? Link : "div"

  return (
    <Comp
      className={cn(
        "rounded-3xl border border-transparent px-3 py-2.5 text-sm leading-relaxed [button,a]:outline-none [button,a]:focus-visible:border-ring [button,a]:focus-visible:ring-3 [button,a]:focus-visible:ring-ring/30 group-data-[align=end]/bubble:self-end wrap-break-word w-fit min-w-0 max-w-full overflow-hidden [button,a]:transition-colors [button]:text-left",
        className
      )}
      data-slot="bubble-content"
      {...props}
    />
  )
}

const bubbleReactionsVariants = tv({
  base: "rounded-full ring-3 ring-card bg-muted shrink-0 gap-1 px-1.5 py-0.5 has-[button]:p-0 text-sm absolute z-10 flex w-fit items-center justify-center",
  variants: {
    side: {
      top: "top-0 -translate-y-3/4",
      bottom: "bottom-0 translate-y-3/4"
    },
    align: {
      start: "left-3",
      end: "right-3"
    }
  },
  defaultVariants: {
    side: "bottom",
    align: "end"
  }
})

const BubbleReactions = ({
  side = "bottom",
  align = "end",
  className,
  ...props
}: ComponentProps<"div"> & {
  align?: "start" | "end"
  side?: "top" | "bottom"
}) => (
  <div
    className={cn(bubbleReactionsVariants({ side, align }), className)}
    data-align={align}
    data-side={side}
    data-slot="bubble-reactions"
    {...props}
  />
)

Bubble.Content = BubbleContent
Bubble.Reactions = BubbleReactions
Bubble.Group = BubbleGroup

export { Bubble, BubbleContent, BubbleGroup, BubbleReactions }
