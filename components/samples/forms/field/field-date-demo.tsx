'use client'

import { Form } from 'react-aria-components'
import { Button } from '@/components/ui/button'
import { Calendar, RangeCalendar } from '@/components/ui/calendar'
import {
  DateField,
  DateInput,
  DatePicker,
  DatePickerInput,
  DateRangePicker,
  DateRangePickerInput,
  TimeField
} from '@/components/ui/date-field'
import { FieldError } from '@/components/ui/field'
import { Label } from '@/components/ui/label'
import { PopoverContent } from '@/components/ui/popover'

export default function FieldDateDemo() {
  return (
    <Form className='w-full space-y-4' onSubmit={(e) => e.preventDefault()}>
      <DateField isRequired>
        <Label>DOB</Label>
        <DateInput />
        <FieldError />
      </DateField>
      <DatePicker>
        <Label>Event Date</Label>
        <DatePickerInput />
        <FieldError />
        <PopoverContent className='w-auto p-0'>
          <Calendar />
        </PopoverContent>
      </DatePicker>
      <DateRangePicker>
        <Label>Event Date</Label>
        <DateRangePickerInput />
        <FieldError />
        <PopoverContent className='w-auto p-0'>
          <RangeCalendar />
        </PopoverContent>
      </DateRangePicker>
      <TimeField>
        <Label>Event time</Label>
        <DateInput />
      </TimeField>
      <Button type='submit'>Submit</Button>
    </Form>
  )
}
