import { IconCrown, IconUser } from '@tabler/icons-react'
import { Label } from '@/components/ui/label'
import { Radio, RadioGroup } from '@/components/ui/radio'

const RadioGroupCardVerticalRadioDemo = () => {
  return (
    <RadioGroup defaultValue='1' orientation='horizontal'>
      <div className='relative flex w-full flex-col items-center gap-3 rounded-md border border-input p-4 shadow-xs outline-none has-data-selected:border-primary/50'>
        <Radio
          aria-describedby='1-description'
          aria-label='plan-radio-basic'
          className='order-1 size-5 after:absolute after:inset-0 [&_svg]:size-3'
          id='1'
          value='1'
        />
        <div className='grid grow justify-items-center gap-2'>
          <IconUser />
          <Label className='justify-center' htmlFor='1'>
            Basic
          </Label>
          <p className='text-center text-muted-foreground text-xs' id='1-description'>
            Get 1 project with 1 teams members.
          </p>
        </div>
      </div>
      <div className='relative flex w-full flex-col items-center gap-3 rounded-md border border-input p-4 shadow-xs outline-none has-data-selected:border-primary/50'>
        <Radio
          aria-describedby='2-description'
          aria-label='plan-radio-premium'
          className='order-1 size-5 after:absolute after:inset-0 [&_svg]:size-3'
          id='2'
          value='2'
        />
        <div className='grid grow justify-items-center gap-2'>
          <IconCrown />
          <Label className='justify-center' htmlFor='2'>
            Premium
          </Label>
          <p className='text-center text-muted-foreground text-xs' id='2-description'>
            Get 5 projects with 5 team members.
          </p>
        </div>
      </div>
    </RadioGroup>
  )
}

export default RadioGroupCardVerticalRadioDemo
