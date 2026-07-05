"use client"

import { Checkbox } from "@/components/ui/checkbox"
import { Description, FieldGroup, Label } from "@/components/ui/field"

export default function CheckboxDemo() {
  return (
    <FieldGroup className="max-w-sm">
      <Checkbox name="terms-checkbox">Accept terms and conditions</Checkbox>
      <Checkbox defaultSelected name="terms-checkbox-2">
        <Label>Accept terms and conditions</Label>
        <Description>By clicking this checkbox, you agree to the terms.</Description>
      </Checkbox>
      <Checkbox isDisabled name="toggle-checkbox">
        Enable notifications
      </Checkbox>
      <Checkbox name="toggle-checkbox-2">
        <Label>Enable notifications</Label>
        <Description>You can enable or disable notifications at any time.</Description>
      </Checkbox>
    </FieldGroup>
  )
}
