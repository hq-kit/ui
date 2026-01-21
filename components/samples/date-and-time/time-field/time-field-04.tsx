'use client'

import { Time } from '@internationalized/date'
import { useState } from 'react'
import { DateInput, TimeField } from '@/components/ui/date-field'
import { Label } from '@/components/ui/label'

export default function TimeFieldControlled() {
  const [value, setValue] = useState(new Time(11, 45))

  return (
    <div className='space-y-3'>
      <div className='divide-y [&_p]:py-2'>
        <p>{value ? value.toString() : '--'}</p>
      </div>
      <TimeField onChange={(newValue) => setValue(newValue!)} value={value}>
        <Label>Event time</Label>
        <DateInput />
      </TimeField>
    </div>
  )
}
