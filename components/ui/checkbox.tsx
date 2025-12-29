'use client'

import { IconCheck, IconMinus } from '@tabler/icons-react'
import { useId } from 'react'
import {
  type CheckboxGroupProps,
  type CheckboxProps,
  composeRenderProps,
  Checkbox as RACCheckbox,
  CheckboxGroup as RACCheckboxGroup
} from 'react-aria-components'
import { cn } from '@/lib/utils'
import { Label } from './label'

const CheckboxGroup = ({ className, ...props }: CheckboxGroupProps) => {
  return (
    <RACCheckboxGroup
      {...props}
      className={cn(
        'space-y-2 has-[[slot=description]]:space-y-6 has-[[slot=description]]:**:data-[slot=label]:font-medium **:[[slot=description]]:block',
        className
      )}
      data-slot='control'
    />
  )
}

const Checkbox = ({ className, ...props }: CheckboxProps) => {
  const id = useId()
  return (
    <div className='flex items-center gap-2'>
      <RACCheckbox
        className={composeRenderProps(className, (className) =>
          cn(
            'peer group/checkbox grid size-4 shrink-0 place-content-center rounded-[4px] border border-input shadow-xs outline-none transition focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50 disabled:cursor-not-allowed disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-destructive/20 data-selected:border-primary data-selected:bg-primary data-selected:text-primary-foreground dark:bg-input/30 dark:data-selected:bg-primary dark:aria-invalid:ring-destructive/40',
            className
          )
        )}
        data-slot='checkbox'
        data-state={props.isSelected ? 'checked' : 'unchecked'}
        id={props.id ?? id}
        slot='checkbox'
        {...props}
      >
        <div
          className='grid place-content-center text-current transition-none'
          data-slot='checkbox-indicator'
          data-state={props.isSelected ? 'checked' : 'unchecked'}
        >
          <IconMinus className='hidden size-3.5 group-data-indeterminate/checkbox:block group-data-selected/checkbox:hidden' />
          <IconCheck className='hidden size-3.5 group-data-selected/checkbox:block group-data-indeterminate/checkbox:hidden' />
        </div>
      </RACCheckbox>
      {props.children && typeof props.children === 'string' && <Label htmlFor={props.id ?? id}>{props.children}</Label>}
    </div>
  )
}

export { Checkbox, CheckboxGroup }
