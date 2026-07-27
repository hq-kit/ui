"use client"
import { type FormEvent, useState } from "react"
import { Form } from "react-aria-components"
import { toast } from "sonner"
import { Button } from "@/components/ui/button"
import { Description, FieldGroup, Label } from "@/components/ui/field"
import { Radio, RadioGroup } from "@/components/ui/radio"

export default function FieldRadioDemo() {
  const [plan, setPlan] = useState("monthly")

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    toast("Form submitted", {
      description: JSON.stringify({ plan }, null, 2)
    })
  }
  return (
    <Form className="w-full" onSubmit={onSubmit}>
      <FieldGroup>
        <RadioGroup defaultValue="monthly" name="plan" onChange={setPlan} value={plan}>
          <Label>Subscription Plan</Label>
          <Description>Yearly and lifetime plans offer significant savings.</Description>
          <Radio value="monthly">Monthly ($9.99/month)</Radio>
          <Radio value="yearly">Yearly ($99.99/year)</Radio>
          <Radio value="lifetime">Lifetime ($299.99)</Radio>
        </RadioGroup>
        <Button type="submit">Submit</Button>
      </FieldGroup>
    </Form>
  )
}
