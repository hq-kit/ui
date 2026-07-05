"use client"

import type { VariantProps } from "tailwind-variants"
import { composeRenderProps } from "react-aria-components/composeRenderProps"
import {
  RadioGroup as RACRadioGroup,
  RadioButton,
  RadioField,
  type RadioFieldProps,
  type RadioGroupProps
} from "react-aria-components/RadioGroup"
import { cn } from "@/lib/utils"
import { fieldVariants, Label } from "./field"

const RadioGroup = ({
  className,
  orientation = "vertical",
  ...props
}: RadioGroupProps & VariantProps<typeof fieldVariants>) => {
  return (
    <RACRadioGroup
      {...props}
      className={composeRenderProps(className, (className) =>
        cn(
          "grid gap-3 w-full",
          "data-[orientation=horizontal]:flex data-[orientation=horizontal]:flex-wrap data-[orientation=horizontal]:**:data-[slot=field-label]:w-full",
          className
        )
      )}
      data-orientation={orientation}
      data-slot="field"
      orientation={orientation}
    />
  )
}

const Radio = ({ className, children, ...props }: RadioFieldProps) => {
  return (
    <RadioField
      className={composeRenderProps(className, (className) => cn("group/field", className))}
      data-slot="radio"
      {...props}
    >
      <RadioButton>
        {composeRenderProps(children, (children) => (
          <div className={cn(fieldVariants({ orientation: "horizontal" }))}>
            <div
              className="border-input dark:bg-input/30 group-data-selected/field:bg-primary group-data-selected/field:text-primary-foreground dark:group-data-selected/field:bg-primary group-data-selected/field:border-primary group-data-invalid/field:group-data-selected/field:border-primary group-data-invalid/field:border-destructive in-data-focus-visible:border-ring in-data-focus-visible:ring-ring/50 group-data-invalid/field:ring-destructive/20 dark:group-data-invalid/field:ring-destructive/40 dark:group-data-invalid/field:border-destructive/50 flex size-4 rounded-full in-data-focus-visible:ring-3 group-data-invalid/field:ring-3 group/radio-group-item peer relative aspect-square shrink-0 border outline-none group-disabled/field:cursor-not-allowed group-disabled/field:opacity-50"
              data-slot="radio-group-item"
              slot="control"
            >
              <div
                className="flex size-4 items-center justify-center opacity-0 transition-opacity group-data-selected/field:opacity-100"
                data-slot="radio-group-indicator"
              >
                <span className="bg-primary-foreground absolute top-1/2 left-1/2 size-2 -translate-x-1/2 -translate-y-1/2 rounded-full" />
              </div>
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
      </RadioButton>
    </RadioField>
  )
}

const RadioGroupItem = (props: RadioFieldProps) => <Radio {...props} />

export { Radio, RadioGroup, RadioGroupItem }
