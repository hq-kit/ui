"use client"

import { Calendar } from "@/components/ui/calendar"
import { Card, CardContent } from "@/components/ui/card"

export default function CalendarCustomDays() {
  return (
    <Card className="mx-auto w-fit p-0">
      <CardContent className="p-0">
        <Calendar className="[--cell-size:--spacing(10)] md:[--cell-size:--spacing(12)]" />
      </CardContent>
    </Card>
  )
}
