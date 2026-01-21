import { IconAlertCircle } from '@tabler/icons-react'
import { Alert, AlertTitle } from '@/components/ui/alert'
import { Button } from '@/components/ui/button'

const AlertWithActionDemo = () => {
  return (
    <Alert className='flex items-center justify-between [&>svg]:translate-y-0'>
      <IconAlertCircle />
      <AlertTitle className='flex-1'>New message!</AlertTitle>
      <Button className='h-7 cursor-pointer rounded-md px-2' variant='outline'>
        Open
      </Button>
    </Alert>
  )
}

export default AlertWithActionDemo
