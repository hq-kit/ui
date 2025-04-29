'use client'

import type { ReactNode, Ref } from 'react'
import type { RadioGroupProps as RACRadioGroupProps, RadioProps as RACRadioProps } from 'react-aria-components'
import { Radio as RACRadio, RadioGroup as RACRadioGroup, composeRenderProps } from 'react-aria-components'

import { cn } from '@/lib/utils'
import { Description, FieldError, type FieldProps, Label } from './field'

interface RadioGroupProps extends Omit<RACRadioGroupProps, 'children'>, FieldProps {
    children?: ReactNode
}

const RadioGroup = ({ label, description, errorMessage, className, children, ...props }: RadioGroupProps) => {
    return (
        <RACRadioGroup
            {...props}
            className={composeRenderProps(className, (className) => cn('flex flex-col gap-2', className))}
        >
            {composeRenderProps(children, (children, { isInvalid, isDisabled, orientation }) => (
                <>
                    {label && (
                        <Label isInvalid={isInvalid} isDisabled={isDisabled}>
                            {label}
                        </Label>
                    )}
                    <div
                        className={cn(
                            'flex',
                            orientation === 'horizontal' ? 'flex-wrap gap-2 sm:gap-4' : 'flex-col gap-2'
                        )}
                    >
                        {children}
                    </div>
                    {description && <Description>{description}</Description>}
                    <FieldError>{errorMessage}</FieldError>
                </>
            ))}
        </RACRadioGroup>
    )
}

interface RadioProps extends RACRadioProps, Omit<FieldProps, 'children' | 'placeholder' | 'errorMessage'> {
    ref?: Ref<HTMLLabelElement>
    children?: ReactNode
}

const Radio = ({ label, description, className, children, ref, ...props }: RadioProps) => {
    return (
        <RACRadio
            ref={ref}
            className={composeRenderProps(className, (className) =>
                cn('group flex items-center gap-2 text-sm transition', className)
            )}
            {...props}
        >
            {({ isSelected, isFocused, isInvalid, isDisabled }) => (
                <div
                    className={cn('flex items-center gap-2', {
                        'items-start': description
                    })}
                >
                    <div
                        className={cn(
                            'size-4 shrink-0 rounded-full border bg-bg transition',
                            isSelected
                                ? 'border-[5px] border-primary bg-bg group-invalid:border-danger'
                                : 'border-muted group-hover:border-primary/70 group-hover:bg-primary/10',
                            isFocused &&
                                'border-primary ring-4 ring-primary/20 group-invalid:border-danger group-invalid:ring-danger/20',
                            isInvalid && 'border-danger/70 ring-danger/20 group-hover:border-danger/70'
                        )}
                    />
                    <div className='flex flex-col'>
                        <Label isInvalid={isInvalid} isDisabled={isDisabled} className='not-last:text-sm/4'>
                            {label ?? children}
                        </Label>
                        {description && <Description>{description}</Description>}
                    </div>
                </div>
            )}
        </RACRadio>
    )
}

export { Radio, RadioGroup }
