'use client'

import { getLocalTimeZone, today } from '@internationalized/date'
import { Calendar } from '@/components/ui/calendar'
import { DatePicker, DatePickerInput } from '@/components/ui/date-field'
import { Label } from '@/components/ui/label'
import { PopoverContent } from '@/components/ui/popover'

export default function DatePickerUncontrolled() {
  const now = today(getLocalTimeZone())

  return (
    <DatePicker defaultValue={now}>
      <Label>Event date</Label>
      <DatePickerInput />
      <PopoverContent className='w-auto p-0'>
        <Calendar />
      </PopoverContent>
    </DatePicker>
  )
}
