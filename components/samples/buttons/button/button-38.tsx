import { IconBell } from '@tabler/icons-react'
import { Button } from '@/components/ui/button'

const IconButtonNotificationDotDemo = () => {
  return (
    <Button className='relative' size='icon' variant='outline'>
      <IconBell />
      <span className='absolute -top-0.5 -right-0.5 size-2 animate-bounce rounded-full bg-sky-600 dark:bg-sky-400' />
      <span className='sr-only'>Notifications</span>
    </Button>
  )
}

export default IconButtonNotificationDotDemo
