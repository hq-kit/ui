"use client"

import { Button } from "@/components/ui/button"
import { Description, FieldSet, Form, Label } from "@/components/ui/field"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function FieldSelectDemo() {
  return (
    <Form className="w-full space-y-4" onSubmit={(e) => e.preventDefault()}>
      <FieldSet>
        <Select isRequired placeholder="Choose department">
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
