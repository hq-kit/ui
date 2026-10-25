import { CopyIcon, FileCodeIcon } from "lucide-react"
import { Description, Field, FieldGroup, Label } from "@/components/ui/field"
import {
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
  InputGroupInput,
  InputGroupText,
  InputGroupTextarea
} from "@/components/ui/input"

export default function InputGroupBlockStart() {
  return (
    <FieldGroup className="max-w-sm">
      <Field>
        <Label htmlFor="block-start-input">Input</Label>
        <InputGroup className="h-auto">
          <InputGroupInput id="block-start-input" placeholder="Enter your name" />
          <InputGroupAddon align="block-start">
            <InputGroupText>Full Name</InputGroupText>
          </InputGroupAddon>
        </InputGroup>
        <Description>Header positioned above the input.</Description>
      </Field>
      <Field>
        <Label htmlFor="block-start-textarea">Textarea</Label>
        <InputGroup>
          <InputGroupTextarea
            className="font-mono text-sm"
            id="block-start-textarea"
            placeholder="console.log('Hello, world!');"
          />
          <InputGroupAddon align="block-start">
            <FileCodeIcon className="text-muted-foreground" />
            <InputGroupText className="font-mono">script.js</InputGroupText>
            <InputGroupButton className="ml-auto" size="icon-xs">
              <CopyIcon />
              <span className="sr-only">Copy</span>
            </InputGroupButton>
          </InputGroupAddon>
        </InputGroup>
        <Description>Header positioned above the textarea.</Description>
      </Field>
    </FieldGroup>
  )
}
