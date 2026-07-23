"use client"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Table } from "@/components/ui/table"

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
      <Card.Header>
        <Card.Title>Invoice #INV-2847</Card.Title>
        <Card.Description>Due March 30, 2026</Card.Description>
        <Card.Action>
          <Badge variant="secondary">Pending</Badge>
        </Card.Action>
      </Card.Header>
      <Card.Content>
        <Table>
          <Table.Header>
            <Table.Column isRowHeader>Item</Table.Column>
            <Table.Column className="text-right">Qty</Table.Column>
            <Table.Column className="text-right">Rate</Table.Column>
            <Table.Column className="text-right">Amount</Table.Column>
          </Table.Header>
          <Table.Body>
            {INVOICE_ITEMS.map((row) => (
              <Table.Row key={row.item}>
                <Table.Cell>{row.item}</Table.Cell>
                <Table.Cell className="text-right tabular-nums">{row.qty}</Table.Cell>
                <Table.Cell className="text-right tabular-nums">{formatCurrency(row.unitPrice)}</Table.Cell>
                <Table.Cell className="text-right tabular-nums">{formatCurrency(row.qty * row.unitPrice)}</Table.Cell>
              </Table.Row>
            ))}
            <Table.Row>
              <Table.Cell className="text-right" colSpan={3}>
                Subtotal
              </Table.Cell>
              <Table.Cell className="text-right tabular-nums">{formatCurrency(subtotal)}</Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell className="text-right" colSpan={3}>
                Tax
              </Table.Cell>
              <Table.Cell className="text-right tabular-nums">$0.00</Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell className="text-right" colSpan={3}>
                Total Due
              </Table.Cell>
              <Table.Cell className="text-right tabular-nums">{formatCurrency(totalDue)}</Table.Cell>
            </Table.Row>
          </Table.Body>
        </Table>
      </Card.Content>
      <Card.Footer>
        <Button size="sm" variant="outline">
          Download PDF
        </Button>
        <Button className="ml-auto" size="sm">
          Pay Now
        </Button>
      </Card.Footer>
    </Card>
  )
}
