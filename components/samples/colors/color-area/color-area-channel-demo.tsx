'use client'

import type { Key } from 'react-aria-components'
import type { ColorChannel } from 'react-stately'
import { useState } from 'react'
import { ColorArea } from '@/components/ui/colors'
import { Label } from '@/components/ui/label'
import { Select } from '@/components/ui/select'

const channels = ['red', 'green', 'blue', 'alpha'].map((channel) => ({ channel }))

export default function ColorAreaChannelDemo() {
  const [xChannel, setXChannel] = useState<Key | null>('red')
  const [yChannel, setYChannel] = useState<Key | null>('blue')
  return (
    <div className='flex flex-col items-center gap-4'>
      <div className='flex w-full flex-col gap-2 sm:flex-row'>
        <Select className='w-full' onChange={(v) => setXChannel(v)} value={xChannel}>
          <Label>X Channel</Label>
          <Select.Trigger>
            <Select.Value />
          </Select.Trigger>
          <Select.Content items={channels}>
            {(item) => <Select.Item id={item.channel}>{item.channel}</Select.Item>}
          </Select.Content>
        </Select>
        <Select className='w-full' onChange={(v) => setYChannel(v)} value={yChannel}>
          <Label>Y Channel</Label>
          <Select.Trigger>
            <Select.Value />
          </Select.Trigger>
          <Select.Content items={channels}>
            {(item) => <Select.Item id={item.channel}>{item.channel}</Select.Item>}
          </Select.Content>
        </Select>
      </div>
      <ColorArea xChannel={xChannel as ColorChannel} yChannel={yChannel as ColorChannel} />
    </div>
  )
}
