"use client"

import { type FormEvent, useState } from "react"
import { toast } from "sonner"
import { Button } from "@/components/ui/button"
import { Description, FieldSet, Form, Label } from "@/components/ui/field"
import { type Key, Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function FieldSelectDemo() {
  const [department, setDepartment] = useState<Key | null>()
  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    toast("Form submitted", {
      description: JSON.stringify({ department }, null, 2)
    })
  }
  return (
    <Form className="w-full" onSubmit={onSubmit}>
      <FieldSet>
        <Select isRequired onChange={setDepartment} placeholder="Choose department" value={department}>
          <Label>Department</Label>
          <SelectTrigger>
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectItem id="engineering">Engineering</SelectItem>
            <SelectItem id="design">Design</SelectItem>
            <SelectItem id="marketing">Marketing</SelectItem>
            <SelectItem id="sales">Sales</SelectItem>
            <SelectItem id="support">Customer Support</SelectItem>
            <SelectItem id="hr">Human Resources</SelectItem>
            <SelectItem id="finance">Finance</SelectItem>
            <SelectItem id="operations">Operations</SelectItem>
          </SelectContent>
        </Select>
        <Description>Select your department or area of work.</Description>
        <Button type="submit">Submit</Button>
      </FieldSet>
    </Form>
  )
}
