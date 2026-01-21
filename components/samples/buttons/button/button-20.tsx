import { IconCopy } from '@tabler/icons-react'
import { Button } from '@/components/ui/button'

const ButtonCopyDemo = () => {
  return (
    <div className='flex h-11.5 items-center overflow-hidden rounded-full border px-1'>
      <p className='max-w-56 overflow-hidden truncate px-2.5 text-muted-foreground text-sm'>
        https://shadcnstudio.com/docs/components/button
      </p>
      <Button
        className='rounded-full bg-sky-600 text-white hover:bg-sky-600/90 focus-visible:ring-sky-600/20 dark:bg-sky-400/60 dark:focus-visible:ring-sky-400/40'
        size='icon'
      >
        <IconCopy />
        <span className='sr-only'>Copy</span>
      </Button>
    </div>
  )
}

export default ButtonCopyDemo
