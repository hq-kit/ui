'use client'

import {
    composeRenderProps,
    TextArea as RACTextArea,
    TextField as RACTextField,
    type TextFieldProps as RACTextFieldProps
} from 'react-aria-components'

import { cn } from '@/lib/utils'

import { Description, FieldError, FieldProps, Label } from './field'

interface TextareaProps extends RACTextFieldProps, FieldProps {
    autoSize?: boolean
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
        <RACTextField
            className={composeRenderProps(className, (className) =>
                cn('group flex flex-col gap-y-1.5', className)
            )}
            {...props}
        >
            {({ isInvalid, isDisabled }) => (
                <>
                    {label && (
                        <Label isInvalid={isInvalid || !!errorMessage} isDisabled={isDisabled}>
                            {label}
                        </Label>
                    )}
                    <RACTextArea
                        placeholder={placeholder}
                        className={({ isFocused, isFocusVisible, isHovered }) =>
                            cn(
                                'min-h-14 w-full min-w-0 rounded-lg border bg-transparent p-2 text-base outline-hidden transition duration-200 sm:text-sm',
                                isInvalid ? 'border-danger/30' : 'border-muted',
                                isHovered && 'border-primary/70 invalid:border-danger/70',
                                isDisabled && 'opacity-50 pointer-events-none',
                                {
                                    'border-primary/70 ring-4 ring-primary/20 invalid:border-danger/70 invalid:ring-danger/20':
                                        isFocused || isFocusVisible
                                },
                                props.autoSize && 'resize-none field-sizing-content'
                            )
                        }
                    />
                    {description && <Description>{description}</Description>}
                    <FieldError>{errorMessage}</FieldError>
                </>
            )}
        </RACTextField>
    )
}

export { Textarea }
