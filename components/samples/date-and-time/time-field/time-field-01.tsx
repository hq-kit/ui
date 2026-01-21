'use client'

import { DateInput, TimeField } from '@/components/ui/date-field'
import { Label } from '@/components/ui/label'

export default function TimeFieldDemo() {
  return (
    <TimeField>
      <Label>Event time</Label>
      <DateInput />
    </TimeField>
  )
}
