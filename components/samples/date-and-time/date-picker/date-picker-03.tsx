'use client'

import { Form } from 'react-aria-components'
import { Button } from '@/components/ui/button'
import { Calendar } from '@/components/ui/calendar'
import { DatePicker, DatePickerInput } from '@/components/ui/date-field'
import { FieldError } from '@/components/ui/field'
import { Label } from '@/components/ui/label'
import { PopoverContent } from '@/components/ui/popover'

export default function DatePickerValidation() {
  return (
    <Form className='space-y-3' onSubmit={(e) => e.preventDefault()}>
      <DatePicker isRequired>
        <Label>Event date</Label>
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
