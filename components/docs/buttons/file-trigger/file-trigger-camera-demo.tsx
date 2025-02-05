'use client'

import { IconCamera } from 'hq-icons'

import { FileTrigger } from '@/components/ui'

export default function FileTriggerCameraDemo() {
    return (
        <FileTrigger>
            <IconCamera />
            Open a camera
        </FileTrigger>
    )
}
