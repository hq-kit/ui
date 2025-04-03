'use client'

import type { GroupProps, SeparatorProps, ToolbarProps } from 'react-aria-components'
import { composeRenderProps, Group, Toolbar as RACToolbar, Separator } from 'react-aria-components'

import { cn } from '@/lib/utils'

import { Toggle } from './toggle'

const Toolbar = ({ orientation = 'horizontal', className, ...props }: ToolbarProps) => (
    <RACToolbar
        orientation={orientation}
        className={composeRenderProps(className, (className, { orientation }) =>
            cn(
                'group flex gap-2',
                orientation === 'vertical'
                    ? 'flex-col items-start'
                    : 'flex-row [-ms-overflow-style:none]',
                className
            )
        )}
        {...props}
    />
)

const ToolbarGroup = ({ className, ...props }: GroupProps) => (
    <Group
        className={composeRenderProps(className, (className, { isDisabled }) =>
            cn(
                'flex gap-2 items-center group-orientation-vertical:flex-col group-orientation-vertical:items-start',
                isDisabled && 'opacity-50 pointer-events-none',
                className
            )
        )}
        {...props}
    >
        {props.children}
    </Group>
)

const ToolbarSeparator = ({ className, ...props }: SeparatorProps) => {
    return (
        <Separator
            className={cn(
                'bg-muted group-orientation-horizontal:mx-1.5 group-orientation-horizontal:h-10 group-orientation-horizontal:w-px group-orientation-vertical:my-1.5 group-orientation-vertical:w-10 group-orientation-vertical:h-px',
                className
            )}
            {...props}
        />
    )
}

Toolbar.Group = ToolbarGroup
Toolbar.Item = Toggle
Toolbar.Separator = ToolbarSeparator

export { Toolbar }
