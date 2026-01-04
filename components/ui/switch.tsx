'use client'

import type { ReactNode, RefObject } from 'react'
import {
  composeRenderProps,
  Label,
  Switch as RACSwitch,
  type SwitchProps as RACSwitchProps
} from 'react-aria-components'
import { cn } from '@/lib/utils'

interface SwitchProps extends RACSwitchProps {
  ref?: RefObject<HTMLLabelElement>
}

const Switch = ({ children, className, ref, ...props }: SwitchProps) => {
  return (
    <RACSwitch
      className={composeRenderProps(className, (className) =>
        cn('group/switch inline-flex touch-none items-center sm:text-sm', className)
      )}
      ref={ref}
      {...props}
    >
      <div
        className={cn(
          'mr-2 inline-flex h-5 w-8 items-center rounded-full border bg-input px-0.5 shadow-xs transition',
          'group-data-focus-visible/switch:border-ring group-data-focus-visible/switch:ring-2 group-data-focus-visible/switch:ring-ring/50 group-data-focus-visible/switch:ring-offset-2',
          'group-hover/switch:border-ring group-data-selected/switch:bg-primary',
          'cursor-pointer group-data-disabled/switch:cursor-default group-data-disabled/switch:opacity-50'
        )}
        data-slot='switch'
      >
        <span
          className='size-3.5 rounded-full border bg-primary-foreground transition-transform group-data-selected/switch:translate-x-3'
          data-slot='switch-thumb'
        />
      </div>
      <Label>{children as ReactNode}</Label>
    </RACSwitch>
  )
}

export { Switch }
