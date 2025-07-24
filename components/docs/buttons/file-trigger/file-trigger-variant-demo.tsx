'use client'

import { FileTrigger } from '@/components/ui'

export default function FileTriggerVariantDemo() {
    return (
        <div className='flex flex-col gap-2 md:flex-row md:flex-wrap'>
            <FileTrigger variant='default'>Primary</FileTrigger>
            <FileTrigger variant='secondary'>Secondary</FileTrigger>
            <FileTrigger variant='destructive'>Destructive</FileTrigger>
            <FileTrigger variant='outline'>Outline</FileTrigger>
            <FileTrigger variant='ghost'>Ghost</FileTrigger>
        </div>
    )
}
