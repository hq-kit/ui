'use client'

import React from 'react'

import { Key } from 'react-aria-components'
import { ColorChannel } from 'react-stately'

import { ColorArea, Select } from '@/components/ui'

const channels = ['red', 'green', 'blue', 'alpha'].map((channel) => ({ channel }))

export default function ColorAreaChannelDemo() {
    const [xChannel, setXChannel] = React.useState<Key>('red')
    const [yChannel, setYChannel] = React.useState<Key>('blue')
    return (
        <div className='flex flex-col items-center gap-4'>
            <div className='flex flex-col sm:flex-row gap-2 w-full'>
                <Select
                    label='X Channel'
                    className='w-full'
                    selectedKey={xChannel}
                    onSelectionChange={(v) => setXChannel(v)}
                    items={channels}
                >
                    {(item) => <Select.Item id={item.channel}>{item.channel}</Select.Item>}
                </Select>
                <Select
                    label='Y Channel'
                    className='w-full'
                    selectedKey={yChannel}
                    onSelectionChange={(v) => setYChannel(v)}
                    items={channels}
                >
                    {(item) => <Select.Item id={item.channel}>{item.channel}</Select.Item>}
                </Select>
            </div>
            <ColorArea xChannel={xChannel as ColorChannel} yChannel={yChannel as ColorChannel} />
        </div>
    )
}
