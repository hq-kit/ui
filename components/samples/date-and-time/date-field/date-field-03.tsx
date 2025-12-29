'use client'

import { Form } from 'react-aria-components'
import { Button } from '@/components/ui/button'
import { DateInput } from '@/components/ui/date-input'
import { DateField, FieldError } from '@/components/ui/field'
import { Label } from '@/components/ui/label'

export default function DateFieldValidation() {
  return (
    <Form onSubmit={(e) => e.preventDefault()}>
      <DateField className='mb-2' isRequired>
        <Label>Event date</Label>
        <DateInput />
        <FieldError />
      </DateField>
      <Button type='submit'>Submit</Button>
    </Form>
  )
}
