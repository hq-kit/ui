import { Checkbox, CheckboxGroup } from '@/components/ui/checkbox'
import { Label } from '@/components/ui/label'

const technologies = ['React', 'Next.js', 'Remix']

const CheckboxHorizontalGroupDemo = () => {
  return (
    <CheckboxGroup>
      <Label className='font-semibold'>Technologies</Label>
      <div className='flex flex-wrap items-center gap-x-4 gap-y-2'>
        {technologies.map((label) => (
          <Checkbox key={label} value={label}>
            {label}
          </Checkbox>
        ))}
      </div>
    </CheckboxGroup>
  )
}

export default CheckboxHorizontalGroupDemo
