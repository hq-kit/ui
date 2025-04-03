'use client'

import {
    composeRenderProps,
    Switch as RACSwitch,
    type SwitchProps as RACSwitchProps
} from 'react-aria-components'

import { cn } from '@/lib/utils'

import { Label } from './field'

interface SwitchProps extends RACSwitchProps {
    ref?: React.RefObject<HTMLLabelElement>
}

const Switch = ({ children, className, ref, ...props }: SwitchProps) => {
    return (
        <RACSwitch
            ref={ref}
            className={composeRenderProps(className, (className) =>
                cn('group inline-flex touch-none items-center sm:text-sm', className)
            )}
            {...props}
        >
            {({ isSelected, isFocused, isFocusVisible, isDisabled, isPressed }) => (
                <>
                    <span
                        className={cn(
                            'mr-2 inline-flex h-5 w-8 items-center rounded-xl border-2 border-transparent bg-muted transition',
                            { 'ring-4 ring-primary/20': isFocused || isFocusVisible },
                            isSelected && 'bg-primary',
                            isDisabled ? 'cursor-default opacity-50' : 'cursor-pointer'
                        )}
                    >
                        <span
                            className={cn(
                                'bg-primary-fg block size-4 origin-right rounded-lg shadow-sm transition',
                                isSelected && 'ml-3',
                                isPressed && 'w-5',
                                isSelected && isPressed && 'ml-2'
                            )}
                        />
                    </span>
                    <Label>{children as React.ReactNode}</Label>
                </>
            )}
        </RACSwitch>
    )
}

export { Switch }
