'use client'

import { getLocalTimeZone, now, parseZonedDateTime } from '@internationalized/date'
import { useState } from 'react'
import { DateInput, TimeField } from '@/components/ui/date-field'
import { Label } from '@/components/ui/label'

export default function TimeFieldDemo() {
  const today = parseZonedDateTime(now(getLocalTimeZone()).toString())
  const [value, setValue] = useState(today)

  return (
    <TimeField hideTimeZone hourCycle={24} onChange={(e) => setValue(e!)} value={value}>
      <Label>Event date</Label>
      <DateInput />
    </TimeField>
  )
}
