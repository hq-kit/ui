import { IconAlertCircle } from '@tabler/icons-react'
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert'

const AlertSolidDemo = () => {
  return (
    <Alert className='border-none bg-primary text-primary-foreground'>
      <IconAlertCircle />
      <AlertTitle>Editing your profile</AlertTitle>
      <AlertDescription className='text-primary-foreground/80'>
        Changes won&apos;t be saved until you click &quot;Update.&quot;
      </AlertDescription>
    </Alert>
  )
}

export default AlertSolidDemo
