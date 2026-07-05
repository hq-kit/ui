import { Description, FieldSet, Legend } from "@/components/ui/field"
import { Radio, RadioGroup } from "@/components/ui/radio"

export default function RadioGroupFieldset() {
  return (
    <FieldSet className="w-full max-w-xs">
      <Legend variant="label">Subscription Plan</Legend>
      <Description>Yearly and lifetime plans offer significant savings.</Description>
      <RadioGroup defaultValue="monthly">
        <Radio id="plan-monthly" value="monthly">
          Monthly ($9.99/month)
        </Radio>
        <Radio id="plan-yearly" value="yearly">
          Yearly ($99.99/year)
        </Radio>
        <Radio id="plan-lifetime" value="lifetime">
          Lifetime ($299.99)
        </Radio>
      </RadioGroup>
    </FieldSet>
  )
}
