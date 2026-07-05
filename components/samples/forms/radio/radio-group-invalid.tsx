import { Description, FieldSet, Legend } from "@/components/ui/field"
import { Radio, RadioGroup } from "@/components/ui/radio"

export default function RadioGroupInvalid() {
  return (
    <FieldSet className="w-full max-w-xs">
      <Legend variant="label">Notification Preferences</Legend>
      <Description>Choose how you want to receive notifications.</Description>
      <RadioGroup defaultValue="email">
        <Radio aria-invalid id="invalid-email" value="email">
          Email only
        </Radio>
        <Radio aria-invalid id="invalid-sms" value="sms">
          SMS only
        </Radio>
        <Radio aria-invalid id="invalid-both" value="both">
          Both Email & SMS
        </Radio>
      </RadioGroup>
    </FieldSet>
  )
}
