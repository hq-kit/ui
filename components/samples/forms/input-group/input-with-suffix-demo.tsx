'use client'

import { Form } from 'react-aria-components'
import { Button } from '@/components/ui/button'
import { FieldError, TextField } from '@/components/ui/field'
import { InputGroup } from '@/components/ui/input-group'
import { Label } from '@/components/ui/label'

export default function WithSuffixFieldDemo() {
  return (
    <Form className='w-full space-y-4' onSubmit={(e) => e.preventDefault()}>
      <TextField isRequired>
        <Label>URL</Label>
        <InputGroup>
          <InputGroup.Input />
          <InputGroup.Addon align='inline-end'>.com</InputGroup.Addon>
        </InputGroup>
        <FieldError />
      </TextField>
      <Button type='submit'>Submit</Button>
    </Form>
  )
}
