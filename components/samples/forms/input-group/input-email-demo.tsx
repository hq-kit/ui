'use client'

import { IconMail } from '@tabler/icons-react'
import { Form } from 'react-aria-components'
import { Button } from '@/components/ui/button'
import { FieldError, TextField } from '@/components/ui/field'
import { InputGroup } from '@/components/ui/input-group'
import { Label } from '@/components/ui/label'

export default function EmailFieldDemo() {
  return (
    <Form className='w-full space-y-4' onSubmit={(e) => e.preventDefault()}>
      <TextField isRequired type='email'>
        <Label>Email Address</Label>
        <InputGroup>
          <InputGroup.Addon>
            <IconMail />
          </InputGroup.Addon>
          <InputGroup.Input />
        </InputGroup>
        <FieldError />
      </TextField>
      <Button type='submit'>Submit</Button>
    </Form>
  )
}
