"use client"

import type { ToastT } from "sonner"
import { Button } from "@/components/ui/button"
import { toast } from "@/components/ui/toast"

const positions: ToastT["position"][] = [
  "top-left",
  "top-center",
  "top-right",
  "bottom-left",
  "bottom-center",
  "bottom-right"
]

export default () => {
  return (
    <div className="grid grid-cols-3 gap-1.5">
      {positions.map((position) => (
        <Button key={position} onPress={() => toast(position, { position })} size="sm">
          {position}
        </Button>
      ))}
    </div>
  )
}
