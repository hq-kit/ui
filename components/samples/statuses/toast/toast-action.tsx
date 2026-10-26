"use client"

import { Button } from "@/components/ui/button"
import { toast } from "@/components/ui/toast"

export default () => {
  return (
    <div className="flex gap-1.5">
      <Button
        onPress={() =>
          toast("New comment on your post!", {
            action: {
              label: "View",
              onClick: () => alert("Viewed")
            }
          })
        }
      >
        Action
      </Button>
      <Button
        onPress={() =>
          toast("New comment on your post!", {
            action: {
              label: "View",
              onClick: () => alert("Viewed")
            },
            cancel: {
              label: "Cancel",
              onClick: () => alert("Cancelled")
            }
          })
        }
      >
        Do or Not
      </Button>
      <Button
        onPress={() =>
          toast("New comment on your post!", {
            cancel: {
              label: "Cancel",
              onClick: () => alert("Cancelled")
            }
          })
        }
      >
        Cancel
      </Button>
    </div>
  )
}
