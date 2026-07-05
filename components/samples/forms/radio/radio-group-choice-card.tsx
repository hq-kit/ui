import { Description, Label } from "@/components/ui/field"
import { Radio, RadioGroup } from "@/components/ui/radio"

export default function RadioGroupChoiceCard() {
  return (
    <RadioGroup className="max-w-sm" defaultValue="plus">
      <Radio id="plus-plan" value="plus">
        <Label>Plus</Label>
        <Description>For individuals and small teams.</Description>
      </Radio>
      <Radio id="pro-plan" value="pro">
        <Label>Pro</Label>
        <Description>For growing businesses.</Description>
      </Radio>
      <Radio id="enterprise-plan" value="enterprise">
        <Label>Enterprise</Label>
        <Description>For large teams and enterprises.</Description>
      </Radio>
    </RadioGroup>
  )
}
