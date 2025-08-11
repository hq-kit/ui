'use client'

import { useEffect, useState } from 'react'
import { Progress } from '@/components/ui'

export default function ProgressVariantDemo() {
    const [value, setValue] = useState(0)

    useEffect(() => {
        const interval = setInterval(() => {
            setValue((prev) => (prev < 75 ? prev + 1 : 75))
        }, 200)

        return () => clearInterval(interval)
    }, [])

    return (
        <div className='space-y-4'>
            <div className='flex gap-2'>
                <Progress circle label='Default' value={value} variant='default' />
                <Progress circle label='Secondary' value={value} variant='secondary' />
                <Progress circle label='Destructive' value={value} variant='destructive' />
            </div>
            <div className='flex flex-col gap-2'>
                <Progress label='Default' value={value} variant='default' />
                <Progress label='Secondary' value={value} variant='secondary' />
                <Progress label='Destructive' value={value} variant='destructive' />
            </div>
        </div>
    )
}
