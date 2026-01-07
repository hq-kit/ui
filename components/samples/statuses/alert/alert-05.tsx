import { IconFileAlert } from '@tabler/icons-react'
import { Alert, AlertTitle } from '@/components/ui/alert'

const AlertAttachedIconDemo = () => {
  return (
    <Alert className='flex items-stretch p-0'>
      <div className='flex items-center rounded-l-lg border-r bg-destructive/10 p-2 text-destructive'>
        <IconFileAlert className='size-4' />
      </div>
      <AlertTitle className='p-3'>This file contains virus!</AlertTitle>
    </Alert>
  )
}

export default AlertAttachedIconDemo
