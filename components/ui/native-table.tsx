import { cn } from "@/lib/utils"

const Table = ({ className, ...props }: React.ComponentProps<"table">) => (
  <div className="cn-table-container" data-slot="table-container">
    <table className={cn("cn-table", className)} data-slot="table" {...props} />
  </div>
)

const TableHeader = ({ className, ...props }: React.ComponentProps<"thead">) => (
  <thead className={cn("cn-table-header", className)} data-slot="table-header" {...props} />
)

const TableBody = ({ className, ...props }: React.ComponentProps<"tbody">) => (
  <tbody className={cn("cn-table-body", className)} data-slot="table-body" {...props} />
)

const TableFooter = ({ className, ...props }: React.ComponentProps<"tfoot">) => (
  <tfoot className={cn("cn-table-footer", className)} data-slot="table-footer" {...props} />
)

const TableRow = ({ className, ...props }: React.ComponentProps<"tr">) => (
  <tr className={cn("cn-table-row has-aria-expanded:bg-muted/50", className)} data-slot="table-row" {...props} />
)

const TableHead = ({ className, ...props }: React.ComponentProps<"th">) => (
  <th className={cn("cn-table-head", className)} data-slot="table-head" {...props} />
)

const TableCell = ({ className, ...props }: React.ComponentProps<"td">) => (
  <td className={cn("cn-table-cell", className)} data-slot="table-cell" {...props} />
)

const TableCaption = ({ className, ...props }: React.ComponentProps<"caption">) => (
  <caption className={cn("cn-table-caption", className)} data-slot="table-caption" {...props} />
)

Table.Header = TableHeader
Table.Body = TableBody
Table.Cell = TableCell
Table.Row = TableRow
Table.Footer = TableFooter
Table.Caption = TableCaption

export { Table, TableBody, TableCaption, TableCell, TableFooter, TableHead, TableHeader, TableRow }
