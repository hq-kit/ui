'use client'

import { getLocalTimeZone, parseDate, today } from '@internationalized/date'
import { useDateFormatter } from '@react-aria/i18n'
import { useState } from 'react'
import { Calendar } from '@/components/ui/calendar'
import { DatePicker, DatePickerInput } from '@/components/ui/date-field'
import { Label } from '@/components/ui/label'
import { PopoverContent } from '@/components/ui/popover'

export default function DatePickerControlled() {
  const now = today(getLocalTimeZone())

  const [value, setValue] = useState(parseDate(now.toString()))

  const formatter = useDateFormatter({ dateStyle: 'full' })

  return (
    <div className='space-y-3'>
      <div className='divide-y [&_p]:py-2'>
        <p>{value ? formatter.format(value.toDate(getLocalTimeZone())) : '--'}</p>
        <p>{value ? value.toString() : '--'}</p>
      </div>
      <DatePicker onChange={(newValue) => setValue(newValue!)} value={value}>
        <Label>Event date</Label>
        <DatePickerInput />
        <PopoverContent className='w-auto p-0'>
          <Calendar />
        </PopoverContent>
      </DatePicker>
    </div>
  )
}
