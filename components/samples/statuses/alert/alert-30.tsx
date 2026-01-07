import { IconAlertTriangle } from '@tabler/icons-react'
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert'

const AlertSolidDestructiveDemo = () => {
  return (
    <Alert className='border-none bg-destructive text-white dark:bg-destructive/60'>
      <IconAlertTriangle />
      <AlertTitle>Couldn&apos;t save changes</AlertTitle>
      <AlertDescription className='text-white/80'>Please try again or reload the page.</AlertDescription>
    </Alert>
  )
}

export default AlertSolidDestructiveDemo
