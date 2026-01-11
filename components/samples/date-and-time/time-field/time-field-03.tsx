'use client'

import { Form } from 'react-aria-components'
import { Button } from '@/components/ui/button'
import { DateInput, TimeField } from '@/components/ui/date-field'
import { FieldError } from '@/components/ui/field'
import { Label } from '@/components/ui/label'

export default function TimeFieldValidation() {
  return (
    <Form onSubmit={(e) => e.preventDefault()}>
      <TimeField className='mb-2' isRequired>
        <Label>Event time</Label>
        <DateInput />
        <FieldError />
      </TimeField>
      <Button type='submit'>Submit</Button>
    </Form>
  )
}
