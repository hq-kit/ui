"use client"

import { IconMail } from "@tabler/icons-react"
import { type FormEvent, useState } from "react"
import { toast } from "sonner"
import { Button } from "@/components/ui/button"
import { Description, FieldError, FieldSet, Form, Label, Legend } from "@/components/ui/field"
import { Input, InputGroup } from "@/components/ui/input"
import { PasswordInput, TextField } from "@/components/ui/text-field"

export default function FieldInputDemo() {
  const [username, setUsername] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    toast("Form submitted", {
      description: JSON.stringify(
        {
          username,
          email,
          password
        },
        null,
        2
      )
    })
  }
  return (
    <Form className="w-full" onSubmit={onSubmit}>
      <FieldSet>
        <Legend>Profile</Legend>
        <Description>Enter your personal information</Description>
        <TextField isRequired name="name" onChange={setUsername} value={username}>
          <Label>Username</Label>
          <Input />
          <Description>Choose a unique username for your account.</Description>
          <FieldError />
        </TextField>
        <TextField isRequired name="email" onChange={setEmail} type="email" value={email}>
          <Label>Email</Label>
          <InputGroup>
            <InputGroup.Addon>
              <IconMail />
            </InputGroup.Addon>
            <InputGroup.Input />
          </InputGroup>
          <FieldError />
        </TextField>
        <TextField isRequired name="password" onChange={setPassword} type="password" value={password}>
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
