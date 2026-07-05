"use client"

import { CopyIcon, EyeOffIcon, InfoIcon, MicIcon, RadioIcon, SearchIcon, StarIcon } from "lucide-react"
import { toast } from "sonner"
import { Description, Field, FieldGroup, Label } from "@/components/ui/field"
import { InputGroup, InputGroupAddon, InputGroupButton, InputGroupInput, InputGroupText } from "@/components/ui/input"

export default function InputGroupWithAddons() {
  return (
    <FieldGroup>
      <Field>
        <Label htmlFor="input-icon-left-05">Addon (inline-start)</Label>
        <InputGroup>
          <InputGroupInput id="input-icon-left-05" />
          <InputGroupAddon>
            <SearchIcon className="text-muted-foreground" />
          </InputGroupAddon>
        </InputGroup>
      </Field>
      <Field>
        <Label htmlFor="input-icon-right-07">Addon (inline-end)</Label>
        <InputGroup>
          <InputGroupInput id="input-icon-right-07" />
          <InputGroupAddon align="inline-end">
            <EyeOffIcon />
          </InputGroupAddon>
        </InputGroup>
      </Field>
      <Field>
        <Label htmlFor="input-icon-both-09">Addon (inline-start and inline-end)</Label>
        <InputGroup>
          <InputGroupInput id="input-icon-both-09" />
          <InputGroupAddon>
            <MicIcon className="text-muted-foreground" />
          </InputGroupAddon>
          <InputGroupAddon align="inline-end">
            <RadioIcon className="animate-pulse text-red-500" />
          </InputGroupAddon>
        </InputGroup>
      </Field>
      <Field>
        <Label htmlFor="input-addon-20">Addon (block-start)</Label>
        <InputGroup className="h-auto">
          <InputGroupInput id="input-addon-20" />
          <InputGroupAddon align="block-start">
            <InputGroupText>First Name</InputGroupText>
            <InfoIcon className="ml-auto text-muted-foreground" />
          </InputGroupAddon>
        </InputGroup>
      </Field>
      <Field>
        <Label htmlFor="input-addon-21">Addon (block-end)</Label>
        <InputGroup className="h-auto">
          <InputGroupInput id="input-addon-21" />
          <InputGroupAddon align="block-end">
            <InputGroupText>20/240 characters</InputGroupText>
            <InfoIcon className="ml-auto text-muted-foreground" />
          </InputGroupAddon>
        </InputGroup>
      </Field>
      <Field>
        <Label htmlFor="input-icon-both-10">Multiple Icons</Label>
        <InputGroup>
          <InputGroupInput id="input-icon-both-10" />
          <InputGroupAddon align="inline-end">
            <StarIcon />
            <InputGroupButton onClick={() => toast("Copied to clipboard")} size="icon-xs">
              <CopyIcon />
            </InputGroupButton>
          </InputGroupAddon>
          <InputGroupAddon>
            <RadioIcon className="animate-pulse text-red-500" />
          </InputGroupAddon>
        </InputGroup>
      </Field>
      <Field>
        <Label htmlFor="input-description-10">Description</Label>
        <InputGroup>
          <InputGroupInput id="input-description-10" />
          <InputGroupAddon align="inline-end">
            <InfoIcon />
          </InputGroupAddon>
        </InputGroup>
        <Description>This is a description of the input group.</Description>
      </Field>
      <Field>
        <Label htmlFor="input-label-10">Label</Label>
        <InputGroup>
          <InputGroupAddon>
            <Label htmlFor="input-label-10">Label</Label>
          </InputGroupAddon>
          <InputGroupInput id="input-label-10" />
        </InputGroup>
        <InputGroup>
          <InputGroupInput aria-label="Optional" id="input-optional-12" />
          <InputGroupAddon align="inline-end">
            <InputGroupText>(optional)</InputGroupText>
          </InputGroupAddon>
        </InputGroup>
      </Field>
    </FieldGroup>
  )
}
