"use client"

import type { Ref } from "react"
import type { VariantProps } from "tailwind-variants"
import { Button as RACButton, type ButtonProps as RACButtonProps } from "react-aria-components/Button"
import { composeRenderProps } from "react-aria-components/composeRenderProps"
import { IconPlaceholder } from "@/components/icon-placeholder"
import { cn } from "@/lib/utils"
import { buttonVariants } from "./button-group"

interface ButtonProps extends RACButtonProps, VariantProps<typeof buttonVariants> {
  ref?: Ref<HTMLButtonElement>
}

const Button = ({ className, variant, size, children, ...props }: ButtonProps) => (
  <RACButton
    className={composeRenderProps(className, (className) =>
      cn(buttonVariants({ variant, size, isPending: props.isPending, className }))
    )}
    data-slot="button"
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

export type { ButtonProps }
export { Button, buttonVariants }
