import type { ComponentProps, ComponentPropsWithoutRef } from "react"
import { tv, type VariantProps } from "tailwind-variants"
import { Link, type LinkProps } from "@/components/ui/link"
import { cn } from "@/lib/utils"

const BubbleGroup = ({ className, ...props }: ComponentProps<"div">) => (
  <div className={cn("cn-bubble-group flex min-w-0 flex-col", className)} data-slot="bubble-group" {...props} />
)

const bubbleVariants = tv({
  base: "cn-bubble group/bubble relative flex w-fit min-w-0 flex-col",
  variants: {
    variant: {
      default: "cn-bubble-variant-default",
      secondary: "cn-bubble-variant-secondary",
      muted: "cn-bubble-variant-muted",
      tinted: "cn-bubble-variant-tinted",
      outline: "cn-bubble-variant-outline",
      ghost: "cn-bubble-variant-ghost",
      destructive: "cn-bubble-variant-destructive"
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
        "cn-bubble-content wrap-break-word w-fit min-w-0 max-w-full overflow-hidden [button,a]:transition-colors [button]:text-left",
        className
      )}
      data-slot="bubble-content"
      {...props}
    />
  )
}

const bubbleReactionsVariants = tv({
  base: "cn-bubble-reactions absolute z-10 flex w-fit items-center justify-center",
  variants: {
    side: {
      top: "cn-bubble-reactions-side-top",
      bottom: "cn-bubble-reactions-side-bottom"
    },
    align: {
      start: "cn-bubble-reactions-align-start",
      end: "cn-bubble-reactions-align-end"
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
