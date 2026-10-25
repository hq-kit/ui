import { SearchIcon } from "lucide-react"
import { Description, Field, Label } from "@/components/ui/field"
import { InputGroup, InputGroupAddon, InputGroupInput } from "@/components/ui/input"

export default function InputGroupInlineStart() {
  return (
    <Field className="max-w-sm">
      <Label htmlFor="inline-start-input">Input</Label>
      <InputGroup>
        <InputGroupInput id="inline-start-input" placeholder="Search..." />
        <InputGroupAddon align="inline-start">
          <SearchIcon className="text-muted-foreground" />
        </InputGroupAddon>
      </InputGroup>
      <Description>Icon positioned at the start.</Description>
    </Field>
  )
}
