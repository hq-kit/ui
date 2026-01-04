'use client'

import { IconUser } from '@tabler/icons-react'
import { Form } from 'react-aria-components'
import { Button } from '@/components/ui/button'
import { FieldError, TextField } from '@/components/ui/field'
import { InputGroup } from '@/components/ui/input-group'
import { Label } from '@/components/ui/label'

export default function WithPrefixFieldDemo() {
  return (
    <Form className='w-full space-y-4' onSubmit={(e) => e.preventDefault()}>
      <TextField isRequired>
        <Label>Username</Label>
        <InputGroup>
          <InputGroup.Addon>
            <IconUser />
          </InputGroup.Addon>
          <InputGroup.Input />
        </InputGroup>
        <FieldError />
      </TextField>
      <Button type='submit'>Submit</Button>
    </Form>
  )
}
