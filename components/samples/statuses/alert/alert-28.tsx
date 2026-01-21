import { IconAlertCircle } from '@tabler/icons-react'
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert'

const AlertSolidWarningDemo = () => {
  return (
    <Alert className='border-none bg-amber-600 text-white dark:bg-amber-400'>
      <IconAlertCircle />
      <AlertTitle>Some details are missing</AlertTitle>
      <AlertDescription className='text-white/80'>Complete your profile to get the best experience.</AlertDescription>
    </Alert>
  )
}

export default AlertSolidWarningDemo
