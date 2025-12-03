'use client'

import { composeRenderProps, Label, Switch as RACSwitch, type SwitchProps } from 'react-aria-components'
import { cn } from '@/lib/utils'

const Switch = ({ children, className, ...props }: SwitchProps) => (
    <RACSwitch
        className={composeRenderProps(className, (className) =>
            cn(
                'group inline-flex items-center gap-2 data-disabled:cursor-not-allowed data-disabled:opacity-70',
                className
            )
        )}
        {...props}
    >
        {(values) => (
            <>
                <div className='peer inline-flex h-[1.15rem] w-8 shrink-0 items-center rounded-full border border-transparent bg-input shadow-xs outline-hidden transition-all disabled:cursor-not-allowed disabled:opacity-50 group-data-focus-visible:border-ring group-data-selected:bg-primary group-data-focus-visible:ring-[3px] group-data-focus-visible:ring-ring/50 dark:bg-input/80'>
                    <div className='pointer-events-none block size-4 translate-x-0 rounded-full bg-background ring-0 transition-transform group-data-selected:translate-x-[calc(100%-2px)] dark:bg-foreground dark:group-data-selected:bg-primary-foreground' />
                </div>
                {typeof children === 'function' ? (
                    children(values)
                ) : typeof children === 'string' ? (
                    <Label className='text-sm transition group-has-invalid/box:text-destructive' elementType='span'>
                        {children}
                    </Label>
                ) : (
                    children
                )}
            </>
        )}
    </RACSwitch>
)

export { Switch }
