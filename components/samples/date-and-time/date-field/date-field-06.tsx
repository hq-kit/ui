'use client'

import { type CalendarDate, parseDate } from '@internationalized/date'
import { useState } from 'react'
import { DateInput } from '@/components/ui/date-input'
import { DateField } from '@/components/ui/field'
import { Label } from '@/components/ui/label'

export default function DateParser() {
  const [date, setDate] = useState<CalendarDate | null>(parseDate('1999-01-10'))

  return (
    <DateField onChange={(e) => setDate(e!)} value={date}>
      <Label>Birth date</Label>
      <DateInput />
    </DateField>
  )
}
