import { Badge } from '@/components/ui/badge'

const BadgeBlockedDemo = () => {
  return (
    <Badge className='border-none bg-destructive/10 text-destructive focus-visible:outline-none focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 [a&]:hover:bg-destructive/5'>
      <span aria-hidden='true' className='size-1.5 rounded-full bg-destructive' />
      Blocked
    </Badge>
  )
}

export default BadgeBlockedDemo
