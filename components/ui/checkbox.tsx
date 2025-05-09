'use client'

import type { ReactNode, Ref } from 'react'

import { IconCheck, IconMinus } from 'hq-icons'
import type {
    CheckboxGroupProps as RACCheckboxGroupProps,
    CheckboxProps as RACCheckboxProps
} from 'react-aria-components'
import { Checkbox as RACCheckbox, CheckboxGroup as RACCheckboxGroup, composeRenderProps } from 'react-aria-components'

import { cn } from '@/lib/utils'
import { Description, FieldError, type FieldProps, Label } from './form'

interface CheckboxGroupProps extends RACCheckboxGroupProps, FieldProps {}

const CheckboxGroup = ({ className, children, label, description, errorMessage, ...props }: CheckboxGroupProps) => {
    return (
        <RACCheckboxGroup
            {...props}
            className={composeRenderProps(className, (className) => cn('flex flex-col gap-2', className))}
        >
            {composeRenderProps(children, (children, { isInvalid, isDisabled }) => (
                <>
                    {label && (
                        <Label isInvalid={isInvalid} isDisabled={isDisabled}>
                            {label}
                        </Label>
                    )}
                    {children}
                    {description && <Description>{description}</Description>}
                    <FieldError>{errorMessage}</FieldError>
                </>
            ))}
        </RACCheckboxGroup>
    )
}

interface CheckboxProps extends RACCheckboxProps {
    label?: string
    description?: string
    children?: ReactNode
    ref?: Ref<HTMLLabelElement>
}

const Checkbox = ({ className, children, label, description, ref, ...props }: CheckboxProps) => {
    return (
        <RACCheckbox
            className={composeRenderProps(className, (className) => cn('group flex items-center gap-x-2', className))}
            ref={ref}
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
                            'flex size-4 shrink-0 items-center justify-center rounded-xs border shadow-xs transition',
                            'border-muted group-hover:border-primary/70',
                            'group-selected:border-primary group-selected:bg-primary group-selected:text-primary-fg group-selected:group-invalid:border-danger/70 group-selected:group-invalid:bg-danger group-selected:group-invalid:text-danger-fg',
                            'group-focus:border-primary group-focus:group-invalid:border-danger/70',
                            'group-focus-visible:ring-4 group-focus-visible:ring-ring group-focus-visible:group-invalid:ring-invalid',
                            className
                        )}
                    >
                        {values.isIndeterminate ? (
                            <IconMinus className='size-3' />
                        ) : values.isSelected ? (
                            <IconCheck className='size-3' />
                        ) : null}
                    </div>

                    <div className='flex flex-col gap-y-1.5'>
                        <Label
                            elementType='span'
                            isInvalid={values.isInvalid}
                            isDisabled={values.isDisabled}
                            className='not-last:text-sm/4'
                        >
                            {label ?? children}
                        </Label>
                        {description && <Description>{description}</Description>}
                    </div>
                </div>
            )}
        </RACCheckbox>
    )
}

export { Checkbox, CheckboxGroup }
