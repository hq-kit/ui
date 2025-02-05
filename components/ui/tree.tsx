'use client'

import React from 'react'

import type { ButtonProps, TreeItemProps, TreeProps } from 'react-aria-components'
import {
    Button,
    UNSTABLE_TreeItemContent as TreeItemContent,
    UNSTABLE_TreeItem as TreeItemPrimitive,
    UNSTABLE_Tree as TreePrimitive
} from 'react-aria-components'
import { tv } from 'tailwind-variants'

import { Checkbox } from './checkbox'
import { Indicator } from './disclosure'
import { cr } from './utils'

const treeStyles = tv({
    base: 'bg-bg flex max-h-96 min-w-72 cursor-default flex-col overflow-auto rounded-lg border py-2 outline-none lg:text-sm',
    variants: {
        isFocusVisible: {
            true: 'outline-primary outline-2 outline-offset-[-1px]'
        }
    }
})

const Tree = <T extends object>({ className, ...props }: TreeProps<T>) => {
    return (
        <TreePrimitive
            className={cr(className, (className, renderProps) =>
                treeStyles({
                    ...renderProps,
                    className
                })
            )}
            {...props}
        >
            {props.children}
        </TreePrimitive>
    )
}

const itemStyles = tv({
    base: [
        'p-[0.286rem_0.286rem_0.286rem_0.571rem] pl-[calc((var(--tree-item-level)-1)*20px+0.571rem+var(--padding))] [--padding:20px] outline-none',
        '**:data-[slot=chevron]:text-muted-fg **:data-[slot=chevron]:outline-none',
        'data-[has-child-rows]:[--padding:0px]'
    ],
    variants: {
        isExpanded: {
            true: '**:data-[slot=chevron]:text-fg **:data-[slot=chevron]:rotate-0'
        },
        isFocusVisible: {
            true: '**:data-[slot=chevron]:text-fg ring-primary ring-1 outline-none'
        },
        isDisabled: {
            true: 'opacity-50'
        }
    }
})

const TreeItem = <T extends object>({ className, ...props }: TreeItemProps<T>) => {
    return (
        <TreeItemPrimitive
            className={cr(className, (className, renderProps) =>
                itemStyles({
                    ...renderProps,
                    className
                })
            )}
            {...props}
        >
            {props.children}
        </TreeItemPrimitive>
    )
}

const ItemContent = (props: React.ComponentProps<typeof TreeItemContent>) => (
    <TreeItemContent {...props}>
        <div className='flex items-center'>
            <>{props.children as React.ReactNode}</>
        </div>
    </TreeItemContent>
)

const ItemCheckbox = () => <Checkbox slot='selection' />

const ItemLabel = (props: ButtonProps) => (
    <Button
        slot='chevron'
        style={{ outline: 'none', display: 'flex', alignItems: 'center', gap: '0.5rem' }}
        {...props}
    />
)

TreeItem.Label = ItemLabel
TreeItem.Indicator = Indicator
TreeItem.Checkbox = ItemCheckbox
TreeItem.Content = ItemContent

export { Tree, TreeItem }
export type { TreeItemProps, TreeProps }
