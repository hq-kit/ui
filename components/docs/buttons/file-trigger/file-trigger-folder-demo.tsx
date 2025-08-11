'use client'

import { IconFolder } from '@tabler/icons-react'
import { FileTrigger } from '@/components/ui'

export default function FileTriggerFolderDemo() {
    return (
        <FileTrigger acceptDirectory>
            <IconFolder />
            Upload
        </FileTrigger>
    )
}
