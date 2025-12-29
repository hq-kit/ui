'use client'

import { getLocalTimeZone, today } from '@internationalized/date'
import { useState } from 'react'
import { RangeCalendar } from '@/components/ui/calendar'
import { DateRangePickerInput } from '@/components/ui/date-input'
import { DateRangePicker } from '@/components/ui/field'
import { Label } from '@/components/ui/label'
import { PopoverContent } from '@/components/ui/popover'

export default function DateRangePickerControlled() {
  const now = today(getLocalTimeZone())
  const tomorrowWeek = today(getLocalTimeZone()).add({ days: 12 })
  const [value, setValue] = useState({
    start: now,
    end: tomorrowWeek
  })

  return (
    <DateRangePicker onChange={(newValue) => setValue(newValue!)} value={value}>
      <Label>Event date</Label>
      <DateRangePickerInput />
      <PopoverContent className='w-auto p-0'>
        <RangeCalendar visibleDuration={{ months: 2 }} />
      </PopoverContent>
    </DateRangePicker>
  )
}
