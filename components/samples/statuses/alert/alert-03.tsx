"use client"

import { IconAlertCircle, IconArrowBackUp, IconX } from "@tabler/icons-react"
import { useState } from "react"
import { Alert, AlertAction, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { Button } from "@/components/ui/button"

const AlertClosableDemo = () => {
  const [isActive, setIsActive] = useState(true)

  if (!isActive)
    return (
      <Button onPress={() => setIsActive(true)}>
        <IconArrowBackUp />
        Restore
      </Button>
    )

  return (
    <Alert>
      <IconAlertCircle />
      <AlertTitle>New message!</AlertTitle>
      <AlertDescription>12 unread messages. Tap to see.</AlertDescription>
      <AlertAction>
        <Button aria-label="close" onPress={() => setIsActive(false)} size={"icon-xs"} variant={"outline"}>
          <IconX />
        </Button>
      </AlertAction>
    </Alert>
  )
}

export default AlertClosableDemo
