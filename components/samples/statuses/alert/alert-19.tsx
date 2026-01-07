import { IconChecks } from '@tabler/icons-react'
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert'

const AlertOutlineSuccessDemo = () => {
  return (
    <Alert className='border-green-600 text-green-600 dark:border-green-400 dark:text-green-400'>
      <IconChecks />
      <AlertTitle>Account created successfully</AlertTitle>
      <AlertDescription className='text-green-600/80 dark:text-green-400/80'>
        You are all set! You can now log in and start exploring your dashboard.
      </AlertDescription>
    </Alert>
  )
}

export default AlertOutlineSuccessDemo
