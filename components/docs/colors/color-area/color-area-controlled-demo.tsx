'use client'

import type { ColorChannel } from 'react-stately'
import { useState } from 'react'
import { type ColorSpace, type Key, parseColor } from 'react-aria-components'
import { ColorArea } from '@/components/ui'
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
        <div className='flex flex-col items-center gap-2'>
            <Select
                className='w-full'
                label='Color Spaces'
                onSelectionChange={(v) => {
                    setColorSpace(v)
                    setXChannel(v === 'rgb' ? 'red' : 'hue')
                    setYChannel(v === 'rgb' ? 'green' : 'saturation')
                }}
                selectedKey={colorSpace}
            >
                <Select.Item id='rgb'>RGB</Select.Item>
                <Select.Item id='hsl'>HSL</Select.Item>
                <Select.Item id='hsb'>HSB</Select.Item>
            </Select>
            <Select
                className='w-full'
                items={colorSpace === 'rgb' ? RGBchannels : colorSpace === 'hsl' ? HSLchannels : HSBchannels}
                label='X Channel'
                onSelectionChange={(v) => setXChannel(v)}
                selectedKey={xChannel}
            >
                {(item) => <Select.Item id={item.channel}>{item.channel}</Select.Item>}
            </Select>
            <Select
                className='w-full'
                items={colorSpace === 'rgb' ? RGBchannels : colorSpace === 'hsl' ? HSLchannels : HSBchannels}
                label='Y Channel'
                onSelectionChange={(v) => setYChannel(v)}
                selectedKey={yChannel}
            >
                {(item) => <Select.Item id={item.channel}>{item.channel}</Select.Item>}
            </Select>
            <ColorArea
                colorSpace={colorSpace as ColorSpace}
                onChange={setColor}
                value={color}
                xChannel={xChannel as ColorChannel}
                yChannel={yChannel as ColorChannel}
            />
            <pre>{JSON.stringify({ color }, null, 2)}</pre>
        </div>
    )
}
