'use client'

import { IconCamera } from '@tabler/icons-react'
import { FileTrigger } from '@/components/ui'

export default function FileTriggerCameraDemo() {
    return (
        <FileTrigger>
            <IconCamera />
            Open a camera
        </FileTrigger>
    )
}
