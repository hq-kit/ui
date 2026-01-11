'use client'

import { useState } from 'react'
import { useDragAndDrop, useListData } from 'react-aria-components'
import { Code } from '@/components/mdx/code'
import { Label } from '@/components/ui/label'
import { ListBox, ListBoxItem } from '@/components/ui/list-box'
import { Radio, RadioGroup } from '@/components/ui/radio'
import { Switch } from '@/components/ui/switch'
import { cn } from '@/lib/utils'

const items = [
  { id: '1', name: 'Aardvark' },
  { id: '2', name: 'Cat' },
  { id: '3', name: 'Dog' },
  { id: '4', name: 'Kangaroo' },
  { id: '5', name: 'Panda' },
  { id: '6', name: 'Snake' }
]

export default function ListBoxPreview() {
  const [selectionMode, setSelectionMode] = useState<'multiple' | 'single' | 'none'>('multiple')
  const [allowsDragging, setAllowsDragging] = useState(false)

  const list = useListData({
    initialItems: items
  })
  const { dragAndDropHooks } = useDragAndDrop({
    getItems: (keys) =>
      [...keys].map((key) => ({
        'text/plain': list.getItem(key)?.name ?? ''
      })),
    onReorder(e) {
      if (e.target.dropPosition === 'before') {
        list.moveBefore(e.target.key, e.keys)
      } else if (e.target.dropPosition === 'after') {
        list.moveAfter(e.target.key, e.keys)
      }
    }
  })

  return (
    <div>
      <div className='flex flex-col gap-2 lg:flex-row-reverse'>
        <div className='flex flex-col gap-2 border-b p-4 lg:border-b-0 lg:border-l'>
          <Switch className='whitespace-nowrap' isSelected={allowsDragging} onChange={setAllowsDragging}>
            Allows Dragging
          </Switch>
          <RadioGroup
            onChange={(v) => setSelectionMode(v.toString() as 'multiple' | 'single' | 'none')}
            value={selectionMode}
          >
            <Label className='whitespace-nowrap'>Selection Mode</Label>
            <Radio value='none'>None</Radio>
            <Radio value='multiple'>Multiple</Radio>
            <Radio value='single'>Single</Radio>
          </RadioGroup>
        </div>
        <div className='grid min-h-52 w-full place-items-center px-6 py-4'>
          <ListBox
            aria-label='Favorite animal'
            className={cn('w-full', !allowsDragging && 'hidden')}
            dragAndDropHooks={dragAndDropHooks}
            items={list.items}
            selectionMode={selectionMode}
          >
            {(item) => <ListBoxItem id={item.id}>{item.name}</ListBoxItem>}
          </ListBox>
          <ListBox
            aria-label='Favorite animal'
            className={cn('w-full', allowsDragging && 'hidden')}
            items={items}
            selectionMode={selectionMode}
          >
            {(item) => <ListBoxItem id={item.id}>{item.name}</ListBoxItem>}
          </ListBox>
        </div>
      </div>
      <Code
        className='my-0 size-full rounded-lg rounded-t-none border **:[pre]:rounded-t-none'
        code={`import { ListBox, ListBoxItem } from '@/components/ui/list-box'

<ListBox aria-label='Favorite animal'${selectionMode === 'none' ? '' : ` selectionMode='${selectionMode}'`}${allowsDragging ? ' dragAndDropHooks={dragAndDropHooks}' : ''}
  aria-label='Favorite animal'
  className='w-full'
  items={${allowsDragging ? 'list.items' : 'items'}}
  selectionMode={selectionMode}
>
  {(item) => <ListBoxItem id={item.id}>{item.name}</ListBoxItem>}
</ListBox>

const items = [
  { id: '1', name: 'Aardvark' },
  { id: '2', name: 'Cat' },
  { id: '3', name: 'Dog' },
  { id: '4', name: 'Kangaroo' },
  { id: '5', name: 'Panda' },
  { id: '6', name: 'Snake' }
]${
          allowsDragging
            ? `

const list = useListData({
  initialItems: items
})
const { dragAndDropHooks } = useDragAndDrop({
  getItems: (keys) =>
    [...keys].map((key) => ({
      'text/plain': list.getItem(key)?.name ?? ''
    })),
  onReorder(e) {
    if (e.target.dropPosition === 'before') {
      list.moveBefore(e.target.key, e.keys)
    } else if (e.target.dropPosition === 'after') {
      list.moveAfter(e.target.key, e.keys)
    }
  }
})`
            : ''
        }`}
        copy
      />
    </div>
  )
}
