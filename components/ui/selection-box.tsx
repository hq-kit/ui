'use client'

import React from 'react'

import type { CheckboxGroupProps, CheckboxProps, RadioGroupProps, RadioProps } from 'react-aria-components'
import { Checkbox, CheckboxGroup, composeRenderProps, Radio, RadioGroup } from 'react-aria-components'

import { cn } from '@/lib/utils'

import { Description, FieldError, type FieldProps, Label } from './field'

const SelectionBoxContext = React.createContext<'single' | 'multiple'>('single')
const useSelectionBoxContext = () => React.use(SelectionBoxContext)

interface SelectionBoxProps
    extends Omit<CheckboxGroupProps, 'value' | 'onChange' | 'defaultValue' | 'validate'>,
        Omit<RadioGroupProps, 'value' | 'onChange' | 'defaultValue' | 'validate'>,
        FieldProps {
    selectionMode?: 'single' | 'multiple'
    prefix?: React.ReactNode
    children?: React.ReactNode
    className?: string
    style?: React.CSSProperties
    /* eslint-disable  @typescript-eslint/no-explicit-any */
    value?: any
    /* eslint-disable  @typescript-eslint/no-explicit-any */
    onChange?: (value: any) => any
    /* eslint-disable  @typescript-eslint/no-explicit-any */
    defaultValue?: any
    /* eslint-disable  @typescript-eslint/no-explicit-any */
    validate?: (value: any) => any
}

const SelectionBox = ({
    orientation = 'vertical',
    selectionMode = 'single',
    className,
    children,
    label,
    description,
    errorMessage,
    ...props
}: SelectionBoxProps) => {
    return (
        <SelectionBoxContext.Provider value={selectionMode}>
            {selectionMode === 'multiple' ? (
                <CheckboxGroup
                    {...props}
                    className={composeRenderProps(className, (className) => cn('group flex flex-col gap-2', className))}
                >
                    {composeRenderProps(children, (children, { isInvalid, isDisabled }) => (
                        <>
                            {label && (
                                <Label isInvalid={isInvalid} isDisabled={isDisabled}>
                                    {label}
                                </Label>
                            )}
                            <div
                                slot='items'
                                className={cn(
                                    'select-none flex gap-2',
                                    orientation === 'horizontal' ? 'flex-wrap justify-between' : 'flex-col'
                                )}
                            >
                                {children}
                            </div>
                            {description && <Description>{description}</Description>}
                            <FieldError>{errorMessage}</FieldError>
                        </>
                    ))}
                </CheckboxGroup>
            ) : (
                <RadioGroup
                    {...props}
                    className={composeRenderProps(className, (className) => cn('group flex flex-col gap-2', className))}
                >
                    {composeRenderProps(children, (children, { isInvalid, isDisabled }) => (
                        <>
                            {label && (
                                <Label isInvalid={isInvalid} isDisabled={isDisabled}>
                                    {label}
                                </Label>
                            )}
                            <div
                                slot='items'
                                className={cn(
                                    'select-none flex gap-2',
                                    orientation === 'horizontal' ? 'flex-wrap justify-between' : 'flex-col'
                                )}
                            >
                                {children}
                            </div>
                            {description && <Description>{description}</Description>}
                            <FieldError>{errorMessage}</FieldError>
                        </>
                    ))}
                </RadioGroup>
            )}
        </SelectionBoxContext.Provider>
    )
}

interface SelectionBoxItemProps
    extends Omit<CheckboxProps, 'value'>,
        Omit<RadioProps, 'value'>,
        Omit<FieldProps, 'placeholder' | 'description' | 'errorMessage'> {
    prefix?: React.ReactNode
    children?: React.ReactNode
    className?: string
    style?: React.CSSProperties
    value: string
}

const SelectionBoxItem = ({ className, label, children, ...props }: SelectionBoxItemProps) => {
    const selectionMode = useSelectionBoxContext()
    return selectionMode === 'multiple' ? (
        <Checkbox
            className={composeRenderProps(className, (className, { isDisabled }) =>
                cn('group flex items-center gap-2 text-sm transition', isDisabled && 'opacity-50', className)
            )}
            {...props}
        >
            {({ isSelected, isIndeterminate, isFocused, isInvalid }) => (
                <div
                    slot='box'
                    className={cn(
                        'flex w-full px-3 py-2 items-center rounded-sm border text-bg transition',
                        isSelected || isIndeterminate
                            ? 'border-primary bg-primary/10 text-primary **:text-primary group-invalid:border-danger/70 group-invalid:bg-danger/20 group-invalid:**:text-danger'
                            : 'border-muted group-hover:border-primary/70 group-hover:bg-primary/10 **:text-muted-fg',
                        isFocused &&
                            'border-primary ring-primary/20 ring-4 group-invalid:border-danger/70 group-invalid:text-danger-fg group-invalid:ring-danger/20',
                        isInvalid &&
                            'border-danger/70 bg-danger/20 text-danger-fg ring-danger/20 group-hover:border-danger/70',
                        className
                    )}
                >
                    {props.prefix && (
                        <div className='flex shrink-0 items-center justify-center size-5 text-base mr-2'>
                            {props.prefix}
                        </div>
                    )}
                    <Label isInvalid={isInvalid} isDisabled={props.isDisabled}>
                        {label ?? children}
                    </Label>
                </div>
            )}
        </Checkbox>
    ) : (
        <Radio
            className={composeRenderProps(className, (className, { isDisabled }) =>
                cn('group flex grow items-center gap-2 text-sm transition', isDisabled && 'opacity-50', className)
            )}
            {...props}
        >
            {({ isSelected, isFocused, isInvalid }) => (
                <div
                    slot='box'
                    className={cn(
                        'flex w-full px-3 py-2 items-center rounded-sm border text-bg transition',
                        isSelected
                            ? 'border-primary bg-primary/10 text-primary **:text-primary group-invalid:border-danger/70 group-invalid:bg-danger/20 group-invalid:**:text-danger'
                            : 'border-muted group-hover:border-primary/70 group-hover:bg-primary/10 **:text-muted-fg',
                        isFocused &&
                            'border-primary ring-primary/20 ring-4 group-invalid:border-danger/70 group-invalid:text-danger-fg group-invalid:ring-danger/20',
                        isInvalid &&
                            'border-danger/70 bg-danger/20 text-danger-fg ring-danger/20 group-hover:border-danger/70',
                        className
                    )}
                >
                    {props.prefix && (
                        <div className='flex shrink-0 items-center justify-center size-5 text-base mr-2'>
                            {props.prefix}
                        </div>
                    )}
                    <Label isInvalid={isInvalid} isDisabled={props.isDisabled}>
                        {label ?? children}
                    </Label>
                </div>
            )}
        </Radio>
    )
}

SelectionBox.Item = SelectionBoxItem
export { SelectionBox }
