import { IconApple, IconAvocado, IconCherry } from '@tabler/icons-react'
import { Checkbox, CheckboxGroup } from '@/components/ui/checkbox'
import { Label } from '@/components/ui/label'

const fruits = [
  { label: 'Apple', icon: IconApple },
  { label: 'Cherry', icon: IconCherry },
  { label: 'Avocado', icon: IconAvocado }
]

const CheckboxVerticalGroupDemo = () => {
  return (
    <CheckboxGroup>
      <Label className='font-semibold'>Favorite Fruits</Label>
      <div className='flex flex-col gap-4'>
        {fruits.map(({ label, icon: Icon }) => (
          <Checkbox key={label} value={label}>
            <Label>
              <Icon aria-hidden='true' className='size-4' />
              {label}
            </Label>
          </Checkbox>
        ))}
      </div>
    </CheckboxGroup>
  )
}

export default CheckboxVerticalGroupDemo
