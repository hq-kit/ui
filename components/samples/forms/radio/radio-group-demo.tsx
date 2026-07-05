import { Radio, RadioGroup } from "@/components/ui/radio"

export default function RadioGroupDemo() {
  return (
    <RadioGroup className="w-fit" defaultValue="comfortable">
      <Radio id="r1" value="default">
        Default
      </Radio>
      <Radio id="r2" value="comfortable">
        Comfortable
      </Radio>
      <Radio id="r3" value="compact">
        Compact
      </Radio>
    </RadioGroup>
  )
}
