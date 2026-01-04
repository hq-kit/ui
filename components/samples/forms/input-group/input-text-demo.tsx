'use client'
import { Form } from 'react-aria-components'
import { Button } from '@/components/ui/button'
import { FieldError, TextField } from '@/components/ui/field'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'

export default function TextFieldDemo() {
  return (
    <Form className='w-full space-y-4' onSubmit={(e) => e.preventDefault()}>
      <TextField isRequired>
        <Label>Name</Label>
        <Input />
        <FieldError />
      </TextField>
      <Button type='submit'>Submit</Button>
    </Form>
  )
}
