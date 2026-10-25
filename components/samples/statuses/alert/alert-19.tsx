import { IconChecks } from "@tabler/icons-react"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"

const AlertOutlineSuccessDemo = () => {
  return (
    <Alert variant={"success"}>
      <IconChecks />
      <AlertTitle>Account created successfully</AlertTitle>
      <AlertDescription>You are all set! You can now log in and start exploring your dashboard.</AlertDescription>
    </Alert>
  )
}

export default AlertOutlineSuccessDemo
