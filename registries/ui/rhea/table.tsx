"use client"

import { createContext, type Ref, use } from "react"
import { composeRenderProps } from "react-aria-components/composeRenderProps"
import {
  Button,
  Cell,
  type CellProps,
  Collection,
  Column,
  type ColumnProps,
  type ColumnResizerProps,
  type TableHeaderProps as HeaderProps,
  ColumnResizer as RACColumnResizer,
  Table as RACTable,
  TableBody as RACTableBody,
  TableHeader as RACTableHeader,
  type TableProps as RACTableProps,
  ResizableTableContainer,
  Row,
  type RowProps,
  type TableBodyProps,
  useTableOptions
} from "react-aria-components/Table"
import { IconPlaceholder } from "@/components/icon-placeholder"
import { cn } from "@/lib/utils"
import { Checkbox } from "./checkbox"

interface TableProps extends Omit<RACTableProps, "className"> {
  allowResize?: boolean
  className?: string
  ref?: Ref<HTMLTableElement>
}

const TableContext = createContext<TableProps>({
  allowResize: false
})

const Root = ({ className, ...props }: TableProps) => (
  <RACTable className={composeRenderProps(className, (className) => cn("w-full caption-bottom text-sm", className))} {...props} />
)

const Table = ({ allowResize, className, ref, ...props }: TableProps) => {
  return (
    <TableContext.Provider value={{ allowResize }}>
      <div
        className={cn(
          "relative w-full overflow-x-auto has-data-[slot=table-resizable-container]:overflow-auto",
          "[&_.react-aria-DropIndicator[data-drop-target]]:outline",
          "[&_.react-aria-DropIndicator[data-drop-target]]:outline-destructive",
          "[&_.react-aria-DropIndicator[data-drop-target]]:transform-[translateZ(0)]",
          className
        )}
        data-slot="table-container"
      >
        {allowResize ? (
          <ResizableTableContainer data-slot="table-resizable-container">
            <Root ref={ref} {...props} />
          </ResizableTableContainer>
        ) : (
          <Root {...props} ref={ref} />
        )}
      </div>
    </TableContext.Provider>
  )
}

const ColumnResizer = ({ className, ...props }: ColumnResizerProps) => (
  <RACColumnResizer
    {...props}
    className={composeRenderProps(className, (className) =>
      cn(
        "absolute top-0 right-0 bottom-0 z-10 my-2 grid w-px &[data-resizable-direction=left]:cursor-e-resize &[data-resizable-direction=right]:cursor-w-resize touch-none place-content-center border-l px-1 data-[resizable-direction=both]:cursor-ew-resize data-resizing:border-l-primary",
        className
      )
    )}
  />
)

const TableBody = <T extends object>({ className, ...props }: TableBodyProps<T>) => (
  <RACTableBody
    className={composeRenderProps(className, (className) => cn("[&_tr:last-child]:border-0", className))}
    data-slot="table-body"
    {...props}
  />
)

const TableColumn = ({ isResizable = false, className, ...props }: ColumnProps & { isResizable?: boolean }) => {
  return (
    <Column
      data-slot="table-head"
      {...props}
      className={composeRenderProps(className, (className) =>
        cn(
          "text-foreground h-10 px-2 text-left align-middle font-medium whitespace-nowrap has-[slot=selection]:pr-0 relative",
          "outline-hidden data-[allows-sorting=true]:cursor-default data-dragging:cursor-grabbing",
          isResizable && "overflow-hidden truncate",
          className
        )
      )}
    >
      {(values) => (
        <div className={cn(["inline-flex items-center gap-2 **:[svg]:shrink-0"])}>
          {typeof props.children === "function" ? props.children(values) : props.children}
          {values.allowsSorting && (
            <span
              className={cn(
                "grid size-[1.15rem] flex-none shrink-0 place-content-center rounded bg-secondary text-foreground *:[svg]:size-3.5 *:[svg]:shrink-0 *:[svg]:transition-transform *:[svg]:duration-200",
                values.isHovered ? "bg-secondary-foreground/10" : ""
              )}
            >
              <IconPlaceholder
                className={values.sortDirection === "ascending" ? "rotate-180" : ""}
                hugeicons="ArrowDown01Icon"
                lucide="ChevronDownIcon"
                phosphor="CaretDownIcon"
                remixicon="RiArrowDownSLine"
                tabler="IconChevronDown"
              />
            </span>
          )}
          {isResizable && <ColumnResizer />}
        </div>
      )}
    </Column>
  )
}

