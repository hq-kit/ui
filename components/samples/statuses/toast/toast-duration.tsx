"use client"

import { Button } from "@/components/ui/button"
import { toast } from "@/components/ui/toast"

export default () => {
  return (
    <div className="flex gap-1.5">
      <Button onPress={() => toast("7 Seconds toast", { duration: 5000 })}>7 Seconds</Button>
      <Button onPress={() => toast("Default toast 4 Seconds")}>Default (4 Seconds)</Button>
      <Button
        onPress={() =>
          toast("It will stay here unless you dismiss manually", {
            duration: Infinity,
            cancel: {
              label: "Close",
              onClick: (r) => r
            }
          })
        }
      >
        Dismiss
      </Button>
    </div>
  )
}
