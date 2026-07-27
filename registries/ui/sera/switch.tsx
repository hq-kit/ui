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
                "peer group/switch relative inline-flex shrink-0 items-center rounded-none border not-group-data-selected/field:border-input/50 not-group-data-selected/field:bg-input outline-none transition-all after:absolute focus-visible:border-ring focus-visible:ring-2 focus-visible:ring-ring/30 aria-invalid:border-destructive aria-invalid:ring-2 aria-invalid:ring-destructive/20 data-[size=default]:h-4.5 data-[size=sm]:h-3.5 data-[size=default]:w-8.25 data-[size=sm]:w-6.25 group-data-disabled/field:cursor-not-allowed group-data-selected/field:border-primary group-data-selected/field:bg-primary group-data-disabled/field:opacity-50 dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40",
                className
              )}
              data-size={size}
              data-slot="switch"
              slot="control"
            >
              <span
                className="pointer-events-none block not-group-data-selected/field:translate-x-0.25 bg-background ring-0 transition-transform group-data-[size=default]/switch:size-3.5 group-data-[size=sm]/switch:size-2.5 group-data-selected/field:translate-x-[calc(100%+2px)] dark:not-group-data-selected/field:bg-foreground dark:group-data-selected/field:bg-primary-foreground"
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
