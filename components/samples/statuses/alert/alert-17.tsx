import { IconAlertCircle } from '@tabler/icons-react'
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert'

const AlertDescriptionDemo = () => {
  return (
    <Alert>
      <IconAlertCircle />
      <AlertTitle>Creating your account</AlertTitle>
      <AlertDescription>Fill in your details to get started.</AlertDescription>
    </Alert>
  )
}

export default AlertDescriptionDemo
