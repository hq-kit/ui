'use client'

import { useState } from 'react'
import { Label } from '@/components/ui/label'
import { Switch } from '@/components/ui/switch'

const SwitchToggleLabelDemo = () => {
  const [checked, setChecked] = useState<boolean>(true)

  return (
    <div className='inline-flex items-center gap-2'>
      <Switch aria-label='Toggle switch label' id='toggle-label' isSelected={checked} onChange={setChecked} />
      <Label className='font-medium text-sm' htmlFor='toggle-label'>
        {checked ? 'Yes' : 'No'}
      </Label>
    </div>
  )
}

export default SwitchToggleLabelDemo
