"use client"

import { IconChecks } from "@tabler/icons-react"
import { Form } from "react-aria-components"
import { toast } from "sonner"
import { Alert, AlertTitle } from "@/components/ui/alert"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import { Sheet } from "@/components/ui/sheet"
import { PasswordInput, TextField } from "@/components/ui/text-field"

const SheetWithFormDemo = () => {
  const onSubmit = () => {
    toast.custom(() => (
      <Alert className="border-green-600 text-green-600 dark:border-green-400 dark:text-green-400">
        <IconChecks />
        <AlertTitle>Account created successfully!</AlertTitle>
      </Alert>
    ))
  }

  return (
    <Sheet>
      <Button variant="outline">Sign Up</Button>
      <Sheet.Content>
        <Sheet.Header>
          <Sheet.Title className="text-center font-bold text-xl">Sign Up</Sheet.Title>
        </Sheet.Header>
        <Form onSubmit={onSubmit}>
          <Sheet.Body className="space-y-4">
            <TextField>
              <Label>First Name</Label>
              <Input placeholder="First name" />
            </TextField>
            <TextField>
              <Label>Last Name</Label>
              <Input placeholder="Last name" />
            </TextField>
            <TextField>
              <Label>Email</Label>
              <Input placeholder="Email address" />
            </TextField>
            <TextField>
              <Label>Mobile Number</Label>
              <Input placeholder="8585858585" />
            </TextField>
            <TextField>
              <Label>Password</Label>
              <PasswordInput placeholder="Password" />
            </TextField>
            <TextField>
              <Label>Confirm Password</Label>
              <PasswordInput placeholder="Confirm password" />
            </TextField>
          </Sheet.Body>
          <Sheet.Footer>
            <Button type="submit">Create Account</Button>
            <Sheet.Close>Close</Sheet.Close>
          </Sheet.Footer>
        </Form>
      </Sheet.Content>
    </Sheet>
  )
}

export default SheetWithFormDemo
