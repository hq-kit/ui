import { Button } from "@/components/ui/button"
import { Tooltip, TooltipContent } from "@/components/ui/tooltip"

export default function TooltipNoArrow() {
  return (
    <Tooltip>
      <Button variant="outline">Disabled</Button>
      <TooltipContent showArrow={false}>
        <p>This feature is currently unavailable</p>
      </TooltipContent>
    </Tooltip>
  )
}
