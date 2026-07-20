"use client"

import type { VariantProps } from "tailwind-variants"
import { CheckboxButton, CheckboxField, type CheckboxFieldProps } from "react-aria-components/Checkbox"
import { type CheckboxGroupProps, CheckboxGroup as RACCheckboxGroup } from "react-aria-components/CheckboxGroup"
import { composeRenderProps } from "react-aria-components/composeRenderProps"
import { IconPlaceholder } from "@/components/icon-placeholder"
import { cn } from "@/lib/utils"
import { fieldVariants, Label } from "./field"

const CheckboxGroup = ({
  className,
  orientation = "vertical",
  ...props
}: CheckboxGroupProps & VariantProps<typeof fieldVariants>) => {
  return (
    <RACCheckboxGroup
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
    />
  )
}

const Checkbox = ({ className, children, ...props }: CheckboxFieldProps) => {
  return (
    <CheckboxField
      className={composeRenderProps(className, (className) => cn("group/field", className))}
      data-slot="checkbox"
      {...props}
    >
      <CheckboxButton data-slot="checkbox">
        {composeRenderProps(children, (children) => (
          <div className={cn(fieldVariants({ orientation: "horizontal" }))}>
            <span
              className="cn-checkbox cn-checkbox-indicator peer relative shrink-0 outline-none group-disabled/field:cursor-not-allowed group-disabled/field:opacity-50"
              data-slot="checkbox-indicator"
              slot="control"
            >
              <IconPlaceholder
                className="absolute in-data-indeterminate:scale-100 in-data-selected:scale-0 scale-0 transition-transform"
                hugeicons="MinusSignIcon"
                lucide="MinusIcon"
                phosphor="MinusIcon"
                remixicon="RiSubtractLine"
                tabler="IconMinus"
              />
              <IconPlaceholder
                className="absolute in-data-indeterminate:scale-0 in-data-selected:scale-100 scale-0 transition-transform"
                hugeicons="Tick02Icon"
                lucide="CheckIcon"
                phosphor="CheckIcon"
                remixicon="RiCheckLine"
                tabler="IconCheck"
              />
            </span>
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
      </CheckboxButton>
    </CheckboxField>
  )
}

export { Checkbox, CheckboxGroup }
