import { IconAlertCircle, IconArrowRight } from "@tabler/icons-react"
import { Alert, AlertAction, AlertTitle } from "@/components/ui/alert"
import { LinkButton } from "@/components/ui/button"

const AlertWithLinkDemo = () => {
  return (
    <Alert variant={"info"}>
      <IconAlertCircle />
      <AlertTitle className="flex-1">New message!</AlertTitle>
      <AlertAction>
        <LinkButton className={"-mt-px w-fit"} href="#" size={"xs"} variant={"info"}>
          Link
          <IconArrowRight />
        </LinkButton>
      </AlertAction>
    </Alert>
  )
}

export default AlertWithLinkDemo
