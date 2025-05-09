'use client'

import { useEffect, useState } from 'react'

import { Progress } from '@/components/ui'

export default function ProgressBarDemo() {
    const [value, setValue] = useState(0)

    useEffect(() => {
        const interval = setInterval(() => {
            setValue((prev) => (prev < 100 ? prev + 1 : 100))
        }, 200)

        return () => clearInterval(interval)
    }, [])

    return <Progress label='Loading…' value={value} />
}
