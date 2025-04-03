'use client'

import { IconChevronRight } from 'hq-icons'
import type { TreeItemContentProps, TreeItemProps, TreeProps } from 'react-aria-components'
import {
    Button,
    composeRenderProps,
    Tree as RACTree,
    TreeItem as RACTreeItem,
    TreeItemContent
} from 'react-aria-components'

import { cn } from '@/lib/utils'

const Tree = <T extends object>({ className, ...props }: TreeProps<T>) => {
    return (
        <RACTree
            className={composeRenderProps(className, (className) =>
                cn('flex flex-col cursor-default gap-0.5 p-2 text-sm outline-hidden', className)
            )}
            {...props}
        />
    )
}

const TreeItem = <T extends object>({ className, ...props }: TreeItemProps<T>) => {
    return (
        <RACTreeItem
            className={composeRenderProps(
                className,
                (className, { isFocusVisible, isDisabled, isSelected, hasChildItems }) =>
                    cn(
                        'p-1 outline-hidden relative flex items-center gap-1.5 rounded-lg py-2 text-sm',
                        hasChildItems
                            ? 'pl-[calc((var(--tree-item-level)-1)*20px+8px)]'
                            : 'pl-[calc((var(--tree-item-level)-1)*20px+32px)]',
                        isFocusVisible && 'ring-primary/20 ring-2',
                        isSelected && 'bg-accent text-accent-fg',
                        isDisabled && 'opacity-50',
                        className
                    )
            )}
            {...props}
        />
    )
}

const ItemContent = ({ children, ...props }: TreeItemContentProps) => (
    <TreeItemContent {...props}>
        {composeRenderProps(children, (children, { hasChildItems, isExpanded }) => (
            <>
                {hasChildItems && (
                    <Button
                        slot='chevron'
                        className='inline-flex size-4 text-muted-fg items-center justify-center outline-hidden'
                    >
                        <IconChevronRight
                            data-slot='indicator'
                            className={cn('transition-transform', isExpanded && 'rotate-90')}
                        />
                    </Button>
                )}
                {children}
            </>
        ))}
    </TreeItemContent>
)

TreeItem.Content = ItemContent

export { Tree, TreeItem }
export type { TreeItemProps, TreeProps }
