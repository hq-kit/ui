'use client'

import { useId, useState } from 'react'
import { Switch } from '@/components/ui/switch'

const SwitchDualToggleLabelDemo = () => {
  const id = useId()
  const [checked, setChecked] = useState(false)

  const toggleSwitch = () => setChecked((prev) => !prev)

  return (
    <div className='group inline-flex items-center gap-2' data-state={checked ? 'checked' : 'unchecked'}>
      <button
        aria-controls={id}
        className='cursor-pointer text-right font-medium text-sm group-data-[state=checked]:text-muted-foreground/70'
        id={`${id}-yes`}
        onClick={() => setChecked(false)}
        type='button'
      >
        Yes
      </button>
      <Switch aria-labelledby={`${id}-yes ${id}-no`} id={id} isSelected={checked} onChange={toggleSwitch} />
      <button
        aria-controls={id}
        className='cursor-pointer text-left font-medium text-sm group-data-[state=unchecked]:text-muted-foreground/70'
        id={`${id}-no`}
        onClick={() => setChecked(true)}
        type='button'
      >
        No
      </button>
    </div>
  )
}

export default SwitchDualToggleLabelDemo
