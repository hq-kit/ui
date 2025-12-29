'use client'

import { DateInput } from '@/components/ui/date-input'
import { TimeField } from '@/components/ui/field'
import { Label } from '@/components/ui/label'

export default function TimeFieldDemo() {
  return (
    <TimeField>
      <Label>Event time</Label>
      <DateInput />
    </TimeField>
  )
}
