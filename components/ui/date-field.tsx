'use client'

import {
    DateField as DateFieldPrimitive,
    type DateFieldProps as DateFieldPrimitiveProps,
    DateInput as DateInputPrimitive,
    type DateInputProps,
    DateSegment,
    type DateValue,
    type ValidationResult
} from 'react-aria-components'
import { tv } from 'tailwind-variants'

import { Description, FieldError, FieldGroup, Label } from './field'
import { ctr } from './utils'

interface DateFieldProps<T extends DateValue> extends DateFieldPrimitiveProps<T> {
    label?: string
    description?: string
    errorMessage?: string | ((validation: ValidationResult) => string)
    prefix?: React.ReactNode
    suffix?: React.ReactNode
}

const DateField = <T extends DateValue>({
    prefix,
    suffix,
    label,
    description,
    errorMessage,
    ...props
}: DateFieldProps<T>) => {
    return (
        <DateFieldPrimitive
            {...props}
            className={ctr(props.className, 'group flex flex-col gap-y-1.5')}
        >
            {label && <Label>{label}</Label>}
            <FieldGroup>
                {prefix ? <span data-slot='prefix'>{prefix}</span> : null}
                <DateInput />
                {suffix ? <span data-slot='suffix'>{suffix}</span> : null}
            </FieldGroup>
            {description && <Description>{description}</Description>}
            <FieldError>{errorMessage}</FieldError>
        </DateFieldPrimitive>
    )
}

const segmentStyles = tv({
    base: 'type-literal:px-0 text-fg inline shrink-0 rounded p-0.5 tracking-wider tabular-nums caret-transparent outline-0 sm:text-sm sm:uppercase',
    variants: {
        isPlaceholder: {
            true: 'text-muted-fg'
        },
        isDisabled: {
            true: 'text-fg/50'
        },
        isFocused: {
            true: [
                'bg-primary text-primary-fg',
                'data-invalid:bg-danger data-invalid:text-danger-fg'
            ]
        }
    }
})

const DateInput = ({ className, ...props }: Omit<DateInputProps, 'children'>) => {
    return (
        <DateInputPrimitive
            className={ctr(
                className,
                'text-fg placeholder-muted-fg bg-transparent p-2 text-base sm:text-sm'
            )}
            {...props}
        >
            {(segment) => <DateSegment segment={segment} className={segmentStyles} />}
        </DateInputPrimitive>
    )
}

export { DateField, DateInput, segmentStyles }
export type { DateFieldProps }
