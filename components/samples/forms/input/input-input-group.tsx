import { InfoIcon } from "lucide-react"
import { Field, Label } from "@/components/ui/field"
import { InputGroup, InputGroupAddon, InputGroupInput, InputGroupText } from "@/components/ui/input"

export default function InputInputGroup() {
  return (
    <Field>
      <Label htmlFor="input-group-url">Website URL</Label>
      <InputGroup>
        <InputGroupInput id="input-group-url" placeholder="example.com" />
        <InputGroupAddon>
          <InputGroupText>https://</InputGroupText>
        </InputGroupAddon>
        <InputGroupAddon align="inline-end">
          <InfoIcon />
        </InputGroupAddon>
      </InputGroup>
    </Field>
  )
}
