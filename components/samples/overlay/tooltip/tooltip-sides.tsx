import { Button } from "@/components/ui/button"
import { Tooltip, TooltipContent } from "@/components/ui/tooltip"

export default function TooltipSides() {
  return (
    <div className="flex flex-wrap gap-2">
      {(["left", "top", "bottom", "right"] as const).map((side) => (
        <Tooltip key={side}>
          <Button className="w-fit capitalize" variant="outline">
            {side}
          </Button>
          <TooltipContent placement={side}>
            <p>Add to library</p>
          </TooltipContent>
        </Tooltip>
      ))}
    </div>
  )
}
