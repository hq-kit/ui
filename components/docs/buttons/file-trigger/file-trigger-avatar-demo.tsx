'use client'

import type { DropEvent } from '@react-types/shared'
import { useState } from 'react'
import { isFileDropItem } from 'react-aria-components'

import { Avatar, DropZone, FileTrigger } from '@/components/ui'
import { cn } from '@/lib/utils'

export default function FileTriggerAvatarDemo() {
    const [droppedImage, setDroppedImage] = useState<string | null>(null)

    const onDropHandler = async (e: DropEvent) => {
        const item = e.items
            .filter(isFileDropItem)
            .find((item) => item.type === 'image/jpeg' || item.type === 'image/png')
        if (item) {
            const file = await item.getFile()
            setDroppedImage(URL.createObjectURL(file))
        }
    }

    const onSelectHandler = async (e: FileList | null) => {
        if (e) {
            const files = Array.from([...e])
            const item = files[0]

            if (item) {
                setDroppedImage(URL.createObjectURL(item))
            }
        }
    }

    return (
        <div className='flex items-center gap-2'>
            <DropZone
                getDropOperation={(types) => (types.has('image/jpeg') || types.has('image/png') ? 'copy' : 'cancel')}
                onDrop={onDropHandler}
                className={cn('size-10 overflow-hidden rounded-full p-0')}
            >
                <Avatar src={droppedImage ?? ''} size='lg' />
                <input type='hidden' name='image' value={droppedImage ?? ''} />
            </DropZone>
            <FileTrigger size='sm' acceptedFileTypes={['image/png', 'image/jpeg']} onSelect={onSelectHandler}>
                Upload avatar
            </FileTrigger>
        </div>
    )
}
