'use client'

import { FileTrigger } from '@/components/ui'
import { IconCamera } from 'hq-icons'

export default function FileTriggerCameraDemo() {
    return (
        <FileTrigger>
            <IconCamera />
            Open a camera
        </FileTrigger>
    )
}
