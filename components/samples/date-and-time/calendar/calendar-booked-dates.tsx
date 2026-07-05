"use client"

import { getLocalTimeZone, today } from "@internationalized/date"
import { Calendar } from "@/components/ui/calendar"
import { Card, CardContent } from "@/components/ui/card"

export default function CalendarBookedDates() {
  const now = today(getLocalTimeZone())
  const disabledRanges = [
    [now, now.add({ days: 5 })],
    [now.add({ days: 14 }), now.add({ days: 16 })],
    [now.add({ days: 23 }), now.add({ days: 24 })]
  ]

  return (
    <Card className="mx-auto w-fit p-0">
      <CardContent className="p-0">
        <Calendar
          defaultFocusedValue={now}
          isDateUnavailable={(date) =>
            disabledRanges.some(([start, end]) => date.compare(start) >= 0 && date.compare(end) <= 0)
          }
        />
      </CardContent>
    </Card>
  )
}
