'use client'

import { FileTrigger } from '@/components/ui'
import { IconCamera } from '@tabler/icons-react'

export default function FileTriggerCameraDemo() {
    return (
        <FileTrigger>
            <IconCamera />
            Open a camera
        </FileTrigger>
    )
}
