'use client'

import type { Ref } from 'react'

import { IconChevronDown, IconChevronUp, IconMinus, IconPlus } from 'hq-icons'
import {
    Button,
    type ButtonProps,
    NumberField as RACNumberField,
    type NumberFieldProps as RACNumberFieldProps,
    composeRenderProps
} from 'react-aria-components'

import { useIsMobile } from '@/lib/hooks'
import { cn } from '@/lib/utils'
import { Description, FieldError, FieldGroup, type FieldProps, Input, Label } from './form'

interface NumberFieldProps extends RACNumberFieldProps, FieldProps {
    placeholder?: string
    ref?: Ref<HTMLDivElement>
}

const NumberField = ({ label, placeholder, description, className, errorMessage, ref, ...props }: NumberFieldProps) => {
    const isMobile = useIsMobile()
    return (
        <RACNumberField
            isInvalid={props.isInvalid || !!errorMessage}
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
                    <FieldGroup isDisabled={isDisabled} className='overflow-hidden'>
                        {isMobile && (
                            <Stepper slot='decrement' className='border-r'>
                                <IconMinus />
                            </Stepper>
                        )}
                        <Input className='text-center tabular-nums sm:text-left' placeholder={placeholder} />
                        <div
                            className={cn(
                                'grid h-10 place-content-center border-s',
                                'group-hover:border-primary/60 group-focus:border-primary/70',
                                isInvalid && 'group-focus:border-danger/70',
                                isDisabled && 'group-focus:border-muted'
                            )}
                        >
                            {isMobile ? (
                                <Stepper slot='increment'>
                                    <IconPlus />
                                </Stepper>
                            ) : (
                                <div className='flex h-full flex-col divide-y'>
                                    <Stepper slot='increment' className='h-5 px-1'>
                                        <IconChevronUp />
                                    </Stepper>
                                    <Stepper slot='decrement' className='h-5 px-1'>
                                        <IconChevronDown />
                                    </Stepper>
                                </div>
                            )}
                        </div>
                    </FieldGroup>
                    {description && <Description>{description}</Description>}
                    <FieldError>{errorMessage}</FieldError>
                </>
            )}
        </RACNumberField>
    )
}

interface StepperProps extends ButtonProps {
    slot: 'increment' | 'decrement'
    className?: string
}

const Stepper = ({ slot, className, ...props }: StepperProps) => {
    return (
        <Button
            className={composeRenderProps(className, (className, { isDisabled, isPressed }) =>
                cn(
                    'h-10 px-3 text-muted-fg outline-hidden',
                    isPressed && 'bg-primary text-primary-fg',
                    isDisabled && 'opacity-50',
                    className
                )
            )}
            slot={slot}
            {...props}
        />
    )
}

export { NumberField }
