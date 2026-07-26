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
          "grid w-full gap-2",
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
              className="group/radio-group-item peer relative flex aspect-square size-4 shrink-0 rounded-full border border-input outline-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 group-disabled/field:cursor-not-allowed group-disabled/field:opacity-50 aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 aria-invalid:aria-checked:border-primary group-data-selected/field:border-primary group-data-selected/field:bg-primary group-data-selected/field:text-primary-foreground dark:bg-input/30 dark:group-data-selected/field:bg-primary dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40"
              data-slot="radio-group-item"
              slot="control"
            >
              <div
                className="flex size-4 items-center justify-center opacity-0 transition-opacity group-data-selected/field:opacity-100"
                data-slot="radio-group-indicator"
              >
                <span className="absolute top-1/2 left-1/2 size-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary-foreground" />
              </div>
            </div>
            {typeof children === "string" ? (
              <Label elementType="span">{children}</Label>
            ) : children ? (
              <div
                className="group/field-content flex flex-1 flex-col gap-0.5 leading-snug *:data-[slot=field-label]:leading-snug"
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
