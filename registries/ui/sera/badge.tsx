"use client"

import type { ComponentPropsWithoutRef } from "react"
import { Link, type LinkProps } from "react-aria-components/Link"
import { tv, type VariantProps } from "tailwind-variants"
import { cn } from "@/lib/utils"

const badgeVariants = tv({
  base: "gap-1.5 rounded-none border-0 bg-transparent px-0 py-0 text-[0.625rem] font-semibold uppercase tracking-widest transition-colors has-data-[icon=inline-end]:pr-0 has-data-[icon=inline-start]:pl-0 [&>svg]:size-3! group/badge inline-flex w-fit shrink-0 items-center justify-center overflow-hidden whitespace-nowrap focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50 aria-invalid:border-destructive aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 [&>svg]:pointer-events-none",
  variants: {
    variant: {
      default: "text-foreground [a]:hover:text-foreground/70",
      secondary: "text-muted-foreground [a]:hover:text-foreground",
      destructive: "text-destructive [a]:hover:text-destructive/70 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40",
      outline: "text-foreground [a]:hover:text-foreground/70",
      ghost: "text-muted-foreground hover:text-foreground",
      link: "text-foreground underline-offset-4 hover:underline"
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
