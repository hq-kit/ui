'use client'

import { Form } from 'react-aria-components'
import { Button } from '@/components/ui/button'
import { FieldError, TextField } from '@/components/ui/field'
import { PasswordInput } from '@/components/ui/input-group'
import { Label } from '@/components/ui/label'

export default function PasswordFieldDemo() {
  return (
    <Form className='w-full space-y-4' onSubmit={(e) => e.preventDefault()}>
      <TextField isRequired>
        <Label>Password</Label>
        <PasswordInput />
        <FieldError />
      </TextField>
      <Button type='submit'>Submit</Button>
    </Form>
  )
}
