import { IconAlertTriangle } from '@tabler/icons-react'
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert'

const AlertSoftDestructiveDemo = () => {
  return (
    <Alert className='border-none bg-destructive/10 text-destructive'>
      <IconAlertTriangle />
      <AlertTitle>Upload failed</AlertTitle>
      <AlertDescription className='text-destructive/80'>
        Something went wrong. Please try again or use a different file format.
      </AlertDescription>
    </Alert>
  )
}

export default AlertSoftDestructiveDemo
