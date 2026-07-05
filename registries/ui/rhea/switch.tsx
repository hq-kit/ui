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
                "dark:group-data-selected/field:bg-primary group-data-selected/field:bg-primary bg-input/90 group-data-selected/field:border-primary border-2 border-transparent focus-visible:border-ring focus-visible:ring-ring/30 group-data-invalid/field:ring-destructive/20 dark:group-data-invalid/field:ring-destructive/40 group-data-invalid/field:border-destructive dark:group-data-invalid/field:border-destructive/50 shrink-0 rounded-2xl focus-visible:ring-3 group-data-invalid/field:ring-3 data-[size=default]:h-5 data-[size=default]:w-8 data-[size=sm]:h-4 data-[size=sm]:w-6 peer group/switch relative inline-flex items-center outline-none transition-all after:absolute group-data-disabled/field:cursor-not-allowed group-data-disabled/field:opacity-50",
                className
              )}
              data-size={size}
              data-slot="switch"
              slot="control"
            >
              <span
                className="bg-background dark:bg-foreground dark:group-data-selected/field:bg-primary-foreground rounded-2xl shadow-sm group-data-[size=default]/switch:size-4 group-data-[size=sm]/switch:size-3 group-data-selected/field:translate-x-[calc(100%-4px)] translate-x-0 not-dark:bg-clip-padding pointer-events-none block ring-0 transition-transform"
                data-slot="switch-thumb"
              />
            </div>
            {typeof children === "string" ? (
              <Label elementType="span">{children}</Label>
            ) : children ? (
              <div
                className="gap-1 group/field-content flex flex-1 flex-col leading-snug *:data-[slot=field-label]:leading-snug"
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
