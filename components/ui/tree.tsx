'use client'

import { cn } from '@/lib/utils'
import { IconChevronRight } from '@tabler/icons-react'
import type { TreeItemContentProps, TreeItemProps, TreeProps } from 'react-aria-components'
import {
    Button,
    Tree as RACTree,
    TreeItem as RACTreeItem,
    TreeItemContent,
    composeRenderProps
} from 'react-aria-components'

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
            className={composeRenderProps(className, (className) =>
                cn(
                    'relative flex items-center gap-1.5 rounded-lg p-1 py-2 text-sm outline-hidden',
                    'pl-[calc((var(--tree-item-level)-1)*20px+32px)] has-child-items:pl-[calc((var(--tree-item-level)-1)*20px+8px)]',
                    'focus-visible:ring-2 focus-visible:ring-ring',
                    'selected:bg-primary/10 selected:text-primary',
                    'disabled:opacity-50',
                    className
                )
            )}
            {...props}
        />
    )
}

const ItemContent = ({ children, ...props }: TreeItemContentProps) => (
    <TreeItemContent {...props}>
        {(values) => (
            <>
                {values.hasChildItems && (
                    <Button
                        slot='chevron'
                        className='inline-flex size-4 items-center justify-center text-muted-foreground outline-hidden'
                    >
                        <IconChevronRight
                            data-slot='indicator'
                            className={cn('transition-transform', values.isExpanded && 'rotate-90')}
                        />
                    </Button>
                )}
                {typeof children === 'function' ? children(values) : children}
            </>
        )}
    </TreeItemContent>
)

TreeItem.Content = ItemContent

export { Tree, TreeItem }
export type { TreeItemProps, TreeProps }
