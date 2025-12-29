'use client'

import { IconCheck, IconX } from '@tabler/icons-react'
import { useState } from 'react'
import { Switch } from '@/components/ui/switch'

const SwitchIconIndicatorDemo = () => {
  const [checked, setChecked] = useState<boolean>(true)

  return (
    <div>
      <div className='relative inline-grid h-7 grid-cols-[1fr_1fr] items-center font-medium text-sm'>
        <Switch
          aria-label='Switch with icon indicators'
          className='peer absolute inset-0 h-[inherit] w-14 bg-input/50 data-selected:bg-input/50 [&_span]:size-6.5 [&_span]:bg-background! [&_span]:transition-transform [&_span]:duration-300 [&_span]:ease-[cubic-bezier(0.16,1,0.3,1)] data-selected:[&_span]:translate-x-7 data-selected:[&_span]:rtl:-translate-x-7'
          isSelected={checked}
          onChange={setChecked}
        />
        <span className='pointer-events-none relative ml-1.75 flex min-w-7 items-center text-center peer-data-selected:text-muted-foreground/70'>
          <IconCheck aria-hidden='true' className='size-4' />
        </span>
        <span className='pointer-events-none relative -ms-0.25 flex min-w-7 items-center text-center text-muted-foreground/70'>
          <IconX aria-hidden='true' className='size-4' />
        </span>
      </div>
    </div>
  )
}

export default SwitchIconIndicatorDemo
