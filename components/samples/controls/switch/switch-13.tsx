'use client'

import { IconCheck, IconX } from '@tabler/icons-react'
import { useState } from 'react'
import { Switch } from '@/components/ui/switch'

const SwitchPermanentIndicatorDemo = () => {
  const [checked, setChecked] = useState<boolean>(true)

  return (
    <div>
      <div className='relative inline-grid h-7 grid-cols-[1fr_1fr] place-content-center items-center font-medium text-sm'>
        <Switch
          aria-label='Switch with permanent icon indicators'
          className='peer col-span-full *:absolute *:inset-0 *:h-[inherit] *:w-14 *:bg-input/50 [&_span]:z-10 [&_span]:size-6.5 [&_span]:transition-transform [&_span]:duration-300 [&_span]:ease-[cubic-bezier(0.16,1,0.3,1)] data-selected:[&_span]:translate-x-7 data-selected:[&_span]:rtl:-translate-x-7'
          isSelected={checked}
          onChange={setChecked}
        />
        <span className='pointer-events-none visible relative ml-0.5 flex min-w-8 translate-x-6 items-center justify-center text-center transition-transform duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] peer-data-selected:invisible peer-data-selected:translate-x-0 rtl:-translate-x-6 rtl:peer-data-selected:translate-x-0'>
          <IconX aria-hidden='true' className='size-4' />
        </span>
        <span className='pointer-events-none invisible relative flex min-w-8 items-center justify-center text-center transition-transform duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] peer-data-selected:visible peer-data-selected:-translate-x-full peer-data-selected:text-background peer-data-selected:rtl:translate-x-full'>
          <IconCheck aria-hidden='true' className='size-4' />
        </span>
      </div>
    </div>
  )
}

export default SwitchPermanentIndicatorDemo
