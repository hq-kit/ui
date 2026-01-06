'use client'

import { buttonVariants } from '@/components/ui/button'
import { Link } from '@/components/ui/link'

export default function Link01() {
  return (
    <Link className={buttonVariants()} href='#'>
      Link Button
    </Link>
  )
}
