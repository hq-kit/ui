import { Button } from "@/components/ui/button"
import { Tooltip, TooltipContent } from "@/components/ui/tooltip"

export default function TooltipDemo() {
  return (
    <Tooltip>
      <Button variant="outline">Hover</Button>
      <TooltipContent>
        <p>Add to library</p>
      </TooltipContent>
    </Tooltip>
  )
}
