'use client'

import React from 'react'

import { Progress } from '@/components/ui'

export default function ProgressVariantDemo() {
    const [value, setValue] = React.useState(0)

    React.useEffect(() => {
        const interval = setInterval(() => {
            setValue((prev) => (prev < 75 ? prev + 1 : 75))
        }, 200)

        return () => clearInterval(interval)
    }, [])

    return (
        <div className='space-y-4'>
            <div className='flex gap-2'>
                <Progress circle label='Primary' value={value} variant='primary' />
                <Progress circle label='Secondary' value={value} variant='secondary' />
                <Progress circle label='Danger' value={value} variant='danger' />
                <Progress circle label='Info' value={value} variant='info' />
                <Progress circle label='Success' value={value} variant='success' />
                <Progress circle label='Warning' value={value} variant='warning' />
                <Progress circle label='Dark' value={value} variant='dark' />
            </div>
            <div className='flex flex-col gap-2'>
                <Progress label='Primary' value={value} variant='primary' />
                <Progress label='Secondary' value={value} variant='secondary' />
                <Progress label='Danger' value={value} variant='danger' />
                <Progress label='Info' value={value} variant='info' />
                <Progress label='Success' value={value} variant='success' />
                <Progress label='Warning' value={value} variant='warning' />
                <Progress label='Dark' value={value} variant='dark' />
            </div>
        </div>
    )
}
