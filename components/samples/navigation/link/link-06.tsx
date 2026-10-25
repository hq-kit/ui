import { Button } from "@/components/ui/button"
import { Link } from "@/components/ui/link"
import { Popover, PopoverContent } from "@/components/ui/popover"

export default function Link06() {
  return (
    <Popover>
      <Button>Press Me</Button>
      <PopoverContent>
        <Link href="#">Link Here</Link>
      </PopoverContent>
    </Popover>
  )
}
