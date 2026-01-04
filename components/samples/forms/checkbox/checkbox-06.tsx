'use client'

import { useState } from 'react'
import { Badge } from '@/components/ui/badge'
import { Checkbox } from '@/components/ui/checkbox'

const snacks = ['Burger', 'Pizza', 'Drinks']

const CheckboxBadgeDemo = () => {
  const [selected, setSelected] = useState<string[]>(['Burger', 'Pizza'])

  return (
    <div className='flex items-center gap-2'>
      {snacks.map((label) => (
        <Badge className='relative gap-2 rounded-sm px-3 py-1.5' key={label} variant='secondary'>
          <Checkbox
            className='data-[state=unchecked]:hidden'
            id={label}
            isSelected={selected.includes(label)}
            onChange={(checked) =>
              setSelected(checked ? [...selected, label] : selected.filter((item) => item !== label))
            }
          >
            {label}
          </Checkbox>
        </Badge>
      ))}
    </div>
  )
}

export default CheckboxBadgeDemo
