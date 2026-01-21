import { IconFileAlert } from '@tabler/icons-react'
import { Alert, AlertTitle } from '@/components/ui/alert'
import { Avatar } from '@/components/ui/avatar'

const AlertFocusedIconDemo = () => {
  return (
    <Alert className='flex items-center gap-3'>
      <Avatar
        className='rounded-md'
        fallback={<IconFileAlert className='size-4' />}
        fallbackClassName='bg-destructive dark:bg-destructive/60 rounded-md text-white'
      />
      <AlertTitle>This file contains virus!</AlertTitle>
    </Alert>
  )
}

export default AlertFocusedIconDemo
