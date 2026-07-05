import { ArrowUpIcon, CodeIcon, CopyIcon, InfoIcon, RefreshCwIcon } from "lucide-react"
import { Description, Field, FieldGroup, Label } from "@/components/ui/field"
import {
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
  InputGroupText,
  InputGroupTextarea,
  Textarea
} from "@/components/ui/input"

export default function InputGroupTextareaExamples() {
  return (
    <FieldGroup>
      <Field>
        <Label htmlFor="textarea-header-footer-12">Default Textarea (No Input Group)</Label>
        <Textarea id="textarea-header-footer-12" placeholder="Enter your text here..." />
      </Field>
      <Field>
        <Label htmlFor="textarea-header-footer-13">Input Group</Label>
        <InputGroup>
          <InputGroupTextarea id="textarea-header-footer-13" placeholder="Enter your text here..." />
        </InputGroup>
        <Description>This is a description of the input group.</Description>
      </Field>
      <Field data-invalid="true">
        <Label htmlFor="textarea-header-footer-14">Invalid</Label>
        <InputGroup>
          <InputGroupTextarea
            aria-invalid="true"
            id="textarea-header-footer-14"
            placeholder="Enter your text here..."
          />
        </InputGroup>
        <Description>This is a description of the input group.</Description>
      </Field>
      <Field data-disabled="true">
        <Label htmlFor="textarea-header-footer-15">Disabled</Label>
        <InputGroup>
          <InputGroupTextarea disabled id="textarea-header-footer-15" placeholder="Enter your text here..." />
        </InputGroup>
        <Description>This is a description of the input group.</Description>
      </Field>
      <Field>
        <Label htmlFor="prompt-31">Addon (block-start)</Label>
        <InputGroup>
          <InputGroupTextarea id="prompt-31" />
          <InputGroupAddon align="block-start">
            <InputGroupText>Ask, Search or Chat...</InputGroupText>
            <InfoIcon className="ml-auto text-muted-foreground" />
          </InputGroupAddon>
        </InputGroup>
        <Description>This is a description of the input group.</Description>
      </Field>
      <Field>
        <Label htmlFor="textarea-header-footer-30">Addon (block-end)</Label>
        <InputGroup>
          <InputGroupTextarea id="textarea-header-footer-30" placeholder="Enter your text here..." />
          <InputGroupAddon align="block-end">
            <InputGroupText>0/280 characters</InputGroupText>
            <InputGroupButton className="ml-auto rounded-full" size="icon-xs" variant="default">
              <ArrowUpIcon />
              <span className="sr-only">Send</span>
            </InputGroupButton>
          </InputGroupAddon>
        </InputGroup>
      </Field>
      <Field>
        <Label htmlFor="textarea-comment-31">Addon (Buttons)</Label>
        <InputGroup>
          <InputGroupTextarea className="min-h-30" id="textarea-comment-31" placeholder="Share your thoughts..." />
          <InputGroupAddon align="block-end">
            <InputGroupButton className="ml-auto" size="sm" variant="ghost">
              Cancel
            </InputGroupButton>
            <InputGroupButton size="sm" variant="default">
              Post Comment
            </InputGroupButton>
          </InputGroupAddon>
        </InputGroup>
      </Field>
      <Field>
        <Label htmlFor="textarea-code-32">Code Editor</Label>
        <InputGroup>
          <InputGroupTextarea
            className="min-h-75 py-3"
            id="textarea-code-32"
            placeholder="console.log('Hello, world!');"
          />
          <InputGroupAddon align="block-start" className="border-b">
            <InputGroupText className="font-medium font-mono">
              <CodeIcon />
              script.js
            </InputGroupText>
            <InputGroupButton className="ml-auto" size="icon-xs">
              <RefreshCwIcon />
            </InputGroupButton>
            <InputGroupButton size="icon-xs" variant="ghost">
              <CopyIcon />
            </InputGroupButton>
          </InputGroupAddon>
          <InputGroupAddon align="block-end" className="border-t">
            <InputGroupText>Line 1, Column 1</InputGroupText>
            <InputGroupText className="ml-auto">JavaScript</InputGroupText>
          </InputGroupAddon>
        </InputGroup>
      </Field>
    </FieldGroup>
  )
}
