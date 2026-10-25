import { Button } from "@/components/ui/button"
import { ButtonGroup } from "@/components/ui/button-group"
import { Field, Label } from "@/components/ui/field"
import { Input } from "@/components/ui/input"

export default function InputButtonGroup() {
  return (
    <Field>
      <Label htmlFor="input-button-group">Search</Label>
      <ButtonGroup>
        <Input id="input-button-group" placeholder="Type to search..." />
        <Button variant="outline">Search</Button>
      </ButtonGroup>
    </Field>
  )
}
