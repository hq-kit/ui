import { badgeVariants } from '@/components/ui/badge'
import { Link } from '@/components/ui/link'

export default function Link03() {
  return (
    <Link className={badgeVariants()} href='#'>
      Link Badge
    </Link>
  )
}
