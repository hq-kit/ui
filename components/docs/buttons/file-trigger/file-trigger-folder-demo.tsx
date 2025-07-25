'use client'

import { FileTrigger } from '@/components/ui'
import { IconFolder } from '@tabler/icons-react'

export default function FileTriggerFolderDemo() {
    return (
        <FileTrigger acceptDirectory>
            <IconFolder />
            Upload
        </FileTrigger>
    )
}