interface TableHeaderProps<T extends object> extends HeaderProps<T> {
  ref?: Ref<HTMLTableSectionElement>
}

const TableHeader = <T extends object>({ children, ref, columns, className, ...props }: TableHeaderProps<T>) => {
  const { selectionBehavior, selectionMode, allowsDragging } = useTableOptions()
  return (
    <RACTableHeader
      className={composeRenderProps(className, (className) => cn("[&_tr]:border-b", className))}
      data-slot="table-header"
      ref={ref}
      {...props}
    >
      {allowsDragging && <TableColumn className="w-8" />}
      {selectionBehavior === "toggle" && selectionMode === "multiple" && (
        <TableColumn className="w-8">
          <Checkbox slot="selection" />
        </TableColumn>
      )}
      <Collection items={columns}>{children}</Collection>
    </RACTableHeader>
  )
}

interface TableRowProps<T extends object> extends RowProps<T> {
  ref?: Ref<HTMLTableRowElement>
}

const TableRow = <T extends object>({ children, className, columns, ref, ...props }: TableRowProps<T>) => {
  const { selectionBehavior, allowsDragging } = useTableOptions()
  return (
    <Row
      data-slot="table-row"
      ref={ref}
      {...props}
      className={composeRenderProps(className, (className) =>
        cn(
          "hover:bg-muted/50 data-selected:bg-muted border-b transition-colors group relative cursor-default outline outline-transparent has-aria-expanded:bg-muted/50",
          "data-dragging:cursor-grabbing data-disabled:opacity-50 data-dragging:outline-primary",
          "data-drop-target:outline-primary",
          className
        )
      )}
    >
      {allowsDragging && (
        <TableCell>
          <Button
            className="flex items-center justify-center rounded-xs outline-hidden focus-visible:ring focus-visible:ring-ring"
            slot="drag"
          >
            <IconPlaceholder
              className="size-4"
              hugeicons="GripVerticalIcon"
              lucide="GripVerticalIcon"
              phosphor="DotsSixVerticalIcon"
              remixicon="RiDraggable"
              slot="selection"
              tabler="IconGripVertical"
            />
          </Button>
        </TableCell>
      )}
      {selectionBehavior === "toggle" && (
        <TableCell>
          <Checkbox slot="selection" />
        </TableCell>
      )}
      <Collection items={columns}>{children}</Collection>
    </Row>
  )
}

interface TableCellProps extends CellProps {
  ref?: Ref<HTMLTableCellElement>
}
const TableCell = ({ className, ref, ...props }: TableCellProps) => {
  const { allowResize } = use(TableContext)
  return (
    <Cell
      {...props}
      className={composeRenderProps(className, (className) =>
        cn("p-2 align-middle whitespace-nowrap has-[slot=selection]:pr-0 outline outline-transparent", allowResize && "overflow-hidden truncate", className)
      )}
      data-slot="table-cell"
      ref={ref}
      style={({ hasChildItems, isTreeColumn, level }) => ({
        paddingInlineStart: isTreeColumn ? (hasChildItems ? 0 : 6) + (level - 1) * 22 : undefined
      })}
    >
      {(values) => {
        const children = typeof props.children === "function" ? props.children(values) : props.children
        return values.isTreeColumn && values.hasChildItems ? (
          <Button
            className="flex shrink-0 items-center gap-1 rounded px-2 text-foreground hover:bg-secondary"
            slot="chevron"
          >
            <IconPlaceholder
              className="size-3.5 in-data-expanded:rotate-90 transition-transform"
              hugeicons="ArrowRight01Icon"
              lucide="ChevronRightIcon"
              phosphor="CaretRightIcon"
              remixicon="RiArrowRightSLine"
              tabler="IconChevronRight"
            />
            {children}
          </Button>
        ) : (
          children
        )
      }}
    </Cell>
  )
}

const TableFooter = ({ className, ...props }: React.ComponentProps<"tfoot">) => (
  <tfoot className={cn("bg-muted/50 border-t font-medium [&>tr]:last:border-b-0", className)} data-slot="table-footer" {...props} />
)

const TableCaption = ({ className, ...props }: React.ComponentProps<"caption">) => (
  <caption className={cn("text-muted-foreground mt-4 text-sm", className)} data-slot="table-caption" {...props} />
)

Table.Header = TableHeader
Table.Body = TableBody
Table.Column = TableColumn
Table.Cell = TableCell
Table.Row = TableRow
Table.Footer = TableFooter
Table.Caption = TableCaption

export { Table, TableBody, TableCaption, TableCell, TableColumn, TableFooter, TableHeader, TableRow }
