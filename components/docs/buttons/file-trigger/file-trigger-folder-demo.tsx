'use client'

import { IconFolder } from 'hq-icons'

import { FileTrigger } from '@/components/ui'

export default function FileTriggerFolderDemo() {
    return (
        <FileTrigger acceptDirectory>
            <IconFolder />
            Upload
        </FileTrigger>
    )
}
