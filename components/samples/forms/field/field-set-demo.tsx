"use client"

import { Button } from "@/components/ui/button"
import { Description, FieldError, FieldGroup, FieldSet, Form, Label, Legend } from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import { TextField } from "@/components/ui/text-field"

export default function FieldFieldsetDemo() {
  return (
    <Form onSubmit={(e) => e.preventDefault()}>
      <FieldSet>
        <Legend>Address Information</Legend>
        <Description>We need your address to deliver your order.</Description>
        <FieldGroup>
          <TextField isRequired>
            <Label>Street Address</Label>
            <Input placeholder="123 Main St" type="text" />
            <FieldError />
          </TextField>
          <div className="grid grid-cols-2 gap-4">
            <TextField isRequired>
              <Label>City</Label>
              <Input placeholder="New York" type="text" />
              <FieldError />
            </TextField>
            <TextField isRequired>
              <Label>Postal Code</Label>
              <Input placeholder="90502" type="text" />
              <FieldError />
            </TextField>
          </div>
        </FieldGroup>
        <Button type="submit">Save Address</Button>
      </FieldSet>
    </Form>
  )
}
