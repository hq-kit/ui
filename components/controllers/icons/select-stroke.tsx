'use client'

import React from 'react'

import { IconChevronDown } from 'hq-icons'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import type { Selection } from 'react-aria-components'

import { Button, Menu } from '@/components/ui'
import { useQueryString } from '@/lib/hooks/use-query-string'

const strokes = [
    { id: '1', name: 'Stroke 1' },
    { id: '2', name: 'Stroke 2' }
]

export function SelectStroke() {
    const router = useRouter()
    const pathname = usePathname()
    const { createQueryString } = useQueryString()

    const searchParams = useSearchParams()

    const [selectedStroke, setSelectStroke] = React.useState<Selection>(
        new Set([searchParams.get('t') || '2'])
    )
    const onSelectionChange = (stroke: Selection) => {
        router.push(pathname + '?' + createQueryString('t', [...stroke].join(',')), {
            scroll: false
        })
        setSelectStroke(stroke)
    }

    return (
        <Menu aria-label='Select Icon Size'>
            <Button
                className='bg-bg w-full sm:max-w-sm [&_[data-slot=icon]]:transition-transform [&[data-pressed]_[data-slot=icon]]:rotate-180'
                variant='outline'
            >
                <span>Stroke {[...selectedStroke].join('').replace('stroke-', '') || '5'}</span>
                <IconChevronDown />
            </Button>
            <Menu.Content
                selectionMode='single'
                selectedKeys={selectedStroke}
                onSelectionChange={onSelectionChange}
                placement='bottom end'
                items={strokes}
            >
                {(item) => (
                    <Menu.Item id={item.id} textValue={item.name}>
                        <Menu.Label>{item.name}</Menu.Label>
                    </Menu.Item>
                )}
            </Menu.Content>
        </Menu>
    )
}
