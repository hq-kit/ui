'use client'

import type { RefObject } from 'react'

import type {
    TabListProps as RACTabListProps,
    TabPanelProps as RACTabPanelProps,
    TabProps as RACTabProps,
    TabsProps as RACTabsProps
} from 'react-aria-components'
import { Tab as RACTab, Tabs as RACTabs, TabList, TabPanel, composeRenderProps } from 'react-aria-components'

import { cn } from '@/lib/utils'

interface TabsProps extends RACTabsProps {
    ref?: RefObject<HTMLDivElement>
    variant?: 'primary' | 'secondary' | 'tertiary'
}
const Tabs = ({ className, ref, ...props }: TabsProps) => {
    return (
        <RACTabs
            data-variant={props.variant ?? 'primary'}
            className={composeRenderProps(className, (className) =>
                cn(
                    'group grid orientation-horizontal:grid-cols-1 orientation-vertical:grid-cols-[auto_1fr] gap-2',
                    className
                )
            )}
            ref={ref}
            {...props}
        />
    )
}

interface TabListProps<T extends object> extends RACTabListProps<T> {
    ref?: RefObject<HTMLDivElement>
}
const List = <T extends object>({ className, ref, ...props }: TabListProps<T>) => {
    return (
        <TabList
            ref={ref}
            {...props}
            className={composeRenderProps(className, (className, { orientation }) =>
                cn(
                    'no-scrollbar rounded-lg bg-bg p-1 text-muted-fg group-data-[variant=primary]:border',
                    orientation === 'horizontal'
                        ? 'group-data-[variant=tertiary]:-space-x-[1px] flex w-full items-center overflow-x-auto group-data-[variant=secondary]:rounded-b-none group-data-[variant=secondary]:border-b group-data-[variant=secondary]:pb-0'
                        : 'group-data-[variant=tertiary]:-space-y-[1px] grid h-fit items-start group-data-[variant=secondary]:rounded-l-none group-data-[variant=secondary]:border-l group-data-[variant=secondary]:pl-0',
                    className
                )
            )}
        />
    )
}

interface TabProps extends RACTabProps {
    ref?: RefObject<HTMLButtonElement>
}

const Tab = ({ className, ref, ...props }: TabProps) => {
    return (
        <RACTab
            ref={ref}
            {...props}
            className={composeRenderProps(className, (className) =>
                cn(
                    'relative inline-flex cursor-pointer items-center gap-x-2 whitespace-nowrap px-3 py-1 font-medium text-sm outline-hidden transition',
                    'group-data-[variant=primary]:rounded-md group-data-[variant=secondary]:rounded-b-none group-data-[variant=secondary]:border-transparent group-data-[variant=secondary]:group-orientation-horizontal:border-b-2 group-data-[variant=secondary]:group-orientation-vertical:border-l-2',
                    'selected:group-data-[variant=primary]:bg-primary/10 selected:group-data-[variant=primary]:text-primary',
                    'selected:group-data-[variant=secondary]:border-primary selected:group-data-[variant=secondary]:text-primary',
                    'group-data-[variant=tertiary]:rounded-md group-data-[variant=tertiary]:border group-data-[variant=tertiary]:border-transparent group-data-[variant=tertiary]:group-orientation-vertical:rounded-r-none group-data-[variant=tertiary]:group-orientation-horizontal:rounded-b-none group-data-[variant=tertiary]:group-orientation-vertical:border-r-primary group-data-[variant=tertiary]:group-orientation-horizontal:border-b-primary',
                    'selected:group-data-[variant=tertiary]:border-primary selected:group-data-[variant=tertiary]:text-primary selected:group-data-[variant=tertiary]:group-orientation-vertical:border-r-transparent selected:group-data-[variant=tertiary]:group-orientation-horizontal:border-b-transparent',
                    'focus-visible:text-primary focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2',
                    'disabled:opacity-50',
                    className
                )
            )}
        />
    )
}

interface TabPanelProps extends RACTabPanelProps {
    ref?: RefObject<HTMLDivElement>
}
const Panel = ({ className, ref, ...props }: TabPanelProps) => {
    return <TabPanel {...props} ref={ref} className={cn(className, 'flex-1 text-fg text-sm outline-hidden')} />
}

Tabs.List = List
Tabs.Label = Tab
Tabs.Content = Panel

export { Tabs }
