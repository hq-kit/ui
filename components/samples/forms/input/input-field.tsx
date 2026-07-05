import { Description, Field, Label } from "@/components/ui/field"
import { Input } from "@/components/ui/input"

export default function InputField() {
  return (
    <Field>
      <Label htmlFor="input-field-username">Username</Label>
      <Input id="input-field-username" placeholder="Enter your username" type="text" />
      <Description>Choose a unique username for your account.</Description>
    </Field>
  )
}
