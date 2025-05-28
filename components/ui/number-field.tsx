'use client'

import type { Ref } from 'react'

import { IconChevronDown, IconChevronUp, IconMinus, IconPlus } from 'hq-icons'
import {
    Button,
    type ButtonProps,
    Input,
    NumberField as RACNumberField,
    type NumberFieldProps as RACNumberFieldProps,
    composeRenderProps
} from 'react-aria-components'

import { useIsMobile } from '@/lib/hooks'
import { cn } from '@/lib/utils'
import { Description, FieldError, FieldGroup, type FieldProps, Label } from './form'

interface NumberFieldProps extends RACNumberFieldProps, FieldProps {
    placeholder?: string
    ref?: Ref<HTMLDivElement>
}

const NumberField = ({ label, placeholder, description, className, errorMessage, ref, ...props }: NumberFieldProps) => {
    const isMobile = useIsMobile()
    return (
        <RACNumberField
            className={composeRenderProps(className, (className) =>
                cn('group/field flex flex-col gap-y-1.5', className)
            )}
            ref={ref}
            {...props}
        >
            {label && <Label>{label}</Label>}
            <FieldGroup
                isInvalid={props.isInvalid || !!errorMessage}
                isDisabled={props.isDisabled}
                className='overflow-hidden'
            >
                {isMobile && (
                    <Stepper slot='decrement' className='border-r'>
                        <IconMinus />
                    </Stepper>
                )}
                <Input className='text-center tabular-nums sm:text-left' placeholder={placeholder} />
                <div
                    className={cn(
                        'grid h-10 place-content-center border-s',
                        'group-hover/field:border-primary/70 group-has-focus/field:border-primary',
                        'group-has-invalid/field:group-has-focus/field:border-danger',
                        'group-has-disabled/field:group-has-focus/field:border-muted'
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
                    isPressed &&
                        'bg-primary text-primary-fg group-has-invalid/field:bg-danger group-has-invalid/field:text-danger-fg',
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
