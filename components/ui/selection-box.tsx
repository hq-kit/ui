'use client'

import { type CSSProperties, type ReactNode, createContext, use } from 'react'
import type { CheckboxGroupProps, CheckboxProps, RadioGroupProps, RadioProps } from 'react-aria-components'
import { Checkbox, CheckboxGroup, Radio, RadioGroup, composeRenderProps } from 'react-aria-components'

import { cn } from '@/lib/utils'
import { Description, FieldError, type FieldProps, Label } from './form'

const SelectionBoxContext = createContext<'single' | 'multiple'>('single')
const useSelectionBoxContext = () => use(SelectionBoxContext)

interface SelectionBoxProps
    extends Omit<CheckboxGroupProps, 'value' | 'onChange' | 'defaultValue' | 'validate'>,
        Omit<RadioGroupProps, 'value' | 'onChange' | 'defaultValue' | 'validate'>,
        FieldProps {
    selectionMode?: 'single' | 'multiple'
    prefix?: ReactNode
    children?: ReactNode
    className?: string
    style?: CSSProperties
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
                    className={composeRenderProps(className, (className) => cn('flex flex-col gap-2', className))}
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
                                    'flex select-none gap-2',
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
                    className={composeRenderProps(className, (className) => cn('flex flex-col gap-2', className))}
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
                                    'flex select-none gap-2',
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
    prefix?: ReactNode
    children?: ReactNode
    className?: string
    style?: CSSProperties
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
                        'flex w-full items-center rounded-sm border px-3 py-2 text-bg transition',
                        isSelected || isIndeterminate
                            ? 'border-primary bg-primary/10 text-primary **:text-primary group-invalid:border-danger/70 group-invalid:bg-invalid group-invalid:**:text-danger'
                            : 'border-muted **:text-muted-fg group-hover:border-primary/70 group-hover:bg-primary/10',
                        isFocused &&
                            'border-primary ring-4 ring-ring group-invalid:border-danger/70 group-invalid:text-danger-fg group-invalid:ring-invalid',
                        isInvalid &&
                            'border-danger/70 bg-invalid text-danger-fg ring-invalid group-hover:border-danger/70',
                        className
                    )}
                >
                    {props.prefix && (
                        <div className='mr-2 flex size-5 shrink-0 items-center justify-center text-base'>
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
                        'flex w-full items-center rounded-sm border px-3 py-2 text-bg transition',
                        isSelected
                            ? 'border-primary bg-primary/10 text-primary **:text-primary group-invalid:border-danger/70 group-invalid:bg-invalid group-invalid:**:text-danger'
                            : 'border-muted **:text-muted-fg group-hover:border-primary/70 group-hover:bg-primary/10',
                        isFocused &&
                            'border-primary ring-4 ring-ring group-invalid:border-danger/70 group-invalid:text-danger-fg group-invalid:ring-invalid',
                        isInvalid &&
                            'border-danger/70 bg-invalid text-danger-fg ring-invalid group-hover:border-danger/70',
                        className
                    )}
                >
                    {props.prefix && (
                        <div className='mr-2 flex size-5 shrink-0 items-center justify-center text-base'>
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
