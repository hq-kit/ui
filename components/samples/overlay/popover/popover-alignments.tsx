import { Button } from "@/components/ui/button"
import { Popover, PopoverContent } from "@/components/ui/popover"

export default function PopoverAlignments() {
  return (
    <div className="flex gap-6">
      <Popover>
        <Button size="sm" variant="outline">
          Start
        </Button>
        <PopoverContent className="w-40" placement="start">
          Aligned to start
        </PopoverContent>
      </Popover>
      <Popover>
        <Button size="sm" variant="outline">
          Center
        </Button>
        <PopoverContent className="w-40">Aligned to center</PopoverContent>
      </Popover>
      <Popover>
        <Button size="sm" variant="outline">
          End
        </Button>
        <PopoverContent className="w-40" placement="end">
          Aligned to end
        </PopoverContent>
      </Popover>
    </div>
  )
}
