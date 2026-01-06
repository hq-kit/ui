import { Link } from '@/components/ui/link'
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover'

export default function Link06() {
  return (
    <Popover>
      <PopoverTrigger>Press Me</PopoverTrigger>
      <PopoverContent>
        <Link href='#'>Link Here</Link>
      </PopoverContent>
    </Popover>
  )
}
