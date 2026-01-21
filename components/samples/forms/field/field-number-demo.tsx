'use client'

import { IconMinus, IconPlus } from '@tabler/icons-react'
import { Form } from 'react-aria-components'
import { Button } from '@/components/ui/button'
import { FieldError } from '@/components/ui/field'
import { InputGroup, InputGroupAddon, InputGroupButton, InputGroupInput } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { NumberField, NumberInput } from '@/components/ui/number-field'

export default function NumberFieldDemo() {
  return (
    <Form className='w-full space-y-4' onSubmit={(e) => e.preventDefault()}>
      <NumberField isRequired>
        <Label>Quantity</Label>
        <NumberInput />
        <FieldError />
      </NumberField>
      <NumberField isRequired>
        <Label>Price</Label>
        <InputGroup>
          <InputGroupAddon>
            <InputGroupButton slot='decrement'>
              <IconMinus />
            </InputGroupButton>
          </InputGroupAddon>
          <InputGroupInput />
          <InputGroupAddon align='inline-end'>
            <InputGroupButton slot='increment'>
              <IconPlus />
            </InputGroupButton>
          </InputGroupAddon>
        </InputGroup>
        <FieldError />
      </NumberField>
      <Button type='submit'>Submit</Button>
    </Form>
  )
}
