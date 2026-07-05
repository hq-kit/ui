import { SaveIcon } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Kbd } from "@/components/ui/kbd"
import { Tooltip, TooltipContent } from "@/components/ui/tooltip"

export default function TooltipKeyboard() {
  return (
    <Tooltip>
      <Button size="icon-sm" variant="outline">
        <SaveIcon />
      </Button>
      <TooltipContent>
        Save Changes <Kbd>S</Kbd>
      </TooltipContent>
    </Tooltip>
  )
}
