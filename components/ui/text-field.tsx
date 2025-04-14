'use client'

import React from 'react'

import { IconEye, IconEyeClosed, IconLoaderCircle } from 'hq-icons'
import {
    Button,
    composeRenderProps,
    TextField as RACTextField,
    type TextFieldProps as RACTextFieldProps
} from 'react-aria-components'

import { cn } from '@/lib/utils'

import type { FieldProps } from './field'
import { Description, FieldError, FieldGroup, Input, Label } from './field'

interface TextFieldProps extends RACTextFieldProps, FieldProps {
    prefix?: React.ReactNode
    suffix?: React.ReactNode
    isPending?: boolean
}

const TextField = ({ label, placeholder, description, errorMessage, className, type, ...props }: TextFieldProps) => {
    const [masked, setMasked] = React.useState<boolean>(type === 'password')
    const inputType = type === 'password' ? (masked ? 'password' : 'text') : type

    return (
        <RACTextField
            type={inputType}
            className={composeRenderProps(className, (className) => cn('group flex flex-col gap-y-1.5', className))}
            {...props}
        >
            {({ isInvalid, isDisabled }) => (
                <>
                    {label && (
                        <Label isInvalid={isInvalid || !!errorMessage} isDisabled={isDisabled}>
                            {label}
                        </Label>
                    )}
                    <FieldGroup
                        isInvalid={isInvalid || !!errorMessage}
                        isDisabled={isDisabled}
                        data-loading={props.isPending ? 'true' : undefined}
                    >
                        {props.prefix ? (
                            <span className='ml-2 has-[button]:ml-0 text-muted-fg'>{props.prefix}</span>
                        ) : null}
                        <Input placeholder={placeholder} />
                        {type === 'password' ? (
                            <Button
                                type='button'
                                aria-label='Toggle visibility'
                                onPress={() => setMasked((e) => !e)}
                                className='mr-2 rounded-lg outline-offset-4 inline-flex items-center justify-center text-muted-fg'
                            >
                                {masked ? <IconEye /> : <IconEyeClosed />}
                            </Button>
                        ) : props.isPending ? (
                            <IconLoaderCircle className='animate-spin size-3.5 mr-2 text-muted-fg' data-suffix />
                        ) : props.suffix ? (
                            <span data-suffix className='mr-2 has-[button]:mr-0 text-muted-fg'>
                                {props.suffix}
                            </span>
                        ) : null}
                    </FieldGroup>
                    {description && <Description>{description}</Description>}
                    <FieldError>{errorMessage}</FieldError>
                </>
            )}
        </RACTextField>
    )
}

export { TextField }
