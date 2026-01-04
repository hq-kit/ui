import { Form } from 'react-aria-components'
import { Button } from '@/components/ui/button'
import { DateInput } from '@/components/ui/date-input'
import { DateField, FieldError } from '@/components/ui/field'
import { Label } from '@/components/ui/label'

export default function TextFieldDemo() {
  return (
    <Form className='w-full space-y-4' onSubmit={(e) => e.preventDefault()}>
      <DateField isRequired>
        <Label>Date</Label>
        <DateInput />
        <FieldError />
      </DateField>
      <Button type='submit'>Submit</Button>
    </Form>
  )
}
