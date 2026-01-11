'use client'

import { getLocalTimeZone, parseDate, startOfYear, today } from '@internationalized/date'
import { useState } from 'react'
import { Form } from 'react-aria-components'
import { Button } from '@/components/ui/button'
import { Calendar } from '@/components/ui/calendar'
import { DatePicker, DatePickerInput } from '@/components/ui/date-field'
import { FieldError } from '@/components/ui/field'
import { Label } from '@/components/ui/label'
import { PopoverContent } from '@/components/ui/popover'

export default function DatePickerCustomValidation() {
  const ly = startOfYear(today(getLocalTimeZone()))
  const now = today(getLocalTimeZone())
  const [value, setValue] = useState(parseDate(ly.toString()))
  return (
    <Form className='space-y-2' onSubmit={(e) => e.preventDefault()}>
      <DatePicker
        onChange={(newValue) => setValue(newValue!)}
        validate={(date) => (date < now ? 'Select a future date, please.' : null)}
        value={value}
      >
        <Label>Delivery date</Label>
        <DatePickerInput />
        <PopoverContent className='w-auto p-0'>
          <Calendar />
        </PopoverContent>
        <FieldError />
      </DatePicker>

      <Button type='submit'>Submit</Button>
    </Form>
  )
}
