"use client"

import type { DateValue } from "react-aria-components"
import { getLocalTimeZone, today } from "@internationalized/date"
import * as React from "react"
import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import { Card, CardContent, CardFooter } from "@/components/ui/card"

export default function CalendarWithPresets() {
  const now = today(getLocalTimeZone())
  const [date, setDate] = React.useState<DateValue>(now)

  return (
    <Card className="mx-auto w-fit max-w-75" size="sm">
      <CardContent>
        <Calendar className="p-0 [--cell-size:--spacing(9.5)]" focusedValue={date} onChange={setDate} value={date} />
      </CardContent>
      <CardFooter className="flex flex-wrap gap-2 border-t">
        {[
          { label: "Today", value: 0 },
          { label: "Tomorrow", value: 1 },
          { label: "In 3 days", value: 3 },
          { label: "In a week", value: 7 },
          { label: "In 2 weeks", value: 14 }
        ].map((preset) => (
          <Button
            className="flex-1"
            key={preset.value}
            onPress={() => {
              const newDate = now.add({ days: preset.value })
              setDate(newDate)
            }}
            size="sm"
            variant="outline"
          >
            {preset.label}
          </Button>
        ))}
      </CardFooter>
    </Card>
  )
}
