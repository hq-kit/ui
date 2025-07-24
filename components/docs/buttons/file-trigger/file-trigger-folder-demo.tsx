'use client'

import { FileTrigger } from '@/components/ui'
import { IconFolder } from 'hq-icons'

export default function FileTriggerFolderDemo() {
    return (
        <FileTrigger acceptDirectory>
            <IconFolder />
            Upload
        </FileTrigger>
    )
}
