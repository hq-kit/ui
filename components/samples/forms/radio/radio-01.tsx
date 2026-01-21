import { Radio, RadioGroup } from '@/components/ui/radio'

const RadioGroupDemo = () => {
  return (
    <RadioGroup defaultValue='higher-secondary'>
      <Radio value='higher-secondary'>Higher Secondary</Radio>
      <Radio value='graduation'>Graduation</Radio>
      <Radio value='post-graduation'>Post Graduation</Radio>
    </RadioGroup>
  )
}

export default RadioGroupDemo
