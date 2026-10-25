"use client"

import type { CalendarDate } from "@internationalized/date"
import { getLocalTimeZone, parseDate, today } from "@internationalized/date"
import { useState } from "react"
import { useDateFormatter } from "react-aria/useDateFormatter"
import { DateField, DateInput } from "@/components/ui/date-field"
import { Label } from "@/components/ui/field"

export default function DateFieldControlled() {
  const now = today(getLocalTimeZone())
  const [value, setValue] = useState<CalendarDate>(parseDate(now.toString()))

  const formatter = useDateFormatter({ dateStyle: "full" })

  return (
    <div className="space-y-3">
      <div className="divide-y [&_p]:py-2">
        <p>{value ? formatter.format(value.toDate(getLocalTimeZone())) : "--"}</p>
        <p>{value ? value.toString() : "--"}</p>
      </div>
      <DateField onChange={(newValue) => setValue(newValue!)} value={value}>
        <Label>Event date</Label>
        <DateInput />
      </DateField>
    </div>
  )
}
