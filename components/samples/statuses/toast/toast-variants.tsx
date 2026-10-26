"use client"

import { Button } from "@/components/ui/button"
import { toast } from "@/components/ui/toast"

export default () => {
  return (
    <div className="grid grid-cols-2 gap-2">
      <Button onPress={() => toast.success("Success", { description: "This is success toast!" })} variant={"success"}>
        Success
      </Button>
      <Button onPress={() => toast.error("Error", { description: "This is error toast!" })} variant={"destructive"}>
        Error
      </Button>
      <Button onPress={() => toast.warning("Warning", { description: "This is warning toast!" })} variant={"warning"}>
        Warning
      </Button>
      <Button onPress={() => toast.info("Info", { description: "This is info toast!" })} variant={"info"}>
        Info
      </Button>
      <Button
        className="col-span-full"
        onPress={() => {
          toast.promise(new Promise((resolve) => setTimeout(resolve, 2000)), {
            loading: "Processing...",
            success: "Successful.",
            error: "Failed."
          })
        }}
        variant="outline"
      >
        Promise
      </Button>
    </div>
  )
}
