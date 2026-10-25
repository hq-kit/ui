import { Radio, RadioGroup } from "@/components/ui/radio"

export default function RadioGroupDisabled() {
  return (
    <RadioGroup className="w-fit" defaultValue="option2">
      <Radio id="disabled-1" isDisabled value="option1">
        Disabled
      </Radio>
      <Radio id="disabled-2" value="option2">
        Option 2
      </Radio>
      <Radio id="disabled-3" value="option3">
        Option 3
      </Radio>
    </RadioGroup>
  )
}
