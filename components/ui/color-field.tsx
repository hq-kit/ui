'use client'

import { IconLoaderPinwheel } from 'hq-icons'
import type { ColorFieldProps as RACColorFieldProps } from 'react-aria-components'
import { ColorField as RACColorField, composeRenderProps } from 'react-aria-components'

import { cn } from '@/lib/utils'

import { ColorPicker } from './color-picker'
import { ColorSwatch } from './color-swatch'
import { Description, FieldError, FieldGroup, type FieldProps, Input, Label } from './field'

interface ColorFieldProps extends RACColorFieldProps, FieldProps {
    prefix?: React.ReactNode
    suffix?: React.ReactNode
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
                cn('group flex w-full flex-col gap-y-1.5 **:data-[slot=color-swatch]:-ml-0.5', className)
            )}
            {...props}
        >
            {({ isInvalid, isDisabled }) => (
                <>
                    {label && (
                        <Label isInvalid={isInvalid} isDisabled={isDisabled}>
                            {label}
                        </Label>
                    )}
                    <FieldGroup isDisabled={isDisabled} isInvalid={isInvalid}>
                        {props.prefix ? (
                            <span className='ml-2 has-[button]:ml-0 text-muted-fg'>{props.prefix}</span>
                        ) : null}
                        {isLoading ? (
                            <span className='ml-2 has-[button]:ml-0 text-muted-fg'>
                                <IconLoaderPinwheel className='animate-spin size-4' />
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
                            <Input placeholder={placeholder} />
                        </div>
                        {props.suffix ? (
                            <span data-suffix className='mr-2 has-[button]:mr-0 text-muted-fg'>
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
