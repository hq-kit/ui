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
          "cn-radio-group w-full",
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
              className="cn-radio-group-item group/radio-group-item peer relative aspect-square shrink-0 border outline-none group-disabled/field:cursor-not-allowed group-disabled/field:opacity-50"
              data-slot="radio-group-item"
              slot="control"
            >
              <div
                className="cn-radio-group-indicator opacity-0 transition-opacity group-data-selected/field:opacity-100"
                data-slot="radio-group-indicator"
              >
                <span className="cn-radio-group-indicator-icon" />
              </div>
            </div>
            {typeof children === "string" ? (
              <Label elementType="span">{children}</Label>
            ) : children ? (
              <div
                className="cn-field-content group/field-content flex flex-1 flex-col leading-snug *:data-[slot=field-label]:leading-snug"
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
