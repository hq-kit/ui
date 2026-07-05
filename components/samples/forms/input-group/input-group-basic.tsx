import { Field, FieldGroup, Label } from "@/components/ui/field"
import { Input, InputGroup, InputGroupInput } from "@/components/ui/input"

export default function InputGroupBasic() {
  return (
    <FieldGroup>
      <Field>
        <Label htmlFor="input-default-01">Default (No Input Group)</Label>
        <Input id="input-default-01" placeholder="Placeholder" />
      </Field>
      <Field>
        <Label htmlFor="input-group-02">Input Group</Label>
        <InputGroup>
          <InputGroupInput id="input-group-02" placeholder="Placeholder" />
        </InputGroup>
      </Field>
      <Field data-disabled="true">
        <Label htmlFor="input-disabled-03">Disabled</Label>
        <InputGroup>
          <InputGroupInput disabled id="input-disabled-03" placeholder="This field is disabled" />
        </InputGroup>
      </Field>
      <Field data-invalid="true">
        <Label htmlFor="input-invalid-04">Invalid</Label>
        <InputGroup>
          <InputGroupInput aria-invalid="true" id="input-invalid-04" placeholder="This field is invalid" />
        </InputGroup>
      </Field>
    </FieldGroup>
  )
}
