import { Radio, RadioGroup } from '@/components/ui/radio'

const RadioGroupDashedDemo = () => {
  return (
    <RadioGroup defaultValue='standard'>
      <Radio className='border-primary border-dashed focus-visible:border-primary' value='standard'>
        Standard Shipping
      </Radio>
      <Radio className='border-primary border-dashed focus-visible:border-primary' value='express'>
        Express Delivery
      </Radio>
      <Radio className='border-primary border-dashed focus-visible:border-primary' value='overnight'>
        Overnight Shipping
      </Radio>
    </RadioGroup>
  )
}

export default RadioGroupDashedDemo
