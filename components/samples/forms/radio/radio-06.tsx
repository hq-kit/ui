import { Label } from '@/components/ui/label'
import { Radio, RadioGroup } from '@/components/ui/radio'

const RadioGroupDescriptionDemo = () => {
  return (
    <RadioGroup defaultValue='basic'>
      <Radio id='plan-basic' value='basic'>
        <Label htmlFor='plan-basic'>Basic Plan</Label>
        <p className='text-muted-foreground text-xs'>Perfect for individuals just getting started</p>
      </Radio>
      <Radio id='plan-pro' value='pro'>
        <Label htmlFor='plan-pro'>Pro Plan</Label>
        <p className='text-muted-foreground text-xs'>Advanced features for power users and small teams</p>
      </Radio>
      <Radio id='plan-enterprise' value='enterprise'>
        <Label htmlFor='plan-enterprise'>Enterprise Plan</Label>
        <p className='text-muted-foreground text-xs'>Custom solutions for large organizations</p>
      </Radio>
    </RadioGroup>
  )
}

export default RadioGroupDescriptionDemo
