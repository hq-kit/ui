"use client"

import { useState } from "react"
import { Badge } from "@/components/ui/badge"
import { Calendar } from "@/components/ui/calendar"
import { Card } from "@/components/ui/card"
import { getLocalTimeZone, today } from "@/components/ui/date-field"
import { Item } from "@/components/ui/item"

export function UpcomingPayments() {
  const now = today(getLocalTimeZone())
  const [date, setDate] = useState(now)

  return (
    <Card>
      <Card.Header>
        <Card.Title>Upcoming Payments</Card.Title>
        <Card.Description>Select a date to view scheduled payments.</Card.Description>
      </Card.Header>
      <Card.Content className="flex flex-col gap-4">
        <Item className="justify-center" variant="outline">
          <Calendar
            className="w-full [--cell-size:--spacing(8)] md:[--cell-size:--spacing(10)] style-sera:md:[--cell-size:--spacing(9)]"
            onChange={setDate}
            selectionMode="single"
            value={date}
          />
        </Item>
        <Item.Group className="w-full">
          <Item variant="muted">
            <Item.Content>
              <Item.Title>Netflix Subscription</Item.Title>
              <Item.Description>Apr 15, 2024</Item.Description>
            </Item.Content>
            <Badge variant="secondary">$19.99</Badge>
          </Item>
          <Item variant="muted">
            <Item.Content>
              <Item.Title>Rent Payment</Item.Title>
              <Item.Description>Apr 1, 2024</Item.Description>
            </Item.Content>
            <Badge variant="secondary">$2,400.00</Badge>
          </Item>
          <Item variant="muted">
            <Item.Content>
              <Item.Title>Auto Insurance</Item.Title>
              <Item.Description>Apr 22, 2024</Item.Description>
            </Item.Content>
            <Badge variant="secondary">$186.00</Badge>
          </Item>
        </Item.Group>
      </Card.Content>
    </Card>
  )
}
