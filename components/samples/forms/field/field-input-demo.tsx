'use client'

import { IconMail } from '@tabler/icons-react'
import { Form } from 'react-aria-components'
import { Button } from '@/components/ui/button'
import { FieldDescription, FieldError, FieldLegend, FieldSet } from '@/components/ui/field'
import { Input, InputGroup, InputGroupAddon, InputGroupInput } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { PasswordInput, TextField } from '@/components/ui/text-field'

export default function FieldInputDemo() {
  return (
    <Form className='w-full space-y-4' onSubmit={(e) => e.preventDefault()}>
      <FieldSet>
        <FieldLegend>Profile</FieldLegend>
        <FieldDescription>Enter your personal information</FieldDescription>
        <TextField isRequired>
          <Label>Username</Label>
          <Input />
          <FieldDescription>Choose a unique username for your account.</FieldDescription>
          <FieldError />
        </TextField>
        <TextField isRequired type='email'>
          <Label>Email</Label>
          <InputGroup>
            <InputGroupAddon>
              <IconMail />
            </InputGroupAddon>
            <InputGroupInput />
          </InputGroup>
          <FieldError />
        </TextField>
        <TextField isRequired>
          <Label>Password</Label>
          <FieldDescription>Must be at least 8 characters long.</FieldDescription>
          <PasswordInput />
          <FieldError />
        </TextField>
        <Button type='submit'>Submit</Button>
      </FieldSet>
    </Form>
  )
}
