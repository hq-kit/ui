'use client'

import {
    composeRenderProps,
    type DateInputProps,
    DateSegment,
    type DateValue,
    DateField as RACDateField,
    type DateFieldProps as RACDateFieldProps,
    DateInput as RACDateInput
} from 'react-aria-components'

import { cn } from '@/lib/utils'

import { Description, FieldError, FieldGroup, FieldProps, Label } from './field'

interface DateFieldProps<T extends DateValue> extends RACDateFieldProps<T>, FieldProps {
    prefix?: React.ReactNode
    suffix?: React.ReactNode
}

const DateField = <T extends DateValue>({
    prefix,
    suffix,
    label,
    description,
    errorMessage,
    className,
    ...props
}: DateFieldProps<T>) => {
    return (
        <RACDateField
            {...props}
            className={composeRenderProps(className, (className) =>
                cn('group flex flex-col gap-y-1.5', className)
            )}
        >
            {({ isInvalid, isDisabled }) => (
                <>
                    {label && (
                        <Label isInvalid={isInvalid} isDisabled={isDisabled}>
                            {label}
                        </Label>
                    )}
                    <FieldGroup>
                        {prefix ? <span data-slot='prefix'>{prefix}</span> : null}
                        <DateInput />
                        {suffix ? <span data-slot='suffix'>{suffix}</span> : null}
                    </FieldGroup>
                    {description && <Description>{description}</Description>}
                    <FieldError>{errorMessage}</FieldError>
                </>
            )}
        </RACDateField>
    )
}

const DateInput = ({ className, ...props }: Omit<DateInputProps, 'children'>) => {
    return (
        <RACDateInput
            className={composeRenderProps(className, (className, { isDisabled }) =>
                cn('bg-transparent p-2 text-base lg:text-sm', isDisabled && 'opacity-50', className)
            )}
            {...props}
        >
            {(segment) => (
                <DateSegment
                    segment={segment}
                    className={cn(
                        'type-literal:px-0 text-fg inline shrink-0 rounded-sm p-0.5 tracking-wider tabular-nums caret-transparent outline-0 sm:text-sm sm:uppercase',
                        segment.isPlaceholder && 'text-muted-fg',
                        'focus:bg-primary/70 focus:text-primary-fg',
                        'invalid:not-type-literal:text-danger invalid:focus:text-primary-fg'
                    )}
                />
            )}
        </RACDateInput>
    )
}

export { DateField, DateInput }
