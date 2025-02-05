'use client'

import {
    TextArea as TextAreaPrimitive,
    TextField as TextFieldPrimitive,
    type TextFieldProps as TextFieldPrimitiveProps,
    type ValidationResult
} from 'react-aria-components'
import { tv } from 'tailwind-variants'

import { Description, FieldError, Label } from './field'
import { cr, ctr, focusStyles } from './utils'

const textareaStyles = tv({
    extend: focusStyles,
    base: 'border-muted bg-background w-full min-w-0 rounded-lg border px-2.5 py-2 text-base transition duration-200 outline-none sm:text-sm',
    variants: {
        isDisabled: {
            false: 'data-hovered:border-primary/60',
            true: 'opacity-50'
        },
        isInvalid: {
            true: 'border-danger/70 text-danger'
        }
    }
})

interface TextareaProps extends TextFieldPrimitiveProps {
    autoSize?: boolean
    label?: string
    placeholder?: string
    description?: string
    errorMessage?: string | ((validation: ValidationResult) => string)
    className?: string
}

const Textarea = ({
    className,
    placeholder,
    label,
    description,
    errorMessage,
    ...props
}: TextareaProps) => {
    return (
        <TextFieldPrimitive {...props} className={ctr(className, 'group flex flex-col gap-y-1.5')}>
            {label && <Label>{label}</Label>}
            <TextAreaPrimitive
                placeholder={placeholder}
                className={cr(className, (className, renderProps) =>
                    textareaStyles({
                        ...renderProps,
                        className
                    })
                )}
            />
            {description && <Description>{description}</Description>}
            <FieldError>{errorMessage}</FieldError>
        </TextFieldPrimitive>
    )
}

export { Textarea }
export type { TextareaProps }
