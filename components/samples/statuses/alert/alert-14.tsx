import { IconAlertTriangle } from '@tabler/icons-react'
import { Alert, AlertTitle } from '@/components/ui/alert'

const AlertDestructiveDemo = () => {
  return (
    <Alert variant='destructive'>
      <IconAlertTriangle />
      <AlertTitle>Something went wrong!</AlertTitle>
    </Alert>
  )
}

export default AlertDestructiveDemo
