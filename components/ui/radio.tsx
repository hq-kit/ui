'use client'

import type {
    RadioGroupProps as RadioGroupPrimitiveProps,
    RadioProps as RadioPrimitiveProps,
    ValidationResult
} from 'react-aria-components'
import { RadioGroup as RadioGroupPrimitive, Radio as RadioPrimitive } from 'react-aria-components'
import { tv } from 'tailwind-variants'

import { Description, FieldError, Label } from './field'
import { ctr } from './utils'

interface RadioGroupProps extends Omit<RadioGroupPrimitiveProps, 'children'> {
    label?: string
    children?: React.ReactNode
    description?: string
    errorMessage?: string | ((validation: ValidationResult) => string)
    ref?: React.Ref<HTMLDivElement>
}

const RadioGroup = ({
    label,
    description,
    errorMessage,
    children,
    ref,
    ...props
}: RadioGroupProps) => {
    return (
        <RadioGroupPrimitive
            ref={ref}
            {...props}
            className={ctr(props.className, 'group flex flex-col gap-2')}
        >
            {label && <Label>{label}</Label>}
            <div className='flex gap-2 select-none group-data-[orientation=horizontal]:flex-wrap group-data-[orientation=horizontal]:gap-2 group-data-[orientation=vertical]:flex-col sm:group-data-[orientation=horizontal]:gap-4'>
                {children}
            </div>
            {description && <Description>{description}</Description>}
            <FieldError>{errorMessage}</FieldError>
        </RadioGroupPrimitive>
    )
}

const radioStyles = tv({
    base: 'bg-background size-4 shrink-0 rounded-full border transition',
    variants: {
        isSelected: {
            false: 'border-fg/40',
            true: 'border-primary border-[4.5px]'
        },
        isFocused: {
            true: [
                'border-primary bg-primary/20 ring-primary/20 ring-4',
                'group-data-invalid:border-danger/70 group-data-invalid:bg-danger/20 group-data-invalid:ring-danger/20'
            ]
        },
        isInvalid: {
            true: 'border-danger/70 bg-danger/20'
        },
        isDisabled: {
            false: 'group-data-hovered:border-primary/60 group-data-hovered:bg-primary/10',
            true: 'opacity-50'
        }
    }
})

interface RadioProps extends RadioPrimitiveProps {
    description?: string
    ref?: React.Ref<HTMLLabelElement>
}

const Radio = ({ description, ref, ...props }: RadioProps) => {
    return (
        <RadioPrimitive
            ref={ref}
            className={ctr(
                props.className,
                'group text-fg disabled:text-fg/50 flex items-center gap-2 text-sm transition'
            )}
            {...props}
        >
            {(renderProps) => (
                <div className='flex gap-2'>
                    <div
                        className={radioStyles({
                            ...renderProps,
                            className: 'description' in props ? 'mt-1' : 'mt-0.5'
                        })}
                    />
                    <div className='flex flex-col gap-1'>
                        {props.children as React.ReactNode}
                        {description && <Description className='block'>{description}</Description>}
                    </div>
                </div>
            )}
        </RadioPrimitive>
    )
}

export { Radio, RadioGroup }
export type { RadioGroupProps, RadioProps }
