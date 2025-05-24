'use client'

import type { ReactNode, Ref } from 'react'

import type { RadioGroupProps as RACRadioGroupProps, RadioProps as RACRadioProps } from 'react-aria-components'
import { Radio as RACRadio, RadioGroup as RACRadioGroup, composeRenderProps } from 'react-aria-components'

import { cn } from '@/lib/utils'
import { Description, FieldError, type FieldProps, Label } from './form'

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
    children?: ReactNode
    ref?: Ref<HTMLLabelElement>
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
            {(values) => (
                <div
                    className={cn('flex items-center gap-2', {
                        'items-start': description
                    })}
                >
                    <div
                        className={cn(
                            'size-4 shrink-0 rounded-full border bg-bg transition',
                            'group-selected:border-[5px] group-selected:border-primary group-selected:bg-bg group-selected:group-invalid:border-danger',
                            'border-muted group-hover:border-primary/70',
                            'group-focus:border-primary group-focus:group-invalid:border-danger',
                            'group-focus-visible:border-primary group-focus-visible:ring-4 group-focus-visible:ring-ring group-focus-visible:group-invalid:border-danger',
                            'group-invalid:border-danger/70 group-invalid:ring-invalid group-invalid:group-hover:border-danger/70'
                        )}
                    />
                    <div className='flex flex-col gap-y-1.5'>
                        <Label
                            elementType='span'
                            isInvalid={values.isInvalid}
                            isDisabled={values.isDisabled}
                            className='font-normal not-last:text-sm/4'
                        >
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
