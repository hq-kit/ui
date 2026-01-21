'use client'

import { IconCircleCheck } from '@tabler/icons-react'
import { useId, useState } from 'react'
import { Badge } from '@/components/ui/badge'
import { Checkbox } from '@/components/ui/checkbox'

const BadgeSelectableDemo = () => {
  const [selected, setSelected] = useState(false)

  const id = useId()

  return (
    <Badge
      className='relative cursor-pointer rounded-sm outline-none has-focus-visible:border-ring/50 has-focus-visible:ring-2 has-focus-visible:ring-ring/50'
      variant={selected ? 'secondary' : 'outline'}
    >
      <Checkbox
        className='peer sr-only after:absolute after:inset-0'
        id={id}
        isSelected={selected}
        onChange={(checked) => setSelected(!!checked)}
      />
      <IconCircleCheck
        aria-hidden='true'
        className='hidden size-3 text-green-600 peer-data-[state=checked]:block dark:text-green-400'
      />
      <label className='cursor-pointer select-none after:absolute after:inset-0' htmlFor={id}>
        {selected ? 'Selected' : 'Selectable'}
      </label>
    </Badge>
  )
}

export default BadgeSelectableDemo
