'use client'

import type { Ref } from 'react'
import {
    composeRenderProps,
    TextArea as RACTextArea,
    TextField as RACTextField,
    type TextFieldProps as RACTextFieldProps
} from 'react-aria-components'
import { cn } from '@/lib/utils'
import { Description, FieldError, type FieldProps, fieldGroupStyle, Label } from './form'

interface TextareaProps extends RACTextFieldProps, FieldProps {
    autoSize?: boolean
    placeholder?: string
    ref?: Ref<HTMLDivElement>
}

const Textarea = ({ className, placeholder, label, description, errorMessage, ref, ...props }: TextareaProps) => {
    return (
        <RACTextField
            className={composeRenderProps(className, (className) =>
                cn('group/field flex flex-col gap-y-1.5', className)
            )}
            ref={ref}
            {...props}
        >
            {label && <Label>{label}</Label>}
            <RACTextArea
                className={cn(
                    fieldGroupStyle(),
                    'h-auto min-h-14 w-full min-w-0 rounded-lg border border-input bg-transparent p-2 text-base shadow-xs outline-hidden transition duration-200 sm:text-sm dark:bg-input/30',
                    props.autoSize && 'field-sizing-content resize-none'
                )}
                placeholder={placeholder}
            />
            {description && <Description>{description}</Description>}
            <FieldError>{errorMessage}</FieldError>
        </RACTextField>
    )
}

export { Textarea }
