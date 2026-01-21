import { Radio, RadioGroup } from '@/components/ui/radio'

const RadioGroupColorsDemo = () => {
  return (
    <RadioGroup defaultValue='destructive'>
      <Radio className='[--primary:var(--color-red-500)]' value='destructive'>
        Destructive
      </Radio>
      <Radio className='[--primary:var(--color-green-500)]' value='success'>
        Success
      </Radio>
      <Radio className='[--primary:var(--color-blue-500)]' value='info'>
        Info
      </Radio>
    </RadioGroup>
  )
}

export default RadioGroupColorsDemo
