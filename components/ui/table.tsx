'use client'

import React from 'react'

import { IconChevronDown, IconLoaderCircle, IconMenu } from 'hq-icons'
import type {
    CellProps,
    ColumnProps,
    ColumnResizerProps,
    TableHeaderProps as HeaderProps,
    RowProps,
    TableBodyProps,
    TableProps as TablePrimitiveProps
} from 'react-aria-components'
import {
    Button,
    Cell,
    Collection,
    Column,
    ColumnResizer as ColumnResizerPrimitive,
    ResizableTableContainer,
    Row,
    TableBody as TableBodyPrimitive,
    TableHeader as TableHeaderPrimitive,
    Table as TablePrimitive,
    useTableOptions
} from 'react-aria-components'
import { tv } from 'tailwind-variants'

import { Checkbox } from './checkbox'
import { cn, cr } from './utils'

const table = tv({
    slots: {
        root: '**:data-drop-target:border-primary table w-full min-w-full caption-bottom border-spacing-0 text-sm outline-hidden **:data-drop-target:border',
        header: 'border-b',
        row: 'tr data-focus-visible-within:bg-primary/10 group bg-bg text-muted-fg ring-primary data-selected:bg-primary/5 data-selected:data-hovered:bg-primary/10 data-focused:bg-primary/10 data-hovered:bg-primary/5 relative cursor-default border-b outline-hidden data-focus-visible:ring-1 data-focused:ring-0',
        cellIcon:
            'bg-muted text-fg grid size-[1.15rem] flex-none shrink-0 place-content-center rounded *:data-[slot=icon]:size-3.5 *:data-[slot=icon]:shrink-0 *:data-[slot=icon]:transition-transform *:data-[slot=icon]:duration-200',
        columnResizer: [
            '[&[data-resizing]>div]:bg-primary absolute top-0 right-0 bottom-0 grid w-px touch-none place-content-center px-1',
            '&[data-resizable-direction=left]:cursor-e-resize &[data-resizable-direction=right]:cursor-w-resize data-[resizable-direction=both]:cursor-ew-resize'
        ]
    }
})

const { root, header, row, cellIcon, columnResizer } = table()

interface TableProps extends TablePrimitiveProps {
    className?: string
    allowResize?: boolean
}

const TableContext = React.createContext<TableProps>({
    allowResize: false
})

const useTableContext = () => React.useContext(TableContext)

const Table = ({ children, className, ...props }: TableProps) => (
    <TableContext.Provider value={props}>
        <div className='relative w-full overflow-auto'>
            {props.allowResize ? (
                <ResizableTableContainer className='overflow-auto'>
                    <TablePrimitive {...props} className={root({ className })}>
                        {children}
                    </TablePrimitive>
                </ResizableTableContainer>
            ) : (
                <TablePrimitive {...props} className={root({ className })}>
                    {children}
                </TablePrimitive>
            )}
        </div>
    </TableContext.Provider>
)

const ColumnResizer = ({ className, ...props }: ColumnResizerProps) => (
    <ColumnResizerPrimitive
        {...props}
        className={cr(className, (className, renderProps) =>
            columnResizer({
                ...renderProps,
                className
            })
        )}
    >
        <div className='bg-border h-full w-px py-3' />
    </ColumnResizerPrimitive>
)

const TableBody = <T extends object>(props: TableBodyProps<T>) => (
    <TableBodyPrimitive
        data-slot='table-body'
        {...props}
        className={cn('[&_.tr:last-child]:border-0')}
    />
)

interface TableCellProps extends CellProps {
    className?: string
}

const cellStyles = tv({
    base: 'group px-3 py-3 whitespace-nowrap outline-hidden',
    variants: {
        allowResize: {
            true: 'truncate overflow-hidden'
        }
    }
})
const TableCell = ({ children, className, ...props }: TableCellProps) => {
    const { allowResize } = useTableContext()
    return (
        <Cell data-slot='table-cell' {...props} className={cellStyles({ allowResize, className })}>
            {children}
        </Cell>
    )
}

