import { IconAlertTriangle } from '@tabler/icons-react'
import { Alert, AlertTitle } from '@/components/ui/alert'

const AlertPureDestructiveDemo = () => {
  return (
    <Alert className='border-destructive' variant='destructive'>
      <IconAlertTriangle />
      <AlertTitle>Unable to process your payment.</AlertTitle>
    </Alert>
  )
}

export default AlertPureDestructiveDemo
