import { useId } from 'react'
import { Label } from '@/components/ui/label'
import { Switch } from '@/components/ui/switch'

const SwitchCardDemo = () => {
  const id = useId()

  return (
    <div className='relative flex w-full items-start gap-2 rounded-md border border-input p-4 shadow-xs outline-none has-data-[selected=true]:border-primary/50'>
      <Switch
        aria-describedby={`${id}-description`}
        className='order-1 *:h-4 *:w-6 after:absolute after:inset-0 [&_span]:size-3 data-selected:[&_span]:translate-x-2.5 data-selected:[&_span]:rtl:-translate-x-2.5'
        id={id}
      />
      <div className='flex grow gap-3'>
        <img
          alt='Google Icon'
          className='size-5'
          src='https://cdn.shadcnstudio.com/ss-assets/brand-logo/google-icon.png?width=20&height=20&format=auto'
        />
        <div className='grid grow gap-2'>
          <Label htmlFor={id}>Google Cloud Backup</Label>
          <p className='text-muted-foreground text-xs' id={`${id}-description`}>
            Backup every picture, video and PDFs.
          </p>
        </div>
      </div>
    </div>
  )
}

export default SwitchCardDemo
