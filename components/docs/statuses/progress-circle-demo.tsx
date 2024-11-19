'use client'

import React from 'react'

import { ProgressCircle } from '@/components/ui'

export default function ProgressCircleDemo() {
    const [value, setValue] = React.useState(1)

    React.useEffect(() => {
        const interval = setInterval(() => {
            setValue((prev) => (prev < 100 ? prev + 1 : 100))
        }, 50)

        return () => clearInterval(interval)
    }, [])

    return <ProgressCircle aria-label='Loading…' value={value} />
}
