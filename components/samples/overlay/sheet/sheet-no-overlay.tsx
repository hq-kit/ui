"use client"

import { Button } from "@/components/ui/button"
import { Form, Label } from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import { Sheet } from "@/components/ui/sheet"
import { TextField } from "@/components/ui/text-field"

const SheetWithNoOverlayDemo = () => {
  return (
    <Sheet>
      <Button variant="outline">No Overlay</Button>
      <Sheet.Content overlayClassName="bg-transparent! backdrop-blur-none!">
        <Sheet.Header>
          <Sheet.Title>Edit profile</Sheet.Title>
          <Sheet.Description>Make changes to your profile here. Click save when you&apos;re done.</Sheet.Description>
        </Sheet.Header>
        <Sheet.Body>
          <Form className="grid flex-1 auto-rows-min gap-6">
            <TextField defaultValue="Pedro Duarte">
              <Label>Name</Label>
              <Input />
            </TextField>
            <TextField defaultValue="@peduarte">
              <Label>Username</Label>
              <Input />
            </TextField>
          </Form>
        </Sheet.Body>
        <Sheet.Footer>
          <Button type="submit">Save changes</Button>
          <Button slot="close" variant="outline">
            Close
          </Button>
        </Sheet.Footer>
      </Sheet.Content>
    </Sheet>
  )
}

export default SheetWithNoOverlayDemo
