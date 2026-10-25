import { Checkbox } from "@/components/ui/checkbox"
import { Description, Label } from "@/components/ui/field"

export default function CheckboxDescription() {
  return (
    <Checkbox defaultSelected name="terms-checkbox-desc">
      <Label>Accept terms and conditions</Label>
      <Description>By clicking this checkbox, you agree to the terms and conditions.</Description>
    </Checkbox>
  )
}
