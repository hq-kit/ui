'use client'

import { getLocalTimeZone, today } from '@internationalized/date'
import { useState } from 'react'
import { Form } from 'react-aria-components'
import { Button } from '@/components/ui/button'
import { RangeCalendar } from '@/components/ui/calendar'
import { DateRangePicker, DateRangePickerInput } from '@/components/ui/date-field'
import { FieldError } from '@/components/ui/field'
import { Label } from '@/components/ui/label'
import { PopoverContent } from '@/components/ui/popover'

export default function DateRangePickerCustomValidation() {
  const now = today(getLocalTimeZone())
  const tomorrowWeek = today(getLocalTimeZone()).add({ days: 12 })
  const [value, setValue] = useState({
    start: now,
    end: tomorrowWeek
  })
  return (
    <Form className='space-y-2' onSubmit={(e) => e.preventDefault()}>
      <DateRangePicker
        defaultValue={{
          start: today(getLocalTimeZone()),
          end: today(getLocalTimeZone()).add({ weeks: 2 })
        }}
        onChange={(newValue) => setValue(newValue!)}
        validate={(range) => (range?.end.compare(range.start) > 7 ? 'Maximum booking duration is 1 week.' : null)}
        value={value}
      >
        <Label>Delivery date</Label>
        <DateRangePickerInput />
        <PopoverContent className='w-auto p-0'>
          <RangeCalendar />
        </PopoverContent>
        <FieldError />
      </DateRangePicker>

      <Button type='submit'>Submit</Button>
    </Form>
  )
}
