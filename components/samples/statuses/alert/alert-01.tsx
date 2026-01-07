import { IconAlertCircle } from '@tabler/icons-react'
import { Alert, AlertTitle } from '@/components/ui/alert'

const AlertDemo = () => {
  return (
    <Alert>
      <IconAlertCircle />
      <AlertTitle>New message!</AlertTitle>
    </Alert>
  )
}

export default AlertDemo
