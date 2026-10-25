import { Button } from "@/components/ui/button"
import { Description, Field, FieldGroup, Label } from "@/components/ui/field"
import { Input } from "@/components/ui/input"

export default function InputFieldgroup() {
  return (
    <FieldGroup>
      <Field>
        <Label htmlFor="fieldgroup-name">Name</Label>
        <Input id="fieldgroup-name" placeholder="Jordan Lee" />
      </Field>
      <Field>
        <Label htmlFor="fieldgroup-email">Email</Label>
        <Input id="fieldgroup-email" placeholder="name@example.com" type="email" />
        <Description>We&apos;ll send updates to this address.</Description>
      </Field>
      <Field orientation="horizontal">
        <Button type="reset" variant="outline">
          Reset
        </Button>
        <Button type="submit">Submit</Button>
      </Field>
    </FieldGroup>
  )
}
