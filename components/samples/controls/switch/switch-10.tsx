'use client'

import { IconMoon, IconSun } from '@tabler/icons-react'
import { useState } from 'react'
import { Label } from '@/components/ui/label'
import { Switch } from '@/components/ui/switch'

const SwitchIconLabelDemo = () => {
  const [checked, setChecked] = useState<boolean>(true)

  return (
    <div className='inline-flex items-center gap-2'>
      <Switch aria-label='Toggle switch' id='icon-label' isSelected={checked} onChange={setChecked} />
      <Label htmlFor='icon-label'>
        <span className='sr-only'>Toggle switch</span>
        {checked ? (
          <IconMoon aria-hidden='true' className='size-4' />
        ) : (
          <IconSun aria-hidden='true' className='size-4' />
        )}
      </Label>
    </div>
  )
}

export default SwitchIconLabelDemo
