'use client'

import { getLocalTimeZone, parseDate, today } from '@internationalized/date'
import { DateInput } from '@/components/ui/date-input'
import { DateField } from '@/components/ui/field'
import { Label } from '@/components/ui/label'

export default function DateFieldUncontrolled() {
  const now = today(getLocalTimeZone())
  return (
    <DateField defaultValue={parseDate(now.toString())}>
      <Label>Event date</Label>
      <DateInput />
    </DateField>
  )
}
