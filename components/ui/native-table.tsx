import type { ComponentProps } from "react"
import { cn } from "@/lib/utils"

const Table = ({ className, ...props }: ComponentProps<"table">) => (
  <div className="cn-table-container" data-slot="table-container">
    <table className={cn("cn-table", className)} data-slot="table" {...props} />
  </div>
)

const TableHeader = ({ className, ...props }: ComponentProps<"thead">) => (
  <thead className={cn("cn-table-header", className)} data-slot="table-header" {...props} />
)

const TableBody = ({ className, ...props }: ComponentProps<"tbody">) => (
  <tbody className={cn("cn-table-body", className)} data-slot="table-body" {...props} />
)

const TableFooter = ({ className, ...props }: ComponentProps<"tfoot">) => (
  <tfoot className={cn("cn-table-footer", className)} data-slot="table-footer" {...props} />
)

const TableRow = ({ className, ...props }: ComponentProps<"tr">) => (
  <tr className={cn("cn-table-row has-aria-expanded:bg-muted/50", className)} data-slot="table-row" {...props} />
)

const TableHead = ({ className, ...props }: ComponentProps<"th">) => (
  <th className={cn("cn-table-head", className)} data-slot="table-head" {...props} />
)

const TableCell = ({ className, ...props }: ComponentProps<"td">) => (
  <td className={cn("cn-table-cell", className)} data-slot="table-cell" {...props} />
)

const TableCaption = ({ className, ...props }: ComponentProps<"caption">) => (
  <caption className={cn("cn-table-caption", className)} data-slot="table-caption" {...props} />
)

Table.Header = TableHeader
Table.Body = TableBody
Table.Cell = TableCell
Table.Row = TableRow
Table.Footer = TableFooter
Table.Caption = TableCaption

export { Table, TableBody, TableCaption, TableCell, TableFooter, TableHead, TableHeader, TableRow }
