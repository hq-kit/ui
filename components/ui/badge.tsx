"use client"

import type { ComponentPropsWithoutRef } from "react"
import { Link, type LinkProps } from "react-aria-components"
import { tv, type VariantProps } from "tailwind-variants"
import { cn } from "@/lib/utils"

const badgeVariants = tv({
  base: "cn-badge group/badge inline-flex w-fit shrink-0 items-center justify-center overflow-hidden whitespace-nowrap focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50 aria-invalid:border-destructive aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 [&>svg]:pointer-events-none",
  variants: {
    variant: {
      default: "cn-badge-variant-default",
      secondary: "cn-badge-variant-secondary",
      destructive: "cn-badge-variant-destructive",
      outline: "cn-badge-variant-outline",
      ghost: "cn-badge-variant-ghost",
      link: "cn-badge-variant-link"
    }
  },
  defaultVariants: {
    variant: "default"
  }
})

const Badge = ({
  className,
  variant,
  ...props
}: Omit<LinkProps, "className" | "slot"> & ComponentPropsWithoutRef<"span"> & VariantProps<typeof badgeVariants>) => {
  const Comp = "href" in props ? Link : "span"

  return <Comp className={cn(badgeVariants({ variant }), className)} data-slot="badge" {...props} />
}

export { Badge, badgeVariants }
