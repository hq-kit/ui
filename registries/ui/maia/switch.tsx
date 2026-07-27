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
                "peer group/switch relative inline-flex shrink-0 items-center rounded-full border border-transparent not-group-data-selected/field:bg-input outline-none transition-all after:absolute focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50 aria-invalid:border-destructive aria-invalid:ring-[3px] aria-invalid:ring-destructive/20 data-[size=default]:h-[18.4px] data-[size=sm]:h-[14px] data-[size=default]:w-[32px] data-[size=sm]:w-[24px] group-data-disabled/field:cursor-not-allowed group-data-selected/field:bg-primary group-data-disabled/field:opacity-50 dark:not-group-data-selected/field:bg-input/80 dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40",
                className
              )}
              data-size={size}
              data-slot="switch"
              slot="control"
            >
              <span
                className="pointer-events-none block rounded-full bg-background ring-0 transition-transform group-data-[size=default]/switch:group-data-selected/field:translate-x-[calc(100%-2px)] group-data-[size=sm]/switch:group-data-selected/field:translate-x-[calc(100%-2px)] group-data-[size=default]/switch:size-4 group-data-[size=sm]/switch:size-3 group-data-[size=default]/switch:not-group-data-selected/field:translate-x-0 group-data-[size=sm]/switch:not-group-data-selected/field:translate-x-0 dark:not-group-data-selected/field:bg-foreground dark:group-data-selected/field:bg-primary-foreground"
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
