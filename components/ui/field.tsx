'use client'

import React from 'react'

import {
    FieldError as FieldErrorPrimitive,
    type FieldErrorProps,
    Group,
    type GroupProps,
    Input as InputPrimitive,
    type InputProps,
    Label as LabelPrimitive,
    type LabelProps,
    Text,
    type TextFieldProps as TextFieldPrimitiveProps,
    type TextProps,
    type ValidationResult
} from 'react-aria-components'
import { tv } from 'tailwind-variants'

import { cn, ctr } from './utils'

interface FieldProps {
    label?: string
    placeholder?: string
    description?: string
    errorMessage?: string | ((validation: ValidationResult) => string)
    'aria-label'?: TextFieldPrimitiveProps['aria-label']
    'aria-labelledby'?: TextFieldPrimitiveProps['aria-labelledby']
}

const fieldStyles = tv({
    slots: {
        description: 'text-muted-fg text-base/6 text-pretty sm:text-sm/6',
        label: 'text-fg group-data-focused:text-primary group-data-[focus-within=true]:text-primary group-has-data-[focus-within=true]:text-primary group-data-[open=true]:text-primary group-has-data-[focused=true]:text-primary group-has-aria-[invalid=true]:text-danger w-fit cursor-default text-sm font-medium transition-colors duration-200',
        fieldError: 'text-danger text-sm/6',
        input: [
            'text-fg placeholder-muted-fg w-full min-w-0 bg-transparent p-2 text-base outline-none data-focused:outline-none lg:text-sm [&::-ms-reveal]:hidden'
        ]
    }
})

const { description, label, fieldError, input } = fieldStyles()

const Label = ({ className, ...props }: LabelProps) => {
    return <LabelPrimitive {...props} className={label({ className })} />
}

interface DescriptionProps extends TextProps {
    isWarning?: boolean
}

const Description = ({ className, ...props }: DescriptionProps) => {
    const isWarning = props.isWarning ?? false
    return (
        <Text
            {...props}
            slot='description'
            className={description({ className: isWarning ? 'text-warning' : className })}
        />
    )
}

const FieldError = ({ className, ...props }: FieldErrorProps) => {
    return <FieldErrorPrimitive {...props} className={ctr(className, fieldError())} />
}

const FieldGroup = ({ className, ...props }: GroupProps) => {
    return (
        <Group
            {...props}
            className={cn([
                'flex h-10 items-center rounded-lg border transition duration-200 ease-out',
                'data-hovered:border-primary/60',
                'data-focus-within:border-primary/70 data-focus-within:ring-primary/20 data-focus-within:ring-4',
                'group-data-invalid:focus-within:border-danger group-data-invalid:focus-within:ring-danger/20 data-focus-within:ring-4',
                '[&>[role=progressbar]]:mr-2.5',
                '**:data-[slot=icon]:size-4 **:data-[slot=icon]:shrink-0',
                '[&>[data-slot=suffix]]:text-muted-fg [&>[data-slot=suffix]]:mr-2.5',
                '[&>[data-slot=prefix]]:text-muted-fg [&>[data-slot=prefix]]:ml-2.5',
                'data-disabled:data-hovered:border-muted data-invalid:data-hovered:border-danger/60 group-data-disabled:opacity-50',
                className
            ])}
        />
    )
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(({ className, ...props }, ref) => {
    return <InputPrimitive ref={ref} {...props} className={ctr(className, input())} />
})

Input.displayName = 'Input'

export { Description, FieldError, FieldGroup, Input, Label, type FieldProps }
