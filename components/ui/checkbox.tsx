'use client'

import { IconCheck, IconMinus } from '@tabler/icons-react'
import {
  type CheckboxGroupProps,
  type CheckboxProps,
  composeRenderProps,
  Label,
  Checkbox as RACCheckbox,
  CheckboxGroup as RACCheckboxGroup
} from 'react-aria-components'
import { cn } from '@/lib/utils'

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
  return (
    <RACCheckbox
      className={composeRenderProps(className, (className) => cn('group/box flex items-center gap-2', className))}
      data-slot='control'
      {...props}
    >
      {({ isSelected, isIndeterminate }) => (
        <>
          <div
            className={cn(
              'relative flex size-4 shrink-0 items-center justify-center rounded-[4px] border bg-transparent shadow-xs transition dark:bg-input/30',
              'border-input group-hover/box:border-ring/50 group-has-invalid/box:border-destructive/70',
              'group-data-selected/box:group-data-has-invalid/box:border-destructive/70 group-data-selected/box:border-primary group-data-selected/box:bg-primary group-data-selected/box:text-primary-foreground group-data-selected/box:group-has-invalid/box:border-destructive/70 group-data-selected/box:group-has-invalid/box:bg-destructive group-data-selected/box:group-has-invalid/box:text-destructive-foreground dark:group-data-selected/box:bg-primary',
              'group-data-focus/box:border-primary group-data-focus/box:group-has-invalid/box:border-destructive/70',
              'group-data-focus-visible/box:border-primary/70 group-data-focus-visible/box:ring-[3px] group-data-focus-visible/box:ring-ring/50 group-data-focus-visible/box:group-has-invalid/box:border-destructive/70 group-data-focus-visible/box:group-has-invalid/box:ring-destructive/20',
              'group-data-indeterminate/box:border-primary group-data-indeterminate/box:bg-primary group-data-indeterminate/box:text-primary-foreground',
              'dark:group-data-indeterminate/box:border-primary dark:group-data-indeterminate/box:bg-primary dark:group-data-indeterminate/box:text-primary-foreground',
              className
            )}
          >
            {isIndeterminate ? <IconMinus className='size-3' /> : isSelected ? <IconCheck className='size-3' /> : null}
          </div>
          {typeof props.children === 'string' ? (
            <Label
              className='not-last:text-sm/4 text-sm transition group-has-invalid/box:text-destructive'
              elementType='span'
            >
              {props.children}
            </Label>
          ) : (
            props.children
          )}
        </>
      )}
    </RACCheckbox>
  )
}

export { Checkbox, CheckboxGroup }
