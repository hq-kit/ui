'use client'

import { cn } from '@/lib/utils'
import type { ReactNode, RefObject } from 'react'
import { Switch as RACSwitch, type SwitchProps as RACSwitchProps, composeRenderProps } from 'react-aria-components'
import { Label } from './form'

interface SwitchProps extends RACSwitchProps {
    ref?: RefObject<HTMLLabelElement>
}

const Switch = ({ children, className, ref, ...props }: SwitchProps) => {
    return (
        <RACSwitch
            ref={ref}
            className={composeRenderProps(className, (className) =>
                cn('group/field inline-flex touch-none items-center sm:text-sm', className)
            )}
            {...props}
        >
            <div
                className={cn(
                    'mr-2 inline-flex h-5 w-8 items-center rounded-full border bg-input px-0.5 shadow-xs transition',
                    'group-focus-visible/field:border-ring group-focus-visible/field:ring-2 group-focus-visible/field:ring-ring/50 group-focus-visible/field:ring-offset-2',
                    'group-hover/field:border-ring group-selected/field:bg-primary',
                    'cursor-pointer group-disabled/field:cursor-default group-disabled/field:opacity-50'
                )}
            >
                <span className='size-3.5 rounded-full border bg-primary-foreground transition-transform group-selected/field:translate-x-3' />
            </div>
            <Label>{children as ReactNode}</Label>
        </RACSwitch>
    )
}

export { Switch }
