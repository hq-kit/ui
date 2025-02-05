'use client'

import { useId } from 'react'

import { LayoutGroup, motion } from 'motion/react'
import type {
    TabListProps as TabListPrimitiveProps,
    TabPanelProps as TabPanelPrimitiveProps,
    TabProps as TabPrimitiveProps,
    TabsProps as TabsPrimitiveProps
} from 'react-aria-components'
import {
    TabList,
    TabPanel,
    Tab as TabPrimitive,
    Tabs as TabsPrimitive
} from 'react-aria-components'
import { tv } from 'tailwind-variants'

import { cn, cr, useMediaQuery } from './utils'

const tabsStyles = tv({
    base: 'group/tabs flex gap-4',
    variants: {
        orientation: {
            horizontal: 'flex-col',
            vertical: 'w-[800px] flex-row'
        }
    }
})

interface TabsProps extends TabsPrimitiveProps {
    ref?: React.RefObject<HTMLDivElement>
    isResponsive?: boolean
}
const Tabs = ({ className, isResponsive = false, ref, ...props }: TabsProps) => {
    const isDesktop = useMediaQuery('(min-width: 1024px)')
    const orientation = isDesktop ? 'vertical' : 'horizontal'
    return (
        <TabsPrimitive
            orientation={isResponsive ? orientation : props.orientation}
            className={cr(className, (className, renderProps) =>
                tabsStyles({
                    ...renderProps,
                    className
                })
            )}
            ref={ref}
            {...props}
        />
    )
}

const tabListStyles = tv({
    base: 'flex',
    variants: {
        orientation: {
            horizontal: 'border-muted flex-row gap-x-5 border-b',
            vertical: 'flex-col items-start gap-y-4 border-l'
        }
    }
})

interface TabListProps<T extends object> extends TabListPrimitiveProps<T> {
    ref?: React.RefObject<HTMLDivElement>
}
const List = <T extends object>({ className, ref, ...props }: TabListProps<T>) => {
    const id = useId()
    return (
        <LayoutGroup id={id}>
            <TabList
                ref={ref}
                {...props}
                className={cr(className, (className, renderProps) =>
                    tabListStyles({ ...renderProps, className })
                )}
            />
        </LayoutGroup>
    )
}

const tabStyles = tv({
    base: [
        'relative flex cursor-default items-center text-sm font-medium whitespace-nowrap outline-hidden transition *:data-[slot=icon]:mr-2 *:data-[slot=icon]:size-4',
        'group-data-[orientation=vertical]/tabs:w-full group-data-[orientation=vertical]/tabs:py-0 group-data-[orientation=vertical]/tabs:pr-2 group-data-[orientation=vertical]/tabs:pl-4',
        'group-data-[orientation=horizontal]/tabs:pb-3'
    ],
    variants: {
        isSelected: {
            false: 'text-muted-fg',
            true: 'text-primary'
        },
        isFocusVisible: { true: 'text-primary **:first:ring-1 **:first:ring-offset-2' },
        isHovered: { false: 'ring-0', true: 'text-primary' },
        isDisabled: {
            true: 'text-muted-fg/50'
        }
    }
})

interface TabProps extends TabPrimitiveProps {
    ref?: React.RefObject<HTMLButtonElement>
}
const Tab = ({ children, ref, ...props }: TabProps) => {
    return (
        <TabPrimitive
            ref={ref}
            {...props}
            className={cr(props.className, (_className, renderProps) =>
                tabStyles({
                    ...renderProps,
                    className: cn('href' in props && 'cursor-pointer', _className)
                })
            )}
        >
            {({ isSelected }) => (
                <>
                    {children as React.ReactNode}
                    {isSelected && (
                        <motion.span
                            className={cn(
                                'bg-primary absolute rounded',
                                // horizontal
                                'group-data-[orientation=horizontal]/tabs:inset-x-0 group-data-[orientation=horizontal]/tabs:-bottom-px group-data-[orientation=horizontal]/tabs:h-0.5 group-data-[orientation=horizontal]/tabs:w-full',
                                // vertical
                                'group-data-[orientation=vertical]/tabs:left-0 group-data-[orientation=vertical]/tabs:h-[calc(100%-10%)] group-data-[orientation=vertical]/tabs:w-0.5 group-data-[orientation=vertical]/tabs:transform'
                            )}
                            layoutId='current-selected'
                            transition={{ type: 'spring', stiffness: 500, damping: 40 }}
                        />
                    )}
                </>
            )}
        </TabPrimitive>
    )
}

interface TabPanelProps extends TabPanelPrimitiveProps {
    ref?: React.RefObject<HTMLDivElement>
}
const Panel = ({ className, ref, ...props }: TabPanelProps) => {
    return (
        <TabPanel
            {...props}
            ref={ref}
            className={cn(className, 'text-fg flex-1 text-sm data-focus-visible:outline-hidden')}
        />
    )
}

Tabs.List = List
Tabs.Label = Tab
Tabs.Content = Panel

export { Tabs }
export type { TabListProps, TabPanelProps, TabProps, TabsProps }
