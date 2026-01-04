import { Radio, RadioGroup } from '@/components/ui/radio'

const RadioGroupHorizontalDemo = () => {
  return (
    <RadioGroup defaultValue='beginner' orientation='horizontal'>
      <Radio value='beginner'>Beginner</Radio>
      <Radio value='intermediate'>Intermediate</Radio>
      <Radio value='advanced'>Advanced</Radio>
    </RadioGroup>
  )
}

export default RadioGroupHorizontalDemo
