import { Switch } from '@/components/ui/switch'

const SwitchGradientDemo = () => {
  return (
    <Switch
      aria-label='Destructive Switch'
      className='h-6 w-10 border-none bg-linear-to-r from-amber-500 to-destructive/60 focus-visible:border-destructive focus-visible:ring-destructive/20 data-[selected=true]:from-sky-400 data-[selected=true]:to-indigo-700 dark:focus-visible:ring-destructive/40 [&_span]:size-5 [&_span]:translate-x-0.25! data-[selected=true]:[&_span]:translate-x-4.75! data-[selected=true]:[&_span]:rtl:-translate-x-4.75!'
    />
  )
}

export default SwitchGradientDemo
