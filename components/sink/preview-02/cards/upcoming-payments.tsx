"use client"

import type { DateValue } from "react-aria-components/Calendar"
import { getLocalTimeZone, today } from "@internationalized/date"
import { useState } from "react"
import { Badge } from "@/components/ui/badge"
import { Calendar } from "@/components/ui/calendar"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Item, ItemContent, ItemDescription, ItemGroup, ItemTitle } from "@/components/ui/item"

export function UpcomingPayments() {
  const now = today(getLocalTimeZone())
  const [date, setDate] = useState<DateValue>(now)

  return (
    <Card>
      <CardHeader>
        <CardTitle>Upcoming Payments</CardTitle>
        <CardDescription>Select a date to view scheduled payments.</CardDescription>
      </CardHeader>
      <CardContent className="flex flex-col gap-4">
        <Item className="justify-center" variant="outline">
          <Calendar
            className="w-full [--cell-size:--spacing(8)] md:[--cell-size:--spacing(10)] style-sera:md:[--cell-size:--spacing(9)]"
            onChange={setDate}
            selectionMode="single"
            value={date}
          />
        </Item>
        <ItemGroup className="w-full">
          <Item variant="muted">
            <ItemContent>
              <ItemTitle>Netflix Subscription</ItemTitle>
              <ItemDescription>Apr 15, 2024</ItemDescription>
            </ItemContent>
            <Badge variant="secondary">$19.99</Badge>
          </Item>
          <Item variant="muted">
            <ItemContent>
              <ItemTitle>Rent Payment</ItemTitle>
              <ItemDescription>Apr 1, 2024</ItemDescription>
            </ItemContent>
            <Badge variant="secondary">$2,400.00</Badge>
          </Item>
          <Item variant="muted">
            <ItemContent>
              <ItemTitle>Auto Insurance</ItemTitle>
              <ItemDescription>Apr 22, 2024</ItemDescription>
            </ItemContent>
            <Badge variant="secondary">$186.00</Badge>
          </Item>
        </ItemGroup>
      </CardContent>
    </Card>
  )
}
