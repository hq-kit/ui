'use client'

import { RangeCalendar } from '@/components/ui/calendar'
import { DateRangePickerInput } from '@/components/ui/date-input'
import { DateRangePicker } from '@/components/ui/field'
import { Label } from '@/components/ui/label'
import { PopoverContent } from '@/components/ui/popover'

export default function DateRangePickerDemo() {
  return (
    <DateRangePicker>
      <Label>Event Date</Label>
      <DateRangePickerInput />
      <PopoverContent className='w-auto p-0'>
        <RangeCalendar />
      </PopoverContent>
    </DateRangePicker>
  )
}
