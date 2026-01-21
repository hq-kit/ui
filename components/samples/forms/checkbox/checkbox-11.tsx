import { IconCircle, IconHeart, IconStar } from '@tabler/icons-react'
import { Checkbox } from 'react-aria-components'

const CheckboxCustomIconsDemo = () => {
  return (
    <div className='flex items-center gap-2'>
      <Checkbox
        aria-label='Heart icon'
        className='group rounded-sm outline-none focus-visible:ring-3 focus-visible:ring-ring/50'
        data-slot='checkbox'
        defaultSelected
      >
        <span className='group-data-selected:hidden'>
          <IconHeart className='stroke-1' />
        </span>
        <span className='hidden group-data-selected:block'>
          <IconHeart className='fill-destructive stroke-1 stroke-destructive' />
        </span>
      </Checkbox>
      <Checkbox
        aria-label='Star icon'
        className='group rounded-sm outline-none focus-visible:ring-3 focus-visible:ring-ring/50'
        data-slot='checkbox'
        defaultSelected
      >
        <span className='group-data-selected:hidden'>
          <IconStar className='stroke-1' />
        </span>
        <span className='hidden group-data-selected:block'>
          <IconStar className='fill-amber-500 stroke-1 stroke-amber-500 dark:fill-amber-400 dark:stroke-amber-400' />
        </span>
      </Checkbox>
      <Checkbox
        aria-label='Circle icon'
        className='group rounded-sm outline-none focus-visible:ring-3 focus-visible:ring-ring/50'
        data-slot='checkbox'
        defaultSelected
      >
        <span className='group-data-selected:hidden'>
          <IconCircle className='stroke-1' />
        </span>
        <span className='hidden group-data-selected:block'>
          <IconCircle className='fill-green-600 stroke-1 stroke-green-600 dark:fill-green-400 dark:stroke-green-400' />
        </span>
      </Checkbox>
    </div>
  )
}

export default CheckboxCustomIconsDemo
