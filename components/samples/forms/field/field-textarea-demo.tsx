"use client"

import { type FormEvent, useState } from "react"
import { toast } from "sonner"
import { Button } from "@/components/ui/button"
import { Description, Field, Form, Label } from "@/components/ui/field"
import { Textarea } from "@/components/ui/input"
import { TextField } from "@/components/ui/text-field"

export default function FieldTextareaDemo() {
  const [feedback, setFeedback] = useState("")
  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    toast("Form submitted", {
      description: JSON.stringify({ feedback }, null, 2)
    })
  }
  return (
    <Form className="w-full" onSubmit={onSubmit}>
      <Field.Group>
        <TextField isRequired name="feedback" onChange={setFeedback} value={feedback}>
          <Label>Feedback</Label>
          <Textarea placeholder="Your feedback helps us improve..." rows={4} />
          <Description>Share your thoughts about our service.</Description>
          <Field.Error />
        </TextField>
        <Button type="submit">Submit</Button>
      </Field.Group>
    </Form>
  )
}
