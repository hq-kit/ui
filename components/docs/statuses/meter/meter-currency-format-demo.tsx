'use client'

import { Meter } from '@/components/ui'

export default function MeterCurrencyFormatDemo() {
    return <Meter formatOptions={{ style: 'currency', currency: 'USD' }} label='Revenue' value={15} />
}
