import { Badge } from '@/components/ui/badge'
import { Label } from '@/components/ui/label'
import { Radio, RadioGroup } from '@/components/ui/radio'

const RadioGroupSplitListGroupDemo = () => {
  const items = [
    { value: '1', label: 'Pro', price: '$39/mo' },
    { value: '2', label: 'Team', price: '$69/mo' },
    { value: '3', label: 'Enterprise', price: 'Custom' }
  ]

  return (
    <RadioGroup className='w-full max-w-96 gap-0 space-y-2 rounded-md *:rounded-full' defaultValue='2'>
      {items.map((item) => (
        <div
          className='relative flex flex-col gap-4 border border-input p-4 outline-none has-data-selected:z-10 has-data-selected:bg-primary has-data-selected:text-primary-foreground'
          key={item.value}
        >
          <div className='group flex items-center justify-between'>
            <div className='flex items-center gap-2'>
              <Radio
                aria-describedby={`${item.value}-price`}
                aria-label={`plan-radio-${item.value}`}
                className='gap-0 rounded-full text-primary [--primary:var(--color-white)] after:absolute after:inset-0 data-selected:border-primary-foreground data-selected:[&_svg]:fill-foreground'
                id={`${item.value}`}
                value={item.value}
              />
              <Label className='inline-flex items-center' htmlFor={`${item.value}`}>
                {item.label}
                {item.value === '2' && (
                  <Badge
                    className='rounded-sm border-green-500 bg-green-500/10 px-1.5 py-px text-green-500 text-xs'
                    variant='outline'
                  >
                    Best Seller
                  </Badge>
                )}
              </Label>
            </div>
            <div
              className='text-xs leading-[inherit] group-has-data-selected:text-primary-foreground'
              id={`${item.value}-price`}
            >
              {item.price}
            </div>
          </div>
        </div>
      ))}
    </RadioGroup>
  )
}

export default RadioGroupSplitListGroupDemo
