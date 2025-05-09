'use client'

import type { ReactNode, RefObject } from 'react'
import { Switch as RACSwitch, type SwitchProps as RACSwitchProps, composeRenderProps } from 'react-aria-components'

import { cn } from '@/lib/utils'
import { Label } from './form'

interface SwitchProps extends RACSwitchProps {
    ref?: RefObject<HTMLLabelElement>
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
            {(values) => (
                <>
                    <span
                        className={cn(
                            'mr-2 inline-flex h-5 w-8 items-center rounded-xl border border-transparent bg-muted transition',
                            'group-focus-visible:border-primary/70 group-focus-visible:ring-2 group-focus-visible:ring-ring group-focus-visible:ring-offset-2',
                            'group-hover:border-primary/70 group-selected:bg-primary',
                            'cursor-pointer group-disabled:cursor-default group-disabled:opacity-50'
                        )}
                    >
                        <span
                            className={cn(
                                'block size-4 origin-right rounded-lg bg-primary-fg shadow-sm transition-transform duration-200 ease-in-out',
                                'group-selected:ml-3'
                            )}
                        />
                    </span>
                    <Label>{children as ReactNode}</Label>
                </>
            )}
        </RACSwitch>
    )
}

export { Switch }
