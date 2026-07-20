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
                "group-data-selected/field:bg-primary not-group-data-selected/field:bg-input focus-visible:border-ring focus-visible:ring-ring/30 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive dark:aria-invalid:border-destructive/50 dark:not-group-data-selected/field:bg-input/80 shrink-0 rounded-full border border-transparent focus-visible:ring-2 aria-invalid:ring-2 data-[size=default]:h-[16.6px] data-[size=default]:w-[28px] data-[size=sm]:h-[14px] data-[size=sm]:w-[24px] peer group/switch relative inline-flex items-center outline-none transition-all after:absolute group-data-disabled/field:cursor-not-allowed group-data-disabled/field:opacity-50",
                className
              )}
              data-size={size}
              data-slot="switch"
              slot="control"
            >
              <span
                className="bg-background dark:not-group-data-selected/field:bg-foreground dark:group-data-selected/field:bg-primary-foreground rounded-full group-data-[size=default]/switch:size-3.5 group-data-[size=sm]/switch:size-3 group-data-[size=default]/switch:group-data-selected/field:translate-x-[calc(100%-2px)] group-data-[size=sm]/switch:group-data-selected/field:translate-x-[calc(100%-2px)] group-data-[size=default]/switch:not-group-data-selected/field:translate-x-0 group-data-[size=sm]/switch:not-group-data-selected/field:translate-x-0 pointer-events-none block ring-0 transition-transform"
                data-slot="switch-thumb"
              />
            </div>
            {typeof children === "string" ? (
              <Label elementType="span">{children}</Label>
            ) : children ? (
              <div
                className="gap-0.5 group/field-content flex flex-1 flex-col leading-snug *:data-[slot=field-label]:leading-snug"
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
