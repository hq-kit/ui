'use client'

import { IconX } from '@tabler/icons-react'
import { useState } from 'react'
import { Badge } from '@/components/ui/badge'

const BadgeClosableDemo = () => {
  const [isActive, setIsActive] = useState(true)

  if (!isActive) return null

  return (
    <Badge>
      Closable
      <button
        aria-label='Close'
        className='-my-px -ms-px -me-1.5 inline-flex size-4 shrink-0 cursor-pointer items-center justify-center rounded-[inherit] p-0 text-primary-foreground/60 outline-none transition-[color,box-shadow] hover:text-primary-foreground focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50'
        onClick={() => setIsActive(false)}
        type='button'
      >
        <IconX aria-hidden='true' className='size-3' />
      </button>
    </Badge>
  )
}

export default BadgeClosableDemo
