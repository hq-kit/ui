import { Label } from '@/components/ui/label'
import { Radio, RadioGroup } from '@/components/ui/radio'

const RadioGroupCardRadioDemo = () => {
  return (
    <RadioGroup className='w-full max-w-96 gap-2' defaultValue='1'>
      <div className='relative flex w-full items-center gap-3 rounded-md border border-input p-4 shadow-xs outline-none has-data-selected:border-primary/50'>
        <Radio
          aria-describedby='1-description'
          aria-label='plan-radio-basic'
          className='size-5 after:absolute after:inset-0'
          id='1'
          value='1'
        />
        <div className='grid grow gap-2'>
          <Label className='justify-between' htmlFor='1'>
            Basic <span className='font-normal text-muted-foreground text-xs leading-[inherit]'>Free</span>
          </Label>
          <p className='text-muted-foreground text-xs' id='1-description'>
            Get 1 project with 1 teams members.
          </p>
        </div>
      </div>

      <div className='relative flex w-full items-center gap-3 rounded-md border border-input p-4 shadow-xs outline-none has-data-selected:border-primary/50'>
        <Radio
          aria-describedby='2-description'
          aria-label='plan-radio-basic'
          className='size-5 after:absolute after:inset-0'
          id='2'
          value='2'
        />
        <div className='grid grow gap-2'>
          <Label className='justify-between' htmlFor='2'>
            Premium <span className='font-normal text-muted-foreground text-xs leading-[inherit]'>$5.00</span>
          </Label>
          <p className='text-muted-foreground text-xs' id='2-description'>
            Get 5 projects with 5 team members.
          </p>
        </div>
      </div>
    </RadioGroup>
  )
}

export default RadioGroupCardRadioDemo