const columnStyles = tv({
    base: 'allows-sorting:cursor-pointer relative px-3 py-3 text-left font-medium whitespace-nowrap outline-hidden data-dragging:cursor-grabbing [&:has([slot=selection])]:pr-0',
    variants: {
        isResizable: {
            true: 'truncate overflow-hidden'
        }
    }
})

interface TableColumnProps extends ColumnProps {
    className?: string
    isResizable?: boolean
}

const TableColumn = ({ isResizable = false, className, ...props }: TableColumnProps) => {
    return (
        <Column
            data-slot='table-column'
            {...props}
            className={columnStyles({
                isResizable,
                className
            })}
        >
            {({ allowsSorting, sortDirection, isHovered }) => (
                <div className='flex items-center gap-2 **:data-[slot=icon]:shrink-0'>
                    <>
                        {props.children as React.ReactNode}
                        {allowsSorting && (
                            <span
                                className={cellIcon({
                                    className: isHovered ? 'bg-muted-fg/10' : ''
                                })}
                            >
                                <IconChevronDown
                                    className={sortDirection === 'ascending' ? 'rotate-180' : ''}
                                />
                            </span>
                        )}
                        {isResizable && <ColumnResizer />}
                    </>
                </div>
            )}
        </Column>
    )
}

interface TableHeaderProps<T extends object> extends HeaderProps<T> {
    className?: string
    ref?: React.Ref<HTMLTableSectionElement>
}

const TableHeader = <T extends object>({
    children,
    ref,
    className,
    columns,
    ...props
}: TableHeaderProps<T>) => {
    const { selectionBehavior, selectionMode, allowsDragging } = useTableOptions()
    return (
        <TableHeaderPrimitive
            data-slot='table-header'
            ref={ref}
            className={header({ className })}
            {...props}
        >
            {allowsDragging && <Column className='w-0' />}
            {selectionBehavior === 'toggle' && (
                <Column className='w-0 pl-4'>
                    {selectionMode === 'multiple' && <Checkbox slot='selection' />}
                </Column>
            )}
            <Collection items={columns}>{children}</Collection>
        </TableHeaderPrimitive>
    )
}

interface TableRowProps<T extends object> extends RowProps<T> {
    className?: string
    ref?: React.Ref<HTMLTableRowElement>
}

const TableRow = <T extends object>({
    children,
    className,
    columns,
    id,
    ref,
    ...props
}: TableRowProps<T>) => {
    const { selectionBehavior, allowsDragging } = useTableOptions()
    return (
        <Row
            ref={ref}
            data-slot='table-row'
            id={id}
            {...props}
            className={row({
                className:
                    'href' in props
                        ? cn(
                              'data-hovered:bg-primary/10 data-hovered:text-primary cursor-pointer',
                              className
                          )
                        : ''
            })}
        >
            {allowsDragging && (
                <Cell className='group ring-primary cursor-grab pr-0 data-dragging:cursor-grabbing'>
                    <Button
                        className='text-muted-fg data-pressed:text-fg relative bg-transparent py-1.5 pl-3.5'
                        slot='drag'
                    >
                        <IconMenu />
                    </Button>
                </Cell>
            )}
            {selectionBehavior === 'toggle' && (
                <Cell className='pl-4'>
                    <span
                        aria-hidden
                        className='bg-primary absolute inset-y-0 left-0 hidden h-full w-0.5 group-data-selected:block'
                    />
                    <Checkbox slot='selection' />
                </Cell>
            )}
            <Collection items={columns}>{children}</Collection>
        </Row>
    )
}
const TableEmpty = () => (
    <div className='grid place-content-center p-10'>
        <span className='text-muted-foreground'>No results.</span>
    </div>
)

const TableLoading = () => (
    <div className='grid place-content-center p-10'>
        <IconLoaderCircle className='animate-spin' />
    </div>
)
Table.Body = TableBody
Table.Cell = TableCell
Table.Column = TableColumn
Table.Header = TableHeader
Table.Row = TableRow

Table.Empty = TableEmpty
Table.Loading = TableLoading

export { Table }
export type { TableBodyProps, TableCellProps, TableColumnProps, TableProps, TableRowProps }
