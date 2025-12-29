'use client'

import { DateInput } from '@/components/ui/date-input'
import { DateField } from '@/components/ui/field'
import { Label } from '@/components/ui/label'

export default function DateFieldDemo() {
  return (
    <DateField>
      <Label>Event date</Label>
      <DateInput />
    </DateField>
  )
}
