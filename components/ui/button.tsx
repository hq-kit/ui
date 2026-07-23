"use client"

import type { RefAttributes } from "react"
import { type ButtonProps, Button as RACButton } from "react-aria-components/Button"
import { composeRenderProps } from "react-aria-components/composeRenderProps"
import { Link, type LinkProps } from "react-aria-components/Link"
import { tv, type VariantProps } from "tailwind-variants"
import { IconPlaceholder } from "@/components/icon-placeholder"
import { cn } from "@/lib/utils"

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
