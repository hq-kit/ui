"use client"

import { Form } from "react-aria-components"
import { Button } from "@/components/ui/button"
import { Description, FieldError, FieldGroup, FieldSet, Label } from "@/components/ui/field"
import { Textarea } from "@/components/ui/input"
import { TextField } from "@/components/ui/text-field"

export default function FieldTextareaDemo() {
  return (
    <Form className="w-full space-y-4" onSubmit={(e) => e.preventDefault()}>
      <FieldSet>
        <FieldGroup>
          <TextField isRequired>
            <Label htmlFor="feedback">Feedback</Label>
            <Textarea id="feedback" placeholder="Your feedback helps us improve..." rows={4} />
            <Description>Share your thoughts about our service.</Description>
            <FieldError />
          </TextField>
        </FieldGroup>
        <Button type="submit">Submit</Button>
      </FieldSet>
    </Form>
  )
}
