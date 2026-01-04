import { Badge } from '@/components/ui/badge'
import { Label } from '@/components/ui/label'
import { Radio, RadioGroup } from '@/components/ui/radio'

const RadioGroupListGroupDemo = () => {
  const items = [
    { value: '1', label: 'Pro', price: '$39/mo' },
    { value: '2', label: 'Team', price: '$69/mo' },
    { value: '3', label: 'Enterprise', price: 'Custom' }
  ]

  return (
    <RadioGroup className='w-full max-w-96 gap-0 -space-y-px rounded-md shadow-xs' defaultValue='2'>
      {items.map((item) => (
        <div
          className='relative flex flex-col gap-4 border border-input p-4 outline-none first:rounded-t-md last:rounded-b-md has-data-[state=checked]:z-10 has-data-[state=checked]:border-primary/50 has-data-[state=checked]:bg-accent'
          key={item.value}
        >
          <div className='flex items-center justify-between'>
            <div className='flex items-center gap-2'>
              <Radio
                aria-describedby={`${item.value}-price`}
                aria-label={`plan-radio-${item.value}`}
                className='after:absolute after:inset-0'
                value={item.value}
              >
                <Label className='inline-flex items-center'>
                  {item.label}
                  {item.value === '2' && <Badge className='rounded-sm px-1.5 py-px text-xs'>Best Seller</Badge>}
                </Label>
              </Radio>
            </div>
            <div className='text-muted-foreground text-xs leading-[inherit]' id={`${item.value}-price`}>
              {item.price}
            </div>
          </div>
        </div>
      ))}
    </RadioGroup>
  )
}

export default RadioGroupListGroupDemo
