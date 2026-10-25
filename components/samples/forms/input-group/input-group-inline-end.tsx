import { EyeOffIcon } from "lucide-react"
import { Description, Field, Label } from "@/components/ui/field"
import { InputGroup, InputGroupAddon, InputGroupInput } from "@/components/ui/input"

export default function InputGroupInlineEnd() {
  return (
    <Field className="max-w-sm">
      <Label htmlFor="inline-end-input">Input</Label>
      <InputGroup>
        <InputGroupInput id="inline-end-input" placeholder="Enter password" type="password" />
        <InputGroupAddon align="inline-end">
          <EyeOffIcon />
        </InputGroupAddon>
      </InputGroup>
      <Description>Icon positioned at the end.</Description>
    </Field>
  )
}
