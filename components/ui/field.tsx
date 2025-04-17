'use client'

import React from 'react'

import type {
    FieldErrorProps,
    GroupProps,
    InputProps,
    LabelProps as RACLabelProps,
    TextFieldProps,
    TextProps,
    ValidationResult
} from 'react-aria-components'
import {
    composeRenderProps,
    Group,
    FieldError as RACFieldError,
    Input as RACInput,
    Label as RACLabel,
    Text
} from 'react-aria-components'

import { cn } from '@/lib/utils'

interface FieldProps {
    label?: string
    placeholder?: string
    description?: string
    errorMessage?: string | ((validation: ValidationResult) => string)
    'aria-label'?: TextFieldProps['aria-label']
    'aria-labelledby'?: TextFieldProps['aria-labelledby']
}

interface LabelProps extends RACLabelProps {
    isInvalid?: boolean
    isDisabled?: boolean
}

const Label = ({ className, isInvalid, isDisabled, ...props }: LabelProps) => {
    return (
        <RACLabel
            slot='label'
            {...props}
            className={cn(
                'w-fit cursor-default text-sm font-medium transition-colors',
                isInvalid
                    ? 'text-danger/70 group-has-focus:text-danger group-has-focus-within:text-danger group-open:text-danger group-has-pressed:text-danger'
                    : 'text-muted-fg group-has-focus:text-primary group-has-focus-within:text-primary group-open:text-primary group-has-pressed:text-primary',
                isDisabled && 'opacity-50',
                className
            )}
        />
    )
}

const Description = ({ className, ...props }: TextProps) => {
    return (
        <Text
            {...props}
            slot='description'
            className={cn('text-muted-fg text-base/5 text-pretty sm:text-sm/5', className)}
        />
    )
}

const FieldError = ({ className, ...props }: FieldErrorProps) => {
    return <RACFieldError {...props} className={cn('text-danger text-sm/5', className)} />
}

const FieldGroup = ({ className, ...props }: GroupProps) => {
    return (
        <Group
            className={composeRenderProps(
                className,
                (className, { isHovered, isInvalid, isFocusWithin, isDisabled, isFocusVisible }) =>
                    cn([
                        'h-10 flex items-center rounded-lg border transition',
                        isInvalid ? 'border-danger/30' : 'border-muted',
                        isHovered && `${isInvalid ? 'border-danger/70' : 'border-primary/70'}`,
                        {
                            'ring-4 border-primary/70 ring-primary/20 invalid:border-danger/70 invalid:ring-danger/20':
                                isFocusWithin || isFocusVisible
                        },
                        isDisabled && 'opacity-50 pointer-events-none',
                        className
                    ])
            )}
            {...props}
        />
    )
}

const Input = ({ className, ref, ...props }: InputProps & { ref?: React.Ref<HTMLInputElement> }) => (
    <RACInput
        ref={ref}
        className={cn(
            'w-full min-w-0 bg-transparent p-2 text-base text-fg placeholder-muted-fg outline-hidden lg:text-sm',
            className
        )}
        {...props}
    />
)

export { Description, FieldError, FieldGroup, Input, Label, type FieldProps }
