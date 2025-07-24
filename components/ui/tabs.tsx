'use client'

import type {
    TabListProps as RACTabListProps,
    TabPanelProps as RACTabPanelProps,
    TabProps as RACTabProps,
    TabsProps as RACTabsProps
} from 'react-aria-components'
import { Tab as RACTab, Tabs as RACTabs, TabList, TabPanel, composeRenderProps } from 'react-aria-components'

import { cn } from '@/lib/utils'
import type { Ref } from 'react'

interface TabsProps extends RACTabsProps {
    ref?: Ref<HTMLDivElement>
}
const Tabs = ({ className, ref, ...props }: TabsProps) => {
    return (
        <RACTabs
            className={composeRenderProps(className, (className) =>
                cn(
                    'group/tabs grid orientation-horizontal:grid-cols-1 orientation-vertical:grid-cols-[auto_1fr] gap-2',
                    className
                )
            )}
            ref={ref}
            {...props}
        />
    )
}

interface TabListProps<T extends object> extends RACTabListProps<T> {
    ref?: Ref<HTMLDivElement>
}
const List = <T extends object>({ className, ref, ...props }: TabListProps<T>) => {
    return (
        <TabList
            ref={ref}
            {...props}
            className={composeRenderProps(className, (className, { orientation }) =>
                cn(
                    'no-scrollbar inline-flex h-9 items-center justify-center rounded-lg bg-muted p-[3px] text-muted-foreground',
                    orientation === 'horizontal' ? 'max-w-full items-center overflow-x-auto' : 'grid h-fit items-start',
                    className
                )
            )}
        />
    )
}

interface TabProps extends RACTabProps {
    ref?: Ref<HTMLButtonElement>
}

const Tab = ({ className, ref, ...props }: TabProps) => {
    return (
        <RACTab
            ref={ref}
            {...props}
            className={composeRenderProps(className, (className) =>
                cn(
                    'inline-flex h-[calc(100%-1px)] flex-1 select-none items-center justify-center gap-1.5 whitespace-nowrap rounded-md border border-transparent px-2 py-1 font-medium text-sm transition-[color,box-shadow]',
                    'text-foreground dark:text-muted-foreground',
                    "[&_svg:not([class*='size-'])]:size-4 [&_svg]:pointer-events-none [&_svg]:shrink-0",
                    'selected:bg-background selected:shadow-sm',
                    'dark:selected:border-input dark:selected:bg-input/30 dark:selected:text-foreground',
                    'focus-visible:border-ring focus-visible:outline-1 focus-visible:outline-ring focus-visible:ring-[3px] focus-visible:ring-ring/50',
                    'disabled:pointer-events-none disabled:opacity-50',
                    className
                )
            )}
        />
    )
}

interface TabPanelProps extends RACTabPanelProps {
    ref?: Ref<HTMLDivElement>
}
const Panel = ({ className, ref, ...props }: TabPanelProps) => {
    return <TabPanel {...props} ref={ref} className={cn(className, 'flex-1 outline-hidden')} />
}

Tabs.List = List
Tabs.Label = Tab
Tabs.Content = Panel

export { Tabs }
