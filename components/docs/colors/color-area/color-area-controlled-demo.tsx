'use client'

import React from 'react'

import { ColorSpace, Key, parseColor } from 'react-aria-components'
import { ColorChannel } from 'react-stately'

import { ColorArea } from '@/components/ui'
import { Select } from '@/components/ui/select'

const spaces = ['rgb', 'hsb', 'hsl'].map((space) => ({ space }))
const RGBchannels = ['red', 'green', 'blue', 'alpha'].map((channel) => ({ channel }))
const HSLchannels = ['hue', 'saturation', 'lightness', 'alpha'].map((channel) => ({ channel }))
const HSBchannels = ['hue', 'saturation', 'brightness', 'alpha'].map((channel) => ({ channel }))

export default function ColorAreaControlledDemo() {
    const [color, setColor] = React.useState(parseColor('hsl(0, 100%, 50%)'))
    const [colorSpace, setColorSpace] = React.useState<Key>('rgb')
    const [xChannel, setXChannel] = React.useState<Key>(colorSpace === 'rgb' ? 'red' : 'hue')
    const [yChannel, setYChannel] = React.useState<Key>(
        colorSpace === 'rgb' ? 'alpha' : 'saturation'
    )

    return (
        <div className='flex flex-col gap-4 items-center'>
            <div className='flex flex-col sm:flex-row gap-2 w-full'>
                <Select
                    className='w-full'
                    label='Color Space'
                    selectedKey={colorSpace}
                    onSelectionChange={(v) => {
                        setColorSpace(v)
                        setXChannel(v === 'rgb' ? 'red' : 'hue')
                        setYChannel(v === 'rgb' ? 'alpha' : 'saturation')
                    }}
                    items={spaces}
                >
                    {(item) => <Select.Item id={item.space}>{item.space}</Select.Item>}
                </Select>
                <Select
                    label='X Channel'
                    className='w-full'
                    selectedKey={xChannel}
                    onSelectionChange={(v) => setXChannel(v)}
                    items={
                        colorSpace === 'rgb'
                            ? RGBchannels
                            : colorSpace === 'hsl'
                              ? HSLchannels
                              : HSBchannels
                    }
                >
                    {(item) => <Select.Item id={item.channel}>{item.channel}</Select.Item>}
                </Select>
                <Select
                    label='Y Channel'
                    className='w-full'
                    selectedKey={yChannel}
                    onSelectionChange={(v) => setYChannel(v)}
                    items={
                        colorSpace === 'rgb'
                            ? RGBchannels
                            : colorSpace === 'hsl'
                              ? HSLchannels
                              : HSBchannels
                    }
                >
                    {(item) => <Select.Item id={item.channel}>{item.channel}</Select.Item>}
                </Select>
            </div>
            <ColorArea
                value={color}
                onChange={setColor}
                xChannel={xChannel as ColorChannel}
                yChannel={yChannel as ColorChannel}
                colorSpace={colorSpace as ColorSpace}
            />
            <code>color: {JSON.stringify(color)}</code>
        </div>
    )
}
