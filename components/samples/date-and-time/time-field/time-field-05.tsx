'use client'

import { getLocalTimeZone, now, parseZonedDateTime } from '@internationalized/date'
import { DateInput, TimeField } from '@/components/ui/date-field'
import { Label } from '@/components/ui/label'

export default function TimeFieldUncontrolled() {
  const today = parseZonedDateTime(now(getLocalTimeZone()).toString())
  return (
    <TimeField defaultValue={today}>
      <Label>Event time</Label>
      <DateInput />
    </TimeField>
  )
}
