import { IconApple, IconAvocado, IconCherry } from '@tabler/icons-react'
import { Checkbox } from '@/components/ui/checkbox'
import { Label } from '@/components/ui/label'

const fruits = [
  { label: 'Apple', icon: IconApple },
  { label: 'Cherry', icon: IconCherry },
  { label: 'Avocado', icon: IconAvocado }
]

const CheckboxVerticalGroupDemo = () => {
  return (
    <div className='space-y-4'>
      <Label className='font-semibold'>Favorite Fruits</Label>
      <div className='flex flex-col gap-4'>
        {fruits.map(({ label, icon: Icon }) => (
          <div className='flex items-center gap-2' key={label}>
            <Checkbox id={label} />
            <Label htmlFor={label}>
              <Icon aria-hidden='true' className='size-4' />
              {label}
            </Label>
          </div>
        ))}
      </div>
    </div>
  )
}

export default CheckboxVerticalGroupDemo
