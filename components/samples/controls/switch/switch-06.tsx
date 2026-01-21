import { Switch } from '@/components/ui/switch'

const SwitchOutlineDemo = () => {
  return (
    <div className='flex items-center gap-3'>
      <Switch
        aria-label='Default outline Switch'
        className='focus-visible:*:border-primary data-selected:*:border-primary data-selected:*:bg-transparent [&_span]:border data-selected:[&_span]:border-background data-selected:[&_span]:bg-primary dark:data-selected:[&_span]:bg-primary'
        defaultSelected
      />
      <Switch
        aria-label='Destructive Switch'
        className='focus-visible:*:border-destructive focus-visible:*:ring-destructive/20 data-selected:*:border-destructive data-selected:*:bg-transparent dark:focus-visible:*:ring-destructive/40 [&_span]:border data-selected:[&_span]:border-background data-selected:[&_span]:bg-destructive dark:data-selected:[&_span]:bg-destructive'
        defaultSelected
      />
      <Switch
        aria-label='Success outline Switch'
        className='focus-visible:*:border-green-600 focus-visible:*:ring-green-600/20 data-selected:*:border-green-600 data-selected:*:bg-transparent dark:data-selected:*:border-green-400 dark:focus-visible:*:border-green-400 dark:focus-visible:*:ring-green-400/40 [&_span]:border data-selected:[&_span]:border-background data-selected:[&_span]:bg-green-600 dark:data-selected:[&_span]:bg-green-400'
        defaultSelected
      />
      <Switch
        aria-label='Info outline Switch'
        className='focus-visible:*:border-sky-600 focus-visible:*:ring-sky-600/20 data-selected:*:border-sky-600 data-selected:*:bg-transparent dark:data-selected:*:border-sky-400 dark:focus-visible:*:border-sky-400 dark:focus-visible:*:ring-sky-400/40 [&_span]:border data-selected:[&_span]:border-background data-selected:[&_span]:bg-sky-600 dark:data-selected:[&_span]:bg-sky-400'
        defaultSelected
      />
      <Switch
        aria-label='Warning outline Switch'
        className='focus-visible:*:border-amber-600 focus-visible:*:ring-amber-600/20 data-selected:*:border-amber-600 data-selected:*:bg-transparent dark:data-selected:*:border-amber-400 dark:focus-visible:*:border-amber-400 dark:focus-visible:*:ring-amber-400/40 [&_span]:border data-selected:[&_span]:border-background data-selected:[&_span]:bg-amber-600 dark:data-selected:[&_span]:bg-amber-400'
        defaultSelected
      />
    </div>
  )
}

export default SwitchOutlineDemo
