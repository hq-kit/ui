'use client'

import { FileTrigger } from '@/components/ui'
import { IconUpload } from '@tabler/icons-react'

export default function FileTriggerMultipleDemo() {
    return (
        <FileTrigger allowsMultiple>
            <IconUpload />
            Upload
        </FileTrigger>
    )
}
