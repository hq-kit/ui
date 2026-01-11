'use client'
import { Form } from 'react-aria-components'
import { Button } from '@/components/ui/button'
import { FieldDescription, FieldError, FieldGroup, FieldLabel, FieldLegend, FieldSet } from '@/components/ui/field'
import { Input } from '@/components/ui/input'
import { TextField } from '@/components/ui/text-field'

export default function FieldFieldsetDemo() {
  return (
    <Form onSubmit={(e) => e.preventDefault()}>
      <FieldSet>
        <FieldLegend>Address Information</FieldLegend>
        <FieldDescription>We need your address to deliver your order.</FieldDescription>
        <FieldGroup>
          <TextField isRequired>
            <FieldLabel>Street Address</FieldLabel>
            <Input placeholder='123 Main St' type='text' />
            <FieldError />
          </TextField>
          <div className='grid grid-cols-2 gap-4'>
            <TextField isRequired>
              <FieldLabel>City</FieldLabel>
              <Input placeholder='New York' type='text' />
              <FieldError />
            </TextField>
            <TextField isRequired>
              <FieldLabel>Postal Code</FieldLabel>
              <Input placeholder='90502' type='text' />
              <FieldError />
            </TextField>
          </div>
        </FieldGroup>
        <Button type='submit'>Save Address</Button>
      </FieldSet>
    </Form>
  )
}
