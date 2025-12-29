import { IconChartPie, IconCode, IconPalette } from '@tabler/icons-react'
import { Label } from '@/components/ui/label'
import { Switch } from '@/components/ui/switch'

const skills = [
  { label: 'Web Development', icon: IconCode },
  { label: 'Data Analysis', icon: IconChartPie },
  { label: 'Graphic Design', icon: IconPalette }
]

const SwitchListGroupDemo = () => {
  return (
    <fieldset className='w-full max-w-96 space-y-4'>
      <legend className='font-medium text-foreground text-sm leading-none'>Switch to your preferred field: </legend>
      <ul className='flex w-full flex-col divide-y rounded-md border'>
        {skills.map(({ label, icon: Icon }) => (
          <li key={label}>
            <Label className='flex items-center justify-between gap-2 px-5 py-3' htmlFor={label}>
              <span className='flex items-center gap-2'>
                <Icon className='size-4' /> {label}
              </span>
              <Switch id={label} />
            </Label>
          </li>
        ))}
      </ul>
    </fieldset>
  )
}

export default SwitchListGroupDemo
