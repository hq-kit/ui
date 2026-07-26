"use client"

import { composeRenderProps } from "react-aria-components/composeRenderProps"
import { SwitchButton, SwitchField, type SwitchFieldProps } from "react-aria-components/Switch"
import { cn } from "@/lib/utils"
import { fieldVariants, Label } from "./field"

const Switch = ({
  children,
  size = "default",
  className,
  ...props
}: SwitchFieldProps & {
  size?: "sm" | "default"
}) => {
  return (
    <SwitchField
      className={composeRenderProps(className, (className) => cn(fieldVariants({ className })))}
      data-slot="switch-field"
      {...props}
    >
      <SwitchButton data-slot="switch">
        {composeRenderProps(children, (children) => (
          <div className={cn(fieldVariants({ orientation: "horizontal" }))}>
            <div
              className={cn(
                "peer group/switch relative inline-flex shrink-0 items-center rounded-full border-2 not-group-data-selected/field:border-transparent not-group-data-selected/field:bg-input/90 outline-none transition-all after:absolute focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 data-[size=default]:h-5 data-[size=sm]:h-4 data-[size=default]:w-11 data-[size=sm]:w-7 group-data-disabled/field:cursor-not-allowed group-data-selected/field:border-primary group-data-selected/field:bg-primary group-data-disabled/field:opacity-50 dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40",
                className
              )}
              data-size={size}
              data-slot="switch"
              slot="control"
            >
              <span
                className="pointer-events-none block not-group-data-selected/field:translate-x-0 rounded-full bg-background not-dark:bg-clip-padding shadow-sm ring-0 transition-transform group-data-[size=default]/switch:h-4 group-data-[size=sm]/switch:h-3 group-data-[size=default]/switch:w-6 group-data-[size=sm]/switch:w-4 group-data-selected/field:translate-x-[calc(100%-8px)] dark:not-group-data-selected/field:bg-foreground dark:group-data-selected/field:bg-primary-foreground"
                data-slot="switch-thumb"
              />
            </div>
            {typeof children === "string" ? (
              <Label elementType="span">{children}</Label>
            ) : children ? (
              <div
                className="group/field-content flex flex-1 flex-col gap-1 leading-snug *:data-[slot=field-label]:leading-snug"
                data-slot="field-content"
              >
                {children}
              </div>
            ) : null}
          </div>
        ))}
      </SwitchButton>
    </SwitchField>
  )
}

export { Switch }
