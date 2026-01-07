'use client'

import type { Selection } from 'react-aria-components'
import { useState } from 'react'
import { ListBox, ListBoxDetails, ListBoxItem } from '@/components/ui/list-box'

export default function ListBoxDescriptionDemo() {
  const [selected, setSelected] = useState<Selection>(new Set([1]))
  return (
    <ListBox
      aria-label='Bands'
      className='max-w-2xs'
      items={roles}
      onSelectionChange={setSelected}
      selectedKeys={selected}
    >
      {(item) => (
        <ListBoxItem id={item.id} textValue={item.name}>
          <ListBoxDetails description={item.description} title={item.name} />
        </ListBoxItem>
      )}
    </ListBox>
  )
}

const roles = [
  {
    id: 1,
    name: 'Admin',
    description: 'Has full access to all resources'
  },
  {
    id: 2,
    name: 'Editor',
    description: 'Can edit content but has limited access to settings'
  },
  {
    id: 3,
    name: 'Viewer',
    description: 'Can view content but cannot make changes'
  },
  {
    id: 4,
    name: 'Contributor',
    description: 'Can contribute content for review'
  },
  {
    id: 5,
    name: 'Guest',
    description: 'Limited access, mostly for viewing purposes'
  }
]
