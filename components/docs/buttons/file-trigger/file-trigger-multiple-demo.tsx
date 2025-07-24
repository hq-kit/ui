'use client'

import { FileTrigger } from '@/components/ui'
import { IconUpload } from 'hq-icons'

export default function FileTriggerMultipleDemo() {
    return (
        <FileTrigger allowsMultiple>
            <IconUpload />
            Upload
        </FileTrigger>
    )
}
