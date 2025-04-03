'use client'

import type {
    TabListProps as RACTabListProps,
    TabPanelProps as RACTabPanelProps,
    TabProps as RACTabProps,
    TabsProps as RACTabsProps
} from 'react-aria-components'
import {
    composeRenderProps,
    Tab as RACTab,
    Tabs as RACTabs,
    TabList,
    TabPanel
} from 'react-aria-components'

import { cn } from '@/lib/utils'

interface TabsProps extends RACTabsProps {
    ref?: React.RefObject<HTMLDivElement>
}
const Tabs = ({ className, ref, ...props }: TabsProps) => {
    return (
        <RACTabs
            className={composeRenderProps(className, (className, { orientation }) =>
                cn(
                    'gap-4 grid',
                    orientation === 'horizontal' ? 'grid-cols-1' : 'grid-cols-[auto_1fr]',
                    className
                )
            )}
            ref={ref}
            {...props}
        />
    )
}

interface TabListProps<T extends object> extends RACTabListProps<T> {
    ref?: React.RefObject<HTMLDivElement>
}
const List = <T extends object>({ className, ref, ...props }: TabListProps<T>) => {
    return (
        <TabList
            ref={ref}
            {...props}
            className={composeRenderProps(className, (className, { orientation }) =>
                cn(
                    'group p-1 size-fit',
                    orientation === 'horizontal'
                        ? 'flex items-center rounded-t-lg pb-0'
                        : 'grid items-start rounded-r-lg pl-0',
                    className
                )
            )}
        />
    )
}

interface TabProps extends RACTabProps {
    ref?: React.RefObject<HTMLButtonElement>
}

const Tab = ({ className, ref, ...props }: TabProps) => {
    return (
        <RACTab
            ref={ref}
            {...props}
            className={composeRenderProps(
                className,
                (className, { isSelected, isFocusVisible, isHovered, isDisabled }) =>
                    cn(
                        'relative cursor-pointer py-1.5 px-4 flex gap-x-2 items-center text-sm font-medium whitespace-nowrap outline-hidden transition',
                        'group-orientation-horizontal:rounded-t-md group-orientation-vertical:rounded-r-md  group-orientation-horizontal:border-b-2 group-orientation-vertical:border-l-2',
                        isSelected ? 'text-primary bg-primary/10 border-primary' : 'text-muted-fg',
                        isFocusVisible && 'text-primary ring-1 ring-offset-2 ring-primary',
                        isHovered && 'text-primary',
                        isDisabled && 'opacity-50',
                        className
                    )
            )}
        />
    )
}

interface TabPanelProps extends RACTabPanelProps {
    ref?: React.RefObject<HTMLDivElement>
}
const Panel = ({ className, ref, ...props }: TabPanelProps) => {
    return (
        <TabPanel
            {...props}
            ref={ref}
            className={cn(
                className,
                'text-fg flex-1 overflow-auto text-sm data-focus-visible:outline-hidden'
            )}
        />
    )
}

Tabs.List = List
Tabs.Label = Tab
Tabs.Content = Panel

export { Tabs }
