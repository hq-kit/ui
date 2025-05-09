'use client'

import type { Ref } from 'react'
import {
    TextArea as RACTextArea,
    TextField as RACTextField,
    type TextFieldProps as RACTextFieldProps,
    composeRenderProps
} from 'react-aria-components'

import { cn } from '@/lib/utils'
import { Description, FieldError, type FieldProps, Label } from './form'

interface TextareaProps extends RACTextFieldProps, FieldProps {
    autoSize?: boolean
    placeholder?: string
    ref?: Ref<HTMLDivElement>
}

const Textarea = ({ className, placeholder, label, description, errorMessage, ref, ...props }: TextareaProps) => {
    return (
        <RACTextField
            ref={ref}
            className={composeRenderProps(className, (className) => cn('group flex flex-col gap-y-1.5', className))}
            {...props}
        >
            {(values) => (
                <>
                    {label && (
                        <Label isInvalid={values.isInvalid || !!errorMessage} isDisabled={values.isDisabled}>
                            {label}
                        </Label>
                    )}
                    <RACTextArea
                        placeholder={placeholder}
                        className={cn(
                            'min-h-14 w-full min-w-0 rounded-lg border bg-transparent p-2 text-base outline-hidden transition duration-200 sm:text-sm',
                            'border-muted invalid:border-danger/30',
                            'hover:border-primary/70 hover:invalid:border-danger/70',
                            'disabled:pointer-events-none disabled:opacity-50',
                            'focus:border-primary/70 focus:ring-4 focus:ring-ring focus:invalid:border-danger/70 focus:invalid:ring-invalid',
                            'focus-visible:border-primary/70 focus-visible:ring-4 focus-visible:ring-ring focus-visible:invalid:border-danger/70 focus-visible:invalid:ring-invalid',
                            props.autoSize && 'field-sizing-content resize-none'
                        )}
                    />
                    {description && <Description>{description}</Description>}
                    <FieldError>{errorMessage}</FieldError>
                </>
            )}
        </RACTextField>
    )
}

export { Textarea }
