"use client"

import type { RefAttributes } from "react"
import { type ButtonProps, Button as RACButton } from "react-aria-components/Button"
import { composeRenderProps } from "react-aria-components/composeRenderProps"
import { Link, type LinkProps } from "react-aria-components/Link"
import { tv, type VariantProps } from "tailwind-variants"
import { IconPlaceholder } from "@/components/icon-placeholder"
import { cn } from "@/lib/utils"

const buttonVariants = tv({
  base: "focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive dark:aria-invalid:border-destructive/50 rounded-lg border border-transparent bg-clip-padding text-sm font-medium focus-visible:ring-3 aria-invalid:ring-3 active:not-aria-[haspopup]:translate-y-px [&_svg:not([class*='size-'])]:size-4 group/button inline-flex shrink-0 select-none items-center justify-center whitespace-nowrap outline-none transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0",
  variants: {
    variant: {
      default: "bg-primary text-primary-foreground hover:bg-primary/80",
      outline: "border-border bg-background hover:bg-muted hover:text-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50 aria-expanded:bg-muted aria-expanded:text-foreground",
      secondary: "bg-secondary text-secondary-foreground hover:bg-[color-mix(in_oklch,var(--secondary),var(--foreground)_5%)] aria-expanded:bg-secondary aria-expanded:text-secondary-foreground",
      ghost: "hover:bg-muted hover:text-foreground dark:hover:bg-muted/50 aria-expanded:bg-muted aria-expanded:text-foreground",
      destructive: "bg-destructive/10 hover:bg-destructive/20 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/20 text-destructive focus-visible:border-destructive/40 dark:hover:bg-destructive/30",
      link: "text-primary underline-offset-4 hover:underline"
    },
    size: {
      default: "h-8 gap-1.5 px-2.5 has-data-[icon=inline-end]:pr-2 has-data-[icon=inline-start]:pl-2",
      xs: "h-6 gap-1 rounded-[min(var(--radius-md),10px)] px-2 text-xs in-data-[slot=button-group]:rounded-lg has-data-[icon=inline-end]:pr-1.5 has-data-[icon=inline-start]:pl-1.5 [&_svg:not([class*='size-'])]:size-3",
      sm: "h-7 gap-1 rounded-[min(var(--radius-md),12px)] px-2.5 text-[0.8rem] in-data-[slot=button-group]:rounded-lg has-data-[icon=inline-end]:pr-1.5 has-data-[icon=inline-start]:pl-1.5 [&_svg:not([class*='size-'])]:size-3.5",
      lg: "h-9 gap-1.5 px-2.5 has-data-[icon=inline-end]:pr-2 has-data-[icon=inline-start]:pl-2",
      icon: "size-8",
      "icon-xs": "size-6 rounded-[min(var(--radius-md),10px)] in-data-[slot=button-group]:rounded-lg [&_svg:not([class*='size-'])]:size-3",
      "icon-sm": "size-7 rounded-[min(var(--radius-md),12px)] in-data-[slot=button-group]:rounded-lg",
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

const Button = ({
  className,
  variant,
  size,
  children,
  ...props
}: Omit<ButtonProps, "className"> &
  RefAttributes<HTMLButtonElement> &
  VariantProps<typeof buttonVariants> & {
    className?: string
  }) => (
  <RACButton
    className={composeRenderProps(className, (className) =>
      cn(buttonVariants({ variant, size, isPending: props.isPending, className }))
    )}
    data-size={size}
    data-slot="button"
    data-variant={variant}
    {...props}
  >
    {(values) => (
      <>
        {values.isPending && (
          <IconPlaceholder
            aria-label="Loading"
            className="pointer-events-none size-4 shrink-0 animate-spin"
            data-slot="loader"
            hugeicons="Loading03Icon"
            lucide="LoaderIcon"
            phosphor="SpinnerIcon"
            remixicon="RiLoaderLine"
            role="status"
            tabler="IconLoader"
          />
        )}
        {typeof children === "function" ? children(values) : children}
      </>
    )}
  </RACButton>
)

const LinkButton = ({
  className,
  variant = "default",
  size = "default",
  ...props
}: Omit<LinkProps, "className"> &
  VariantProps<typeof buttonVariants> & {
    className?: string
  }) => (
  <Link
    className={cn(buttonVariants({ variant, size, className }))}
    data-size={size}
    data-slot="button"
    data-variant={variant}
    {...props}
  />
)

Button.Link = LinkButton

export type { ButtonProps }
export { Button, buttonVariants, LinkButton }
