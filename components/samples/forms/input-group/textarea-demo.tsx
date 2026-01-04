'use client'
import { Form } from 'react-aria-components'
import { Button } from '@/components/ui/button'
import { FieldError, TextField } from '@/components/ui/field'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'

export default function TextareaDemo() {
  return (
    <Form className='w-full space-y-4' onSubmit={(e) => e.preventDefault()}>
      <TextField isRequired>
        <Label>About</Label>
        <Textarea />
        <FieldError />
      </TextField>
      <Button type='submit'>Submit</Button>
    </Form>
  )
}
