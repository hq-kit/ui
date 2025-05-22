'use client'

import type { ReactNode, Ref } from 'react'

import type {
    FieldErrorProps,
    FormProps,
    GroupProps,
    InputProps,
    LabelProps as RACLabelProps,
    TextProps,
    ValidationResult
} from 'react-aria-components'
import {
    Group,
    FieldError as RACFieldError,
    Form as RACForm,
    Input as RACInput,
    Label as RACLabel,
    Text,
    composeRenderProps
} from 'react-aria-components'

import { cn } from '@/lib/utils'

const Form = (props: FormProps) => <RACForm {...props} />

interface FieldProps {
    label?: string
    description?: string
    errorMessage?: string | ((validation: ValidationResult) => string) | ReactNode
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
                'w-fit cursor-default text-sm leading-none transition-colors',
                isInvalid
                    ? 'text-danger/70 group-open:text-danger group-has-focus-within:text-danger group-has-focus:text-danger group-has-pressed:text-danger'
                    : 'text-fg group-open:text-primary group-has-focus-within:text-primary group-has-focus:text-primary group-has-pressed:text-primary',
                isDisabled && 'opacity-50',
                className
            )}
        />
    )
}

const Description = ({ className, ...props }: TextProps) => {
    return <Text {...props} slot='description' className={cn('text-pretty text-muted-fg text-sm', className)} />
}

const FieldError = ({ className, ...props }: FieldErrorProps) => {
    return Array.isArray(props.children) ? (
        <RACFieldError {...props} className={cn('text-danger text-sm/5', className)}>
            <ul className='list-inside list-disc'>
                {props.children.map((child, index) => (
                    <li key={index}>{child}</li>
                ))}
            </ul>
        </RACFieldError>
    ) : (
        <RACFieldError {...props} className={cn('text-danger text-sm/5', className)} />
    )
}

const FieldGroup = ({ className, ref, ...props }: GroupProps & { ref?: Ref<HTMLDivElement> }) => {
    return (
        <Group
            ref={ref}
            className={composeRenderProps(className, (className) =>
                cn([
                    'flex h-9 items-center rounded-md border border-muted transition duration-200 ease-in-out',
                    'hover:border-primary/70',
                    'focus-visible:border-primary/70 focus-visible:ring-4 focus-visible:ring-ring',
                    'focus-within:border-primary/70 focus-within:ring-4 focus-within:ring-ring',
                    'invalid:border-danger/70 invalid:focus-within:border-danger invalid:focus-within:ring-invalid invalid:hover:border-danger invalid:focus-visible:border-danger invalid:focus-visible:ring-invalid',
                    'disabled:pointer-events-none disabled:opacity-50',
                    className
                ])
            )}
            {...props}
        />
    )
}

const Input = ({ className, ref, ...props }: InputProps & { ref?: Ref<HTMLInputElement> }) => (
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

export { Form }
