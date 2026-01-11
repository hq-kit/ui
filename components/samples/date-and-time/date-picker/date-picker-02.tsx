'use client'

import { getLocalTimeZone, now, parseZonedDateTime } from '@internationalized/date'
import { useState } from 'react'
import { Calendar } from '@/components/ui/calendar'
import { DatePicker, DatePickerInput } from '@/components/ui/date-field'
import { Label } from '@/components/ui/label'
import { PopoverContent } from '@/components/ui/popover'

export default function DateTimePickerDemo() {
  const today = parseZonedDateTime(now(getLocalTimeZone()).toString())
  const [value, setValue] = useState(today)

  return (
    <DatePicker hideTimeZone hourCycle={24} onChange={(newValue) => setValue(newValue!)} value={value}>
      <Label>Event date</Label>
      <DatePickerInput />
      <PopoverContent className='w-auto p-0'>
        <Calendar />
      </PopoverContent>
    </DatePicker>
  )
}
