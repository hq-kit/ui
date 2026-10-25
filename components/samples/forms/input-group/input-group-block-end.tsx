import { Description, Field, FieldGroup, Label } from "@/components/ui/field"
import {
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
  InputGroupInput,
  InputGroupText,
  InputGroupTextarea
} from "@/components/ui/input"

export default function InputGroupBlockEnd() {
  return (
    <FieldGroup className="max-w-sm">
      <Field>
        <Label htmlFor="block-end-input">Input</Label>
        <InputGroup className="h-auto">
          <InputGroupInput id="block-end-input" placeholder="Enter amount" />
          <InputGroupAddon align="block-end">
            <InputGroupText>USD</InputGroupText>
          </InputGroupAddon>
        </InputGroup>
        <Description>Footer positioned below the input.</Description>
      </Field>
      <Field>
        <Label htmlFor="block-end-textarea">Textarea</Label>
        <InputGroup>
          <InputGroupTextarea id="block-end-textarea" placeholder="Write a comment..." />
          <InputGroupAddon align="block-end">
            <InputGroupText>0/280</InputGroupText>
            <InputGroupButton className="ml-auto" size="sm" variant="default">
              Post
            </InputGroupButton>
          </InputGroupAddon>
        </InputGroup>
        <Description>Footer positioned below the textarea.</Description>
      </Field>
    </FieldGroup>
  )
}
