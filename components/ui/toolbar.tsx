'use client'

import React from 'react'

import {
    composeRenderProps,
    Group,
    GroupProps,
    Separator,
    SeparatorProps,
    Toolbar as RACToolbar,
    ToolbarContext,
    ToolbarProps,
    useSlottedContext
} from 'react-aria-components'

import { cn } from '@/lib/utils'

import { Toggle, ToggleGroupContext, type ToggleGroupContextProps, toggleGroupStyles } from './toggle'

const Toolbar = ({ orientation = 'horizontal', className, ...props }: ToolbarProps) => (
    <ToolbarContext.Provider value={{ orientation }}>
        <RACToolbar
            orientation={orientation}
            className={composeRenderProps(className, (className, { orientation }) =>
                cn(
                    'group flex gap-2',
                    orientation === 'vertical' ? 'flex-col items-start' : 'flex-row [-ms-overflow-style:none]',
                    className
                )
            )}
            {...props}
        />
    </ToolbarContext.Provider>
)

interface ToolbarGroupProps extends GroupProps, Omit<ToggleGroupContextProps, 'orientation'> {
    ref?: React.RefObject<HTMLDivElement>
}

const ToolbarGroup = ({ className, ref, variant, gap, icon, size, ...props }: ToolbarGroupProps) => {
    const { orientation } = useSlottedContext(ToolbarContext)!
    return (
        <ToggleGroupContext.Provider value={{ variant, gap, size, icon, isDisabled: props.isDisabled }}>
            <Group
                ref={ref}
                className={composeRenderProps(className, (className) =>
                    cn(
                        toggleGroupStyles({
                            gap,
                            orientation
                        }),
                        className
                    )
                )}
                {...props}
            />
        </ToggleGroupContext.Provider>
    )
}

const ToolbarSeparator = ({ className, ...props }: SeparatorProps) => {
    const { orientation } = useSlottedContext(ToolbarContext)!
    return (
        <Separator
            className={cn(
                'bg-muted',
                orientation === 'horizontal' ? 'mx-1.5 min-h-8 w-px' : ' my-1.5 min-w-8 w-fit h-px',
                className
            )}
            {...props}
        />
    )
}

Toolbar.Group = ToolbarGroup
Toolbar.Separator = ToolbarSeparator
Toolbar.Item = Toggle

export { Toolbar }
