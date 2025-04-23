'use client'

import { Meter } from '@/components/ui'
import { useEffect, useState } from 'react'

export default function MeterDemo() {
    const [value, setValue] = useState(0)

    useEffect(() => {
        const interval = setInterval(() => {
            setValue((prev) => (prev < 100 ? prev + 1 : 100))
        }, 50)

        return () => clearInterval(interval)
    }, [])
    return <Meter label='Storage space' value={value} />
}
