import { Description, Field, Label } from "@/components/ui/field"
import { Input } from "@/components/ui/input"

export default function InputDisabled() {
  return (
    <Field data-disabled>
      <Label htmlFor="input-demo-disabled">Email</Label>
      <Input disabled id="input-demo-disabled" placeholder="Email" type="email" />
      <Description>This field is currently disabled.</Description>
    </Field>
  )
}
