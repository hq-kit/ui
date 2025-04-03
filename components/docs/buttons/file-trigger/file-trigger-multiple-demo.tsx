'use client'

import { IconUpload } from 'hq-icons'

import { FileTrigger } from '@/components/ui'

export default function FileTriggerMultipleDemo() {
    return (
        <FileTrigger allowsMultiple>
            <IconUpload />
            Upload
        </FileTrigger>
    )
}
