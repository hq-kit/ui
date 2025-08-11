'use client'

import type { FieldProps } from './form'
import { IconEye, IconEyeClosed, IconLoader3 } from '@tabler/icons-react'
import { type ReactNode, type Ref, useState } from 'react'
import {
    Button,
    composeRenderProps,
    Input,
    TextField as RACTextField,
    type TextFieldProps as RACTextFieldProps
} from 'react-aria-components'
import { cn } from '@/lib/utils'
import { Description, FieldError, FieldGroup, Label } from './form'

interface TextFieldProps extends RACTextFieldProps, FieldProps {
    prefix?: ReactNode
    suffix?: ReactNode
    isPending?: boolean
    placeholder?: string
    ref?: Ref<HTMLInputElement>
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
            className={composeRenderProps(className, (className) =>
                cn('group/field flex flex-col gap-y-1.5', className)
            )}
            ref={ref}
            type={inputType}
            {...props}
        >
            {(values) => (
                <>
                    {label && <Label>{label}</Label>}
                    <FieldGroup
                        data-loading={props.isPending ? 'true' : undefined}
                        isDisabled={values.isDisabled}
                        isInvalid={!!errorMessage || values.isInvalid}
                    >
                        {props.prefix ? (
                            <span className='ml-2 text-muted-foreground has-[button]:ml-0' data-prefix>
                                {props.prefix}
                            </span>
                        ) : null}
                        <Input placeholder={placeholder} />
                        {type === 'password' ? (
                            <Button
                                aria-label='Toggle visibility'
                                className='mr-2 inline-flex items-center justify-center rounded-md p-0.5 text-muted-foreground focus-visible:text-primary focus-visible:outline-2 focus-visible:outline-ring'
                                onPress={() => setMasked((e) => !e)}
                                type='button'
                            >
                                <IconEye
                                    aria-hidden
                                    className={cn('size-4 scale-0 transition-transform', masked && 'scale-100')}
                                />
                                <IconEyeClosed
                                    aria-hidden
                                    className={cn(
                                        'absolute size-4 scale-0 transition-transform',
                                        !masked && 'scale-100'
                                    )}
                                />
                            </Button>
                        ) : props.isPending ? (
                            <IconLoader3 className='mr-2 size-3.5 animate-spin text-muted-foreground' data-suffix />
                        ) : props.suffix ? (
                            <span className='mr-2 text-muted-foreground has-[button]:mr-0' data-suffix>
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
