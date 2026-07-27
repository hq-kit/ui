"use client"

import { type FormEvent, useState } from "react"
import { toast } from "sonner"
import { Button } from "@/components/ui/button"
import { Checkbox, CheckboxGroup } from "@/components/ui/checkbox"
import { Description, FieldError, FieldGroup, Form, Label, Separator } from "@/components/ui/field"

export default function FieldCheckboxDemo() {
  const [desktop, setDesktop] = useState<string[]>([])
  const [sync, setSync] = useState<boolean>(false)

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    toast("Form submitted", {
      description: JSON.stringify({ desktop, sync }, null, 2)
    })
  }
  return (
    <Form className="w-full" onSubmit={onSubmit}>
      <FieldGroup>
        <CheckboxGroup isRequired name="desktop" onChange={setDesktop} value={desktop}>
          <Label>Show these items on the desktop</Label>
          <Description>Select the items you want to show on the desktop.</Description>
          <Checkbox value="1">Hard disks</Checkbox>
          <Checkbox value="2">External disks</Checkbox>
          <Checkbox value="3">CDs, DVDs, and iPods</Checkbox>
          <Checkbox value="4">Connected servers</Checkbox>
          <FieldError />
        </CheckboxGroup>
        <Separator />
        <Checkbox isRequired isSelected={sync} name="sync" onChange={setSync}>
          <Label>Sync desktop and documents</Label>
          <Description>
            Your Desktop & Documents folders are being synced with iCloud Drive. You can access them from other devices.
          </Description>
          <FieldError />
        </Checkbox>
        <Button type="submit">Save Preferences</Button>
      </FieldGroup>
    </Form>
  )
}
