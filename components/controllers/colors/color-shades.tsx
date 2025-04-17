'use client'

import type * as React from 'react'

import { type ColorFormat, ListBox } from 'react-aria-components'

import { ColorItem } from '@/components/controllers/colors/color-item'

export interface ColorProps {
    name: string
    children: {
        shade: string
        color: string
    }[]
}
export interface ColorRowProps extends React.HtmlHTMLAttributes<HTMLDivElement> {
    item: ColorProps
    children?: React.ReactNode
    selectedFormat?: ColorFormat
    tailwindVariable: boolean
}

export function ColorShades({ item, selectedFormat, tailwindVariable }: ColorRowProps) {
    return (
        <div className='overflow-hidden rounded-lg border bg-bg p-2'>
            <div className='mb-2 flex items-center justify-center'>
                <h3 className='font-medium font-mono text-muted-fg text-sm tracking-tight sm:text-sm'>{item.name}</h3>
            </div>

            <ListBox
                layout='grid'
                orientation='horizontal'
                className='grid grid-cols-7 gap-x-1 gap-y-2 sm:gap-y-1 lg:grid-cols-11'
                aria-label={`${item.name} 50-950 colors`}
                items={item.children}
            >
                {item.children.map((color, i) => (
                    <ColorItem
                        tailwindVariable={tailwindVariable}
                        key={i}
                        {...{
                            selectedFormat: selectedFormat ?? 'hsl',
                            item: color,
                            name: item.name
                        }}
                    />
                ))}
            </ListBox>
        </div>
    )
}
