import { IconAlertCircle } from "@tabler/icons-react"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"

const AlertOutlineWarningDemo = () => {
  return (
    <Alert variant={"warning"}>
      <IconAlertCircle />
      <AlertTitle>Your password is too weak</AlertTitle>
      <AlertDescription>
        Try using a mix of uppercase letters, numbers, and symbols for better security.
      </AlertDescription>
    </Alert>
  )
}

export default AlertOutlineWarningDemo
