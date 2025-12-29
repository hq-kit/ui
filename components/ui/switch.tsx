'use client'

import { useId } from 'react'
import { composeRenderProps, Switch as RACSwitch, type SwitchProps } from 'react-aria-components'
import { cn } from '@/lib/utils'
import { Label } from './label'

const Switch = ({ className, ...props }: SwitchProps) => {
  const id = useId()
  return (
    <div className='flex items-center gap-2'>
      <RACSwitch
        className={composeRenderProps(className, (className) =>
          cn(
            'peer group inline-flex h-[1.15rem] w-8 shrink-0 items-center rounded-full border border-transparent shadow-xs outline-none transition-all',
            'bg-input data-selected:bg-primary dark:bg-input/80',
            'focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50',
            'data-disabled:cursor-not-allowed data-disabled:opacity-50',
            className
          )
        )}
        data-slot='switch'
        data-state={props.isSelected ? 'checked' : 'unchecked'}
        id={props.id ?? id}
        slot='switch'
        {...props}
      >
        <span
          className='pointer-events-none block size-4 translate-x-0 rounded-full bg-background ring-0 transition-transform group-data-selected:translate-x-[calc(100%-2px)] dark:bg-foreground dark:group-data-selected:bg-primary-foreground'
          data-slot='thumb'
          data-state={props.isSelected ? 'checked' : 'unchecked'}
        />
      </RACSwitch>
      {props.children && typeof props.children === 'string' && <Label htmlFor={props.id ?? id}>{props.children}</Label>}
    </div>
  )
}

export { Switch }
