'use client'

import { useState } from 'react'
import { Switch } from '@/components/ui/switch'

const SwitchSquarePermanentIndicatorDemo = () => {
  const [checked, setChecked] = useState(false)
  return (
    <div>
      <div className='relative inline-grid h-8 grid-cols-[1fr_1fr] place-content-center items-center font-medium text-sm'>
        <Switch
          aria-label='Square switch with permanent text indicators'
          className='peer col-span-full *:absolute *:inset-0 *:h-[inherit] *:w-auto *:rounded-md *:bg-input/50 [&_span]:z-10 [&_span]:h-full [&_span]:w-1/2 [&_span]:rounded-sm [&_span]:transition-transform [&_span]:duration-300 [&_span]:ease-[cubic-bezier(0.16,1,0.3,1)] data-selected:[&_span]:translate-x-8.75 data-selected:[&_span]:rtl:-translate-x-8.75'
          isSelected={checked}
          onChange={setChecked}
        />
        <span className='pointer-events-none relative ml-0.5 flex translate-x-full items-center justify-center px-2 text-center transition-transform duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] peer-data-[selected=true]:invisible peer-data-[selected=true]:translate-x-0 rtl:-translate-x-full rtl:peer-data-[selected=true]:translate-x-0'>
          <span className='font-medium text-[10px] uppercase'>No</span>
        </span>
        <span className='pointer-events-none invisible relative mr-0.5 flex items-center justify-center px-2 text-center transition-transform duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] peer-data-[selected=true]:visible peer-data-[selected=true]:-translate-x-full peer-data-[selected=true]:text-background peer-data-[selected=true]:rtl:translate-x-full'>
          <span className='font-medium text-[10px] uppercase'>Yes</span>
        </span>
      </div>
    </div>
  )
}

export default SwitchSquarePermanentIndicatorDemo
