import { IconChartPie, IconCode, IconPalette } from '@tabler/icons-react'
import { Checkbox } from '@/components/ui/checkbox'
import { Label } from '@/components/ui/label'

const skills = [
  { label: 'Web Development', icon: IconCode },
  { label: 'Data Analysis', icon: IconChartPie },
  { label: 'Graphic Design', icon: IconPalette }
]

const CheckboxListGroupDemo = () => {
  return (
    <ul className='flex w-full flex-col divide-y rounded-md border'>
      {skills.map(({ label, icon: Icon }) => (
        <li key={label}>
          <Label className='flex items-center justify-between gap-2 px-5 py-3' htmlFor={label}>
            <span className='flex items-center gap-2'>
              <Icon className='size-4' /> {label}
            </span>
            <Checkbox id={label} />
          </Label>
        </li>
      ))}
    </ul>
  )
}

export default CheckboxListGroupDemo
