'use client'

import type { ColorChannel } from 'react-stately'
import { useState } from 'react'
import { type ColorSpace, type Key, parseColor } from 'react-aria-components'
import { ColorArea } from '@/components/ui/colors'
import { Label } from '@/components/ui/label'
import { Select } from '@/components/ui/select'

const RGBchannels = ['red', 'green', 'blue'].map((channel) => ({ channel }))
const HSLchannels = ['hue', 'saturation', 'lightness'].map((channel) => ({ channel }))
const HSBchannels = ['hue', 'saturation', 'brightness'].map((channel) => ({ channel }))

export default function ColorAreaControlledDemo() {
  const [color, setColor] = useState(parseColor('hsl(0, 100%, 50%)'))
  const [colorSpace, setColorSpace] = useState<Key | null>('rgb')
  const [xChannel, setXChannel] = useState<Key | null>(colorSpace === 'rgb' ? 'red' : 'hue')
  const [yChannel, setYChannel] = useState<Key | null>(colorSpace === 'rgb' ? 'green' : 'saturation')

  return (
    <div className='flex flex-col items-center gap-4'>
      <Select
        className='w-full'
        onChange={(v) => {
          setColorSpace(v)
          setXChannel(v === 'rgb' ? 'red' : 'hue')
          setYChannel(v === 'rgb' ? 'green' : 'saturation')
        }}
        value={colorSpace}
      >
        <Label>Color Space</Label>
        <Select.Trigger>
          <Select.Value />
        </Select.Trigger>
        <Select.Content>
          <Select.Item id='rgb'>RGB</Select.Item>
          <Select.Item id='hsl'>HSL</Select.Item>
          <Select.Item id='hsb'>HSB</Select.Item>
        </Select.Content>
      </Select>
      <div className='grid grid-cols-2 gap-2'>
        <Select className='w-full' onChange={(v) => setXChannel(v)} value={xChannel}>
          <Label>X Channel</Label>
          <Select.Trigger>
            <Select.Value />
          </Select.Trigger>
          <Select.Content items={colorSpace === 'rgb' ? RGBchannels : colorSpace === 'hsl' ? HSLchannels : HSBchannels}>
            {(item) => <Select.Item id={item.channel}>{item.channel}</Select.Item>}
          </Select.Content>
        </Select>
        <Select className='w-full' onChange={(v) => setYChannel(v)} value={yChannel}>
          <Label>Y Channel</Label>
          <Select.Trigger>
            <Select.Value />
          </Select.Trigger>
          <Select.Content items={colorSpace === 'rgb' ? RGBchannels : colorSpace === 'hsl' ? HSLchannels : HSBchannels}>
            {(item) => <Select.Item id={item.channel}>{item.channel}</Select.Item>}
          </Select.Content>
        </Select>
      </div>
      <ColorArea
        colorSpace={colorSpace as ColorSpace}
        onChange={setColor}
        value={color}
        xChannel={xChannel as ColorChannel}
        yChannel={yChannel as ColorChannel}
      />
      <pre className='text-xs'>{JSON.stringify({ color }, null, 2)}</pre>
    </div>
  )
}
