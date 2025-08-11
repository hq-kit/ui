'use client'

import type { Key } from 'react-aria-components'
import type { ColorChannel } from 'react-stately'
import { useState } from 'react'
import { ColorArea, Select } from '@/components/ui'

const channels = ['red', 'green', 'blue', 'alpha'].map((channel) => ({ channel }))

export default function ColorAreaChannelDemo() {
    const [xChannel, setXChannel] = useState<Key | null>('red')
    const [yChannel, setYChannel] = useState<Key | null>('blue')
    return (
        <div className='flex flex-col items-center gap-4'>
            <div className='flex w-full flex-col gap-2 sm:flex-row'>
                <Select
                    className='w-full'
                    items={channels}
                    label='X Channel'
                    onSelectionChange={(v) => setXChannel(v)}
                    selectedKey={xChannel}
                >
                    {(item) => <Select.Item id={item.channel}>{item.channel}</Select.Item>}
                </Select>
                <Select
                    className='w-full'
                    items={channels}
                    label='Y Channel'
                    onSelectionChange={(v) => setYChannel(v)}
                    selectedKey={yChannel}
                >
                    {(item) => <Select.Item id={item.channel}>{item.channel}</Select.Item>}
                </Select>
            </div>
            <ColorArea xChannel={xChannel as ColorChannel} yChannel={yChannel as ColorChannel} />
        </div>
    )
}
