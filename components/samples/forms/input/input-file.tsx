import { Description, Field, Label } from "@/components/ui/field"
import { Input } from "@/components/ui/input"

export default function InputFile() {
  return (
    <Field>
      <Label htmlFor="picture">Picture</Label>
      <Input id="picture" type="file" />
      <Description>Select a picture to upload.</Description>
    </Field>
  )
}
