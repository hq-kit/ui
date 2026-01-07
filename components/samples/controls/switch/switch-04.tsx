import { Switch } from '@/components/ui/switch'

const SwitchColorsDemo = () => {
  return (
    <div className='flex items-center gap-3'>
      <Switch
        aria-label='Destructive Switch'
        className='focus-visible:*:border-destructive focus-visible:*:ring-destructive/20 data-selected:*:bg-destructive dark:focus-visible:*:ring-destructive/40'
        defaultSelected
      />
      <Switch
        aria-label='Success Switch'
        className='focus-visible:*:border-ring-green-600 focus-visible:*:ring-green-600/20 data-selected:*:bg-green-600 dark:data-selected:*:bg-green-400 dark:focus-visible:*:border-ring-green-400 dark:focus-visible:*:ring-green-400/40'
        defaultSelected
      />
      <Switch
        aria-label='Info Switch'
        className='focus-visible:*:border-ring-sky-600 focus-visible:*:ring-sky-600/20 data-selected:*:bg-sky-600 dark:data-selected:*:bg-sky-400 dark:focus-visible:*:border-ring-sky-400 dark:focus-visible:*:ring-sky-400/40'
        defaultSelected
      />
      <Switch
        aria-label='Warning Switch'
        className='focus-visible:*:border-ring-amber-600 focus-visible:*:ring-amber-600/20 data-selected:*:bg-amber-600 dark:data-selected:*:bg-amber-400 dark:focus-visible:*:border-ring-amber-400 dark:focus-visible:*:ring-amber-400/40'
        defaultSelected
      />
    </div>
  )
}

export default SwitchColorsDemo
