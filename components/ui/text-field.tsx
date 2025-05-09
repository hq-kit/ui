'use client'

import { type ReactNode, type Ref, useState } from 'react'

import { IconEye, IconEyeClosed, IconLoaderCircle } from 'hq-icons'
import {
    Button,
    TextField as RACTextField,
    type TextFieldProps as RACTextFieldProps,
    composeRenderProps
} from 'react-aria-components'

import { cn } from '@/lib/utils'
import type { FieldProps } from './form'
import { Description, FieldError, FieldGroup, Input, Label } from './form'

interface TextFieldProps extends RACTextFieldProps, FieldProps {
    prefix?: ReactNode
    suffix?: ReactNode
    isPending?: boolean
    placeholder?: string
    ref?: Ref<HTMLDivElement>
}

const TextField = ({
    label,
    placeholder,
    description,
    errorMessage,
    className,
    type,
    ref,
    ...props
}: TextFieldProps) => {
    const [masked, setMasked] = useState<boolean>(type === 'password')
    const inputType = type === 'password' ? (masked ? 'password' : 'text') : type

    return (
        <RACTextField
            type={inputType}
            className={composeRenderProps(className, (className) => cn('group flex flex-col gap-y-1.5', className))}
            ref={ref}
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
                            <span data-prefix={true} className='ml-2 text-muted-fg has-[button]:ml-0'>
                                {props.prefix}
                            </span>
                        ) : null}
                        <Input placeholder={placeholder} />
                        {type === 'password' ? (
                            <Button
                                type='button'
                                aria-label='Toggle visibility'
                                onPress={() => setMasked((e) => !e)}
                                className='mr-2 inline-flex items-center justify-center rounded-lg text-muted-fg outline-offset-4'
                            >
                                {masked ? <IconEye /> : <IconEyeClosed />}
                            </Button>
                        ) : props.isPending ? (
                            <IconLoaderCircle className='mr-2 size-3.5 animate-spin text-muted-fg' data-suffix />
                        ) : props.suffix ? (
                            <span data-suffix={true} className='mr-2 text-muted-fg has-[button]:mr-0'>
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
