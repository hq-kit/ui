import { Description, Label } from "@/components/ui/field"
import { Radio, RadioGroup } from "@/components/ui/radio"

export default function RadioGroupDescription() {
  return (
    <RadioGroup className="w-fit" defaultValue="comfortable">
      <Radio value="default">
        <Label>Default</Label>
        <Description>Standard spacing for most use cases.</Description>
      </Radio>
      <Radio value="comfortable">
        <Label>Comfortable</Label>
        <Description>More space between elements.</Description>
      </Radio>
      <Radio value="compact">
        <Label>Compact</Label>
        <Description>Minimal spacing for dense layouts.</Description>
      </Radio>
    </RadioGroup>
  )
}
