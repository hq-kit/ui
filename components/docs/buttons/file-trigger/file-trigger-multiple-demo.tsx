'use client'

import { IconUpload } from '@tabler/icons-react'
import { FileTrigger } from '@/components/ui'

export default function FileTriggerMultipleDemo() {
    return (
        <FileTrigger allowsMultiple>
            <IconUpload />
            Upload
        </FileTrigger>
    )
}
