import { Form } from "react-aria-components"
import { Button } from "@/components/ui/button"
import { DateField, DateInput } from "@/components/ui/date-field"
import { FieldError, Label } from "@/components/ui/field"

export default function DateFieldValidation() {
  return (
    <Form onSubmit={(e) => e.preventDefault()}>
      <DateField className="mb-2" isRequired>
        <Label>Event date</Label>
        <DateInput />
        <FieldError />
      </DateField>
      <Button type="submit">Submit</Button>
    </Form>
  )
}
