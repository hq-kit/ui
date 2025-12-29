'use client'

import { Form } from 'react-aria-components'
import { Button } from '@/components/ui/button'
import { RangeCalendar } from '@/components/ui/calendar'
import { DateRangePickerInput } from '@/components/ui/date-input'
import { DateRangePicker, FieldError } from '@/components/ui/field'
import { Label } from '@/components/ui/label'
import { PopoverContent } from '@/components/ui/popover'

export default function DateRangePickerValidation() {
  return (
    <Form className='space-y-3' onSubmit={(e) => e.preventDefault()}>
      <DateRangePicker isRequired>
        <Label>Event date</Label>
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
