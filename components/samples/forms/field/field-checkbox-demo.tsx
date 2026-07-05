"use client"

import { Form } from "react-aria-components"
import { Button } from "@/components/ui/button"
import { Checkbox, CheckboxGroup } from "@/components/ui/checkbox"
import { Description, FieldError, FieldGroup, FieldSet, Label, Separator } from "@/components/ui/field"

export default function FieldCheckboxDemo() {
  return (
    <Form className="w-full space-y-4" onSubmit={(e) => e.preventDefault()}>
      <FieldGroup>
        <FieldSet>
          <CheckboxGroup isRequired>
            <Label>Show these items on the desktop</Label>
            <Description>Select the items you want to show on the desktop.</Description>
            <Checkbox value="1">Hard disks</Checkbox>
            <Checkbox value="2">External disks</Checkbox>
            <Checkbox value="3">CDs, DVDs, and iPods</Checkbox>
            <Checkbox value="4">Connected servers</Checkbox>
            <FieldError />
          </CheckboxGroup>
        </FieldSet>
        <Separator />
        <Checkbox isRequired>
          <Label>Sync desktop and documents</Label>
          <Description>
            Your Desktop & Documents folders are being synced with iCloud Drive. You can access them from other devices.
          </Description>
          <FieldError />
        </Checkbox>
      </FieldGroup>
      <Button type="submit">Save Preferences</Button>
    </Form>
  )
}
