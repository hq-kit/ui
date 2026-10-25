import { IconFileAlert } from "@tabler/icons-react"
import { Alert, AlertTitle } from "@/components/ui/alert"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"

const AlertFocusedIconDemo = () => {
  return (
    <Alert className="flex items-center gap-3">
      <Avatar className="rounded-md">
        <AvatarFallback className="rounded-md bg-destructive text-white dark:bg-destructive/60">
          <IconFileAlert className="size-4" />
        </AvatarFallback>
      </Avatar>
      <AlertTitle>This file contains virus!</AlertTitle>
    </Alert>
  )
}

export default AlertFocusedIconDemo
