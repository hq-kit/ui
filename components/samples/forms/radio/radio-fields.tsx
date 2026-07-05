import { Description, FieldGroup, FieldSet, Label, Legend, Title } from "@/components/ui/field"
import { Radio, RadioGroup } from "@/components/ui/radio"

export default function RadioFields() {
  return (
    <FieldGroup>
      <FieldSet>
        <Legend variant="label">Subscription Plan</Legend>
        <RadioGroup defaultValue="free">
          <Radio id="radio-free" value="free">
            Free Plan
          </Radio>
          <Radio id="radio-pro" value="pro">
            Pro Plan
          </Radio>
          <Radio id="radio-enterprise" value="enterprise">
            Enterprise
          </Radio>
        </RadioGroup>
      </FieldSet>
      <FieldSet>
        <Legend variant="label">Battery Level</Legend>
        <Description>Choose your preferred battery level.</Description>
        <RadioGroup>
          <Radio id="battery-high" value="high">
            High
          </Radio>
          <Radio id="battery-medium" value="medium">
            Medium
          </Radio>
          <Radio id="battery-low" value="low">
            Low
          </Radio>
        </RadioGroup>
      </FieldSet>
      <RadioGroup className="gap-6">
        <Radio id="radio-content-1" value="option1">
          <Label htmlFor="radio-content-1">Enable Touch ID</Label>
          <Description>Enable Touch ID to quickly unlock your device.</Description>
        </Radio>
        <Radio id="radio-content-2" value="option2">
          <Label htmlFor="radio-content-2">
            Enable Touch ID and Face ID to make it even faster to unlock your device. This is a long label to test the
            layout.
          </Label>
          <Description>Enable Touch ID to quickly unlock your device.</Description>
        </Radio>
      </RadioGroup>
      <RadioGroup className="gap-3">
        <Label htmlFor="radio-title-1">
          <Radio id="radio-title-1" value="title1">
            <Title>Enable Touch ID</Title>
            <Description>Enable Touch ID to quickly unlock your device.</Description>
          </Radio>
        </Label>
        <Label htmlFor="radio-title-2">
          <Radio id="radio-title-2" value="title2">
            <Title>
              Enable Touch ID and Face ID to make it even faster to unlock your device. This is a long label to test the
              layout.
            </Title>
            <Description>Enable Touch ID to quickly unlock your device.</Description>
          </Radio>
        </Label>
      </RadioGroup>
      <FieldSet>
        <Legend variant="label">Invalid Radio Group</Legend>
        <RadioGroup>
          <Radio aria-invalid id="radio-invalid-1" value="invalid1">
            Invalid Option 1
          </Radio>
          <Radio aria-invalid id="radio-invalid-2" value="invalid2">
            Invalid Option 2
          </Radio>
        </RadioGroup>
      </FieldSet>
      <FieldSet>
        <Legend variant="label">Disabled Radio Group</Legend>
        <RadioGroup>
          <Radio id="radio-disabled-1" isDisabled value="disabled1">
            Disabled Option 1
          </Radio>
          <Radio id="radio-disabled-2" isDisabled value="disabled2">
            Disabled Option 2
          </Radio>
        </RadioGroup>
      </FieldSet>
    </FieldGroup>
  )
}
