'use client'

import {
    TimeField as RACTimeField,
    type TimeFieldProps as RACTimeFieldProps,
    type TimeValue,
    composeRenderProps
} from 'react-aria-components'

import { cn } from '@/lib/utils'

import { DateInput } from './date-field'
import { Description, FieldError, FieldGroup, type FieldProps, Label } from './field'

interface TimeFieldProps<T extends TimeValue> extends RACTimeFieldProps<T>, FieldProps {
    prefix?: React.ReactNode
    suffix?: React.ReactNode
}

const TimeField = <T extends TimeValue>({
    prefix,
    suffix,
    label,
    className,
    description,
    errorMessage,
    ...props
}: TimeFieldProps<T>) => {
    return (
        <RACTimeField
            {...props}
            className={composeRenderProps(className, (className) => cn('group flex flex-col gap-y-1.5', className))}
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
                        <DateInput className='flex w-fit min-w-28 justify-around whitespace-nowrap p-2 sm:text-sm' />
                        {suffix ? <span data-slot='suffix'>{suffix}</span> : null}
                    </FieldGroup>
                    {description && <Description>{description}</Description>}
                    <FieldError>{errorMessage}</FieldError>
                </>
            )}
        </RACTimeField>
    )
}

export { TimeField }
