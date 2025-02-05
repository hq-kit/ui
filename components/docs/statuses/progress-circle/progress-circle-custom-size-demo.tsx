'use client'

import React from 'react'

import { ProgressCircle } from '@/components/ui'

export default function ProgressCircleCustomSizeDemo() {
    const [value, setValue] = React.useState(1)

    React.useEffect(() => {
        const interval = setInterval(() => {
            setValue((prev) => (prev < 100 ? prev + 1 : 100))
        }, 100)

        return () => clearInterval(interval)
    }, [])

    return (
        <ProgressCircle className='size-10' aria-label='Loading…' isIndeterminate value={value} />
    )
}
