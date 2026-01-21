import { Radio, RadioGroup } from '@/components/ui/radio'

const RadioGroupSizesDemo = () => {
  return (
    <RadioGroup defaultValue='default' orientation='horizontal'>
      <Radio value='default'>Default</Radio>
      <Radio className='*:data-[slot=box]:size-5 [&_svg]:size-3' value='medium'>
        Medium
      </Radio>
      <Radio className='*:data-[slot=box]:size-6 [&_svg]:size-3.5' value='large'>
        Large
      </Radio>
    </RadioGroup>
  )
}

export default RadioGroupSizesDemo
