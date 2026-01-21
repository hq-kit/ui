'use client'

import { IconMoon, IconSun } from '@tabler/icons-react'
import { useId, useState } from 'react'
import { Switch } from '@/components/ui/switch'

const SwitchDualIconLabelDemo = () => {
  const id = useId()
  const [checked, setChecked] = useState(true)

  const toggleSwitch = () => setChecked((prev) => !prev)

  return (
    <div className='group inline-flex items-center gap-2'>
      <button
        aria-controls={id}
        className='cursor-pointer text-left font-medium text-sm group-has-data-selected:text-muted-foreground/70'
        id={`${id}-light`}
        onClick={() => setChecked(false)}
        type='button'
      >
        <IconSun aria-hidden='true' className='size-4' />
      </button>
      <Switch
        aria-label='Toggle between dark and light mode'
        aria-labelledby={`${id}-dark ${id}-light`}
        id={id}
        isSelected={checked}
        onChange={toggleSwitch}
      />
      <button
        aria-controls={id}
        className='cursor-pointer text-right font-medium text-muted-foreground/70 text-sm group-has-data-selected:text-foreground'
        id={`${id}-dark`}
        onClick={() => setChecked(true)}
        type='button'
      >
        <IconMoon aria-hidden='true' className='size-4' />
      </button>
    </div>
  )
}

export default SwitchDualIconLabelDemo
