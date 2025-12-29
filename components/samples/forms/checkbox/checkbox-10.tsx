import { Checkbox } from '@/components/ui/checkbox'

const CheckboxColorsDemo = () => {
  return (
    <div className='flex items-center gap-2'>
      <Checkbox
        aria-label='Color destructive'
        className='focus-visible:ring-destructive/20 data-selected:border-destructive data-selected:bg-destructive! dark:text-white dark:focus-visible:ring-destructive/40'
        defaultSelected
      />
      <Checkbox
        aria-label='Color info'
        className='focus-visible:ring-sky-600/20 data-selected:border-sky-600 data-selected:bg-sky-600 dark:text-white dark:data-selected:border-sky-400 dark:data-selected:bg-sky-400 dark:focus-visible:ring-sky-400/40'
        defaultSelected
      />
      <Checkbox
        aria-label='Color success'
        className='focus-visible:ring-green-600/20 data-selected:border-green-600 data-selected:bg-green-600 dark:text-white dark:data-selected:border-green-400 dark:data-selected:bg-green-400 dark:focus-visible:ring-green-400/40'
        defaultSelected
      />
    </div>
  )
}

export default CheckboxColorsDemo
