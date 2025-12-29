'use client'

import { Calendar } from '@/components/ui/calendar'
import { DatePickerInput } from '@/components/ui/date-input'
import { DatePicker } from '@/components/ui/field'
import { Label } from '@/components/ui/label'
import { PopoverContent } from '@/components/ui/popover'

export default function DatePickerDemo() {
  return (
    <DatePicker>
      <Label>Event Date</Label>
      <DatePickerInput />
      <PopoverContent className='w-auto p-0'>
        <Calendar />
      </PopoverContent>
    </DatePicker>
  )
}
