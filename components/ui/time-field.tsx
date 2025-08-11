'use client'

import type { ReactNode, Ref } from 'react'
import {
    composeRenderProps,
    TimeField as RACTimeField,
    type TimeFieldProps as RACTimeFieldProps,
    type TimeValue
} from 'react-aria-components'
import { cn } from '@/lib/utils'
import { DateInput } from './date-field'
import { Description, FieldError, FieldGroup, type FieldProps, Label } from './form'

interface TimeFieldProps<T extends TimeValue> extends RACTimeFieldProps<T>, FieldProps {
    prefix?: ReactNode
    suffix?: ReactNode
    ref?: Ref<HTMLDivElement>
}

const TimeField = <T extends TimeValue>({
    prefix,
    suffix,
    label,
    className,
    description,
    errorMessage,
    ref,
    ...props
}: TimeFieldProps<T>) => {
    return (
        <RACTimeField
            className={composeRenderProps(className, (className) =>
                cn('group/field flex flex-col gap-y-1.5', className)
            )}
            isInvalid={props.isInvalid || !!errorMessage}
            ref={ref}
            {...props}
        >
            {({ isInvalid, isDisabled }) => (
                <>
                    {label && <Label>{label}</Label>}
                    <FieldGroup isDisabled={isDisabled} isInvalid={isInvalid}>
                        {prefix ? <span data-prefix={true}>{prefix}</span> : null}
                        <DateInput className='flex w-fit min-w-28 justify-around whitespace-nowrap p-2 sm:text-sm' />
                        {suffix ? <span data-suffix={true}>{suffix}</span> : null}
                    </FieldGroup>
                    {description && <Description>{description}</Description>}
                    <FieldError>{errorMessage}</FieldError>
                </>
            )}
        </RACTimeField>
    )
}

export { TimeField }
