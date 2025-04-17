'use client'

import { IconChevronRight } from 'hq-icons'
import type { TreeItemContentProps, TreeItemProps, TreeProps } from 'react-aria-components'
import {
    Button,
    Tree as RACTree,
    TreeItem as RACTreeItem,
    TreeItemContent,
    composeRenderProps
} from 'react-aria-components'

import { cn } from '@/lib/utils'

const Tree = <T extends object>({ className, ...props }: TreeProps<T>) => {
    return (
        <RACTree
            className={composeRenderProps(className, (className) =>
                cn('flex cursor-default flex-col gap-0.5 p-2 text-sm outline-hidden', className)
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
                        'relative flex items-center gap-1.5 rounded-lg p-1 py-2 text-sm outline-hidden',
                        hasChildItems
                            ? 'pl-[calc((var(--tree-item-level)-1)*20px+8px)]'
                            : 'pl-[calc((var(--tree-item-level)-1)*20px+32px)]',
                        isFocusVisible && 'ring-2 ring-primary/20',
                        isSelected && 'bg-primary/10 text-primary',
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
                        className='inline-flex size-4 items-center justify-center text-muted-fg outline-hidden'
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
