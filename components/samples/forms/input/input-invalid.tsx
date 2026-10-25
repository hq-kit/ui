import { Description, Field, Label } from "@/components/ui/field"
import { Input } from "@/components/ui/input"

export default function InputInvalid() {
  return (
    <Field data-invalid>
      <Label htmlFor="input-invalid">Invalid Input</Label>
      <Input aria-invalid id="input-invalid" placeholder="Error" />
      <Description>This field contains validation errors.</Description>
    </Field>
  )
}
