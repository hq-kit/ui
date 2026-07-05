import { Field, FieldGroup, Label } from "@/components/ui/field"
import { Input } from "@/components/ui/input"

export default function InputGrid() {
  return (
    <FieldGroup className="grid max-w-sm grid-cols-2">
      <Field>
        <Label htmlFor="first-name">First Name</Label>
        <Input id="first-name" placeholder="Jordan" />
      </Field>
      <Field>
        <Label htmlFor="last-name">Last Name</Label>
        <Input id="last-name" placeholder="Lee" />
      </Field>
    </FieldGroup>
  )
}
