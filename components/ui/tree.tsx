'use client'

import React from 'react'

import { IconMinus } from 'hq-icons'
import * as Aria from 'react-aria-components'
import { tv } from 'tailwind-variants'

import { Checkbox } from './checkbox'

const treeStyles = tv({
    base: 'flex border max-h-96 min-w-72 [&::-webkit-scrollbar]:size-0.5 [scrollbar-width:thin] py-2 rounded-lg bg-background cursor-default lg:text-sm flex-col overflow-auto outline-none',
    variants: {
        isFocusVisible: {
            true: 'outline-offset-[-1px] outline-2 outline-primary'
        }
    }
})

const Tree = <T extends object>({ className, ...props }: Aria.TreeProps<T>) => {
    return (
        <Aria.UNSTABLE_Tree
            className={Aria.composeRenderProps(className, (className, renderProps) =>
                treeStyles({
                    ...renderProps,
                    className
                })
            )}
            {...props}
        >
            {props.children}
        </Aria.UNSTABLE_Tree>
    )
}

const itemStyles = tv({
    base: [
        '[&_[slot=chevron]_.indicator]:-rotate-90 outline-none [--padding:20px] p-[0.286rem_0.286rem_0.286rem_0.571rem] pl-[calc((var(--tree-item-level)-1)*20px+0.571rem+var(--padding))]',
        '[&_[slot=chevron]]:outline-none [&_[slot=chevron]_svg]:text-muted-foreground',
        'data-[has-child-rows]:[--padding:0px]'
    ],
    variants: {
        isExpanded: {
            true: '[&_[slot=chevron]_svg]:text-foreground [&_[slot=chevron]_.indicator]:rotate-0 [&_[slot=chevron]_svg]:transition'
        },
        isFocusVisible: {
            true: '[&_[slot=chevron]_svg]:text-foreground focus:outline-none focus-visible:ring-1 focus-visible:ring-primary'
        },
        isDisabled: {
            true: 'opacity-50'
        }
    }
})

const TreeItem = <T extends object>({ className, ...props }: Aria.TreeItemProps<T>) => {
    return (
        <Aria.UNSTABLE_TreeItem
            className={Aria.composeRenderProps(className, (className, renderProps) =>
                itemStyles({
                    ...renderProps,
                    className
                })
            )}
            {...props}
        >
            {props.children}
        </Aria.UNSTABLE_TreeItem>
    )
}

const ItemContent = (props: React.ComponentProps<typeof Aria.UNSTABLE_TreeItemContent>) => {
    return (
        <Aria.UNSTABLE_TreeItemContent {...props}>
            <div className='flex items-center'>
                <>{props.children as React.ReactNode}</>
            </div>
        </Aria.UNSTABLE_TreeItemContent>
    )
}

const Indicator = () => {
    return (
        <Aria.Button className='shrink-0 relative' slot='chevron'>
            <div className='ml-auto relative indicator flex items-center justify-center size-5'>
                <IconMinus className='absolute size-3' />
                <IconMinus className='absolute indicator size-3' />
            </div>
        </Aria.Button>
    )
}

const ItemCheckbox = () => {
    return <Checkbox slot='selection' />
}

const ItemLabel = (props: React.HtmlHTMLAttributes<HTMLSpanElement>) => {
    return <span {...props} />
}

TreeItem.Label = ItemLabel
TreeItem.Indicator = Indicator
TreeItem.Checkbox = ItemCheckbox
TreeItem.Content = ItemContent

export { Tree, TreeItem }
