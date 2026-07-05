"use client"

import { IconMail } from "@tabler/icons-react"
import { Form } from "react-aria-components"
import { Button } from "@/components/ui/button"
import { Description, FieldError, FieldSet, Label, Legend } from "@/components/ui/field"
import { Input, InputGroup, InputGroupAddon, InputGroupInput } from "@/components/ui/input"
import { PasswordInput, TextField } from "@/components/ui/text-field"

export default function FieldInputDemo() {
  return (
    <Form className="w-full space-y-4" onSubmit={(e) => e.preventDefault()}>
      <FieldSet>
        <Legend>Profile</Legend>
        <Description>Enter your personal information</Description>
        <TextField isRequired>
          <Label>Username</Label>
          <Input />
          <Description>Choose a unique username for your account.</Description>
          <FieldError />
        </TextField>
        <TextField isRequired type="email">
          <Label>Email</Label>
          <InputGroup>
            <InputGroupAddon>
              <IconMail />
            </InputGroupAddon>
            <InputGroupInput />
          </InputGroup>
          <FieldError />
        </TextField>
        <TextField isRequired>
          <Label>Password</Label>
          <Description>Must be at least 8 characters long.</Description>
          <PasswordInput />
          <FieldError />
        </TextField>
        <Button type="submit">Submit</Button>
      </FieldSet>
    </Form>
  )
}
