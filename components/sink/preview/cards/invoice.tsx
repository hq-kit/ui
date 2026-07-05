"use client"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardAction, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableColumn, TableHeader, TableRow } from "@/components/ui/table"

const INVOICE_ITEMS = [
  { item: "Design System License", qty: 1, unitPrice: 499 },
  { item: "Priority Support", qty: 12, unitPrice: 99 },
  { item: "Custom Components", qty: 3, unitPrice: 250 }
] as const

const subtotal = INVOICE_ITEMS.reduce((sum, row) => sum + row.qty * row.unitPrice, 0)
const tax = 0
const totalDue = subtotal + tax

function formatCurrency(value: number) {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 2
  }).format(value)
}

export function Invoice() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Invoice #INV-2847</CardTitle>
        <CardDescription>Due March 30, 2026</CardDescription>
        <CardAction>
          <Badge variant="secondary">Pending</Badge>
        </CardAction>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableColumn isRowHeader>Item</TableColumn>
            <TableColumn className="text-right">Qty</TableColumn>
            <TableColumn className="text-right">Rate</TableColumn>
            <TableColumn className="text-right">Amount</TableColumn>
          </TableHeader>
          <TableBody>
            {INVOICE_ITEMS.map((row) => (
              <TableRow key={row.item}>
                <TableCell>{row.item}</TableCell>
                <TableCell className="text-right tabular-nums">{row.qty}</TableCell>
                <TableCell className="text-right tabular-nums">{formatCurrency(row.unitPrice)}</TableCell>
                <TableCell className="text-right tabular-nums">{formatCurrency(row.qty * row.unitPrice)}</TableCell>
              </TableRow>
            ))}
            <TableRow>
              <TableCell className="text-right" colSpan={3}>
                Subtotal
              </TableCell>
              <TableCell className="text-right tabular-nums">{formatCurrency(subtotal)}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="text-right" colSpan={3}>
                Tax
              </TableCell>
              <TableCell className="text-right tabular-nums">$0.00</TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="text-right" colSpan={3}>
                Total Due
              </TableCell>
              <TableCell className="text-right tabular-nums">{formatCurrency(totalDue)}</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </CardContent>
      <CardFooter>
        <Button size="sm" variant="outline">
          Download PDF
        </Button>
        <Button className="ml-auto" size="sm">
          Pay Now
        </Button>
      </CardFooter>
    </Card>
  )
}
