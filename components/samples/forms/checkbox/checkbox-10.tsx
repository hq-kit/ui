import { IconCircleCheck } from '@tabler/icons-react'
import { Checkbox } from 'react-aria-components'

const CheckboxFilledIconDemo = () => {
  return (
    <div className='flex items-center gap-2'>
      <Checkbox
        aria-label='Color destructive'
        className='group grid size-7 shrink-0 place-content-center rounded-full bg-destructive shadow-xs outline-none transition-shadow focus-visible:ring-[3px] focus-visible:ring-destructive/20 data-selected:text-destructive dark:focus-visible:ring-destructive/40'
        data-slot='checkbox'
        defaultSelected
      >
        <div
          className='hidden items-center justify-center text-current transition-none group-data-selected:flex'
          data-slot='checkbox-indicator'
        >
          <IconCircleCheck className='size-5.5 fill-white stroke-current' />
        </div>
      </Checkbox>
      <Checkbox
        aria-label='Color info'
        className='group grid size-7 shrink-0 place-content-center rounded-full bg-sky-600 shadow-xs outline-none transition-shadow focus-visible:ring-[3px] focus-visible:ring-sky-600/20 data-selected:text-sky-600 dark:bg-sky-400 dark:data-selected:text-sky-400 dark:focus-visible:ring-sky-400/40'
        data-slot='checkbox'
        defaultSelected
      >
        <div
          className='hidden items-center justify-center text-current transition-none group-data-selected:flex'
          data-slot='checkbox-indicator'
        >
          <IconCircleCheck className='size-5.5 fill-white stroke-current' />
        </div>
      </Checkbox>
      <Checkbox
        aria-label='Color success'
        className='group grid size-7 shrink-0 place-content-center rounded-full bg-green-600 shadow-xs outline-none transition-shadow focus-visible:ring-[3px] focus-visible:ring-green-600/20 data-selected:text-green-600 dark:bg-green-400 dark:data-selected:text-green-400 dark:focus-visible:ring-green-400/40'
        data-slot='checkbox'
        defaultSelected
      >
        <div
          className='hidden items-center justify-center text-current transition-none group-data-selected:flex'
          data-slot='checkbox-indicator'
        >
          <IconCircleCheck className='size-5.5 fill-white stroke-current' />
        </div>
      </Checkbox>
    </div>
  )
}

export default CheckboxFilledIconDemo
