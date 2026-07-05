"use client"

import { Button } from "@/components/ui/button"
import { Form, Label } from "@/components/ui/field"
import { Select } from "@/components/ui/select"

const software = [
  { id: 1, name: "Adobe Photoshop" }
  //...
]

export default function SelectValidationDemo() {
  return (
    <Form className="space-y-2" onSubmit={(e) => e.preventDefault()}>
      <Select isRequired placeholder="Select a software">
        <Label>Design software</Label>
        <Select.Trigger>
          <Select.Value />
        </Select.Trigger>
        <Select.Content items={software}>
          {(item) => (
            <Select.Item id={item.id} textValue={item.name}>
              {item.name}
            </Select.Item>
          )}
        </Select.Content>
      </Select>
      <Button type="submit">Submit</Button>
    </Form>
  )
}
