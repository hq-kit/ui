import { Description, Field, Label } from "@/components/ui/field"
import { Input } from "@/components/ui/input"

export default function InputRequired() {
  return (
    <Field>
      <Label htmlFor="input-required">
        Required Field <span className="text-destructive">*</span>
      </Label>
      <Input id="input-required" placeholder="This field is required" required />
      <Description>This field must be filled out.</Description>
    </Field>
  )
}
