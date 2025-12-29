'use client'

import { Form } from 'react-aria-components'
import { Button } from '@/components/ui/button'
import { FieldError, NumberField } from '@/components/ui/field'
import { NumberInput } from '@/components/ui/input-group'
import { Label } from '@/components/ui/label'

export default function NumberFieldDemo() {
  return (
    <Form className='w-full space-y-4' onSubmit={(e) => e.preventDefault()}>
      <NumberField isRequired>
        <Label>Quantity</Label>
        <NumberInput />
        <FieldError />
      </NumberField>
      <Button type='submit'>Submit</Button>
    </Form>
  )
}
