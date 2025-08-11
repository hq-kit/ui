'use client'

import type { ReactNode } from 'react'
import type { ColorFieldProps as RACColorFieldProps } from 'react-aria-components'
import type { FieldProps } from './form'
import { IconLoader3 } from '@tabler/icons-react'
import { composeRenderProps, ColorField as RACColorField } from 'react-aria-components'
import { cn } from '@/lib/utils'
import { ColorPicker } from './color-picker'
import { ColorSwatch } from './color-swatch'
import { Description, FieldError, FieldGroup, Input, Label } from './form'

interface ColorFieldProps extends RACColorFieldProps, FieldProps {
    prefix?: ReactNode
    suffix?: ReactNode
    placeholder?: string
    isLoading?: boolean
    withPicker?: boolean
}

const ColorField = ({
    label,
    description,
    errorMessage,
    placeholder,
    isLoading,
    withPicker = true,
    className,
    ...props
}: ColorFieldProps) => {
    const value = props.value ?? props.defaultValue
    return (
        <RACColorField
            aria-label={props['aria-label'] ?? 'Color field'}
            className={composeRenderProps(className, (className) =>
                cn('group/field **:data-[slot=color-swatch]:-ml-0.5 flex w-full flex-col gap-y-1.5', className)
            )}
            {...props}
        >
            {({ isInvalid, isDisabled }) => (
                <>
                    {label && <Label>{label}</Label>}
                    <FieldGroup isDisabled={isDisabled} isInvalid={isInvalid}>
                        {props.prefix ? (
                            <span className='ml-2 text-muted-foreground has-[button]:ml-0' data-prefix={true}>
                                {props.prefix}
                            </span>
                        ) : null}
                        {isLoading ? (
                            <span className='ml-2 text-muted-foreground has-[button]:ml-0'>
                                <IconLoader3 className='size-4 animate-spin' />
                            </span>
                        ) : null}
                        <div className='flex w-full items-center'>
                            {value && (
                                <span className='ml-2'>
                                    {withPicker ? (
                                        <ColorPicker onChange={props.onChange} value={value.toString('hex')} />
                                    ) : (
                                        <ColorSwatch className='size-6' color={value.toString('hex')} />
                                    )}
                                </span>
                            )}
                            <Input placeholder={placeholder ?? '#000'} />
                        </div>
                        {props.suffix ? (
                            <span className='mr-2 text-muted-foreground has-[button]:mr-0' data-suffix={true}>
                                {props.suffix}
                            </span>
                        ) : null}
                    </FieldGroup>
                    {description && <Description>{description}</Description>}
                    <FieldError>{errorMessage}</FieldError>
                </>
            )}
        </RACColorField>
    )
}

export { ColorField }
export type { ColorFieldProps }
