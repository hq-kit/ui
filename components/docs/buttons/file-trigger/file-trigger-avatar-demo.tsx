'use client'

import React from 'react'

import { isFileDropItem } from 'react-aria-components'

import { Avatar, DropZone, FileTrigger, cn } from '@/components/ui'
import type { DropEvent } from '@react-types/shared'

export default function FileTriggerAvatarDemo() {
    const [droppedImage, setDroppedImage] = React.useState<string | undefined>(undefined)

    const onDropHandler = async (e: DropEvent) => {
        const item = e.items
            .filter(isFileDropItem)
            .find((item) => item.type === 'image/jpeg' || item.type === 'image/png')
        if (item) {
            const file = await item.getFile()
            setDroppedImage(URL.createObjectURL(file))
        }
    }

    async function onSelectHandler(e: FileList | null) {
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
                getDropOperation={() => 'copy'}
                onDrop={onDropHandler}
                className={cn(
                    'size-10 overflow-hidden rounded-full p-0 [&_[data-slot=avatar]]:bg-transparent [&_[data-slot=avatar]]:outline-none'
                )}
            >
                {droppedImage ? (
                    <Avatar src={droppedImage} size='lg' />
                ) : (
                    <Avatar initials='DQ' size='lg' />
                )}
                <input type='hidden' name='image' value={droppedImage} />
            </DropZone>
            <FileTrigger
                size='sm'
                acceptedFileTypes={['image/png', 'image/jpeg']}
                onSelect={onSelectHandler}
            >
                Upload avatar
            </FileTrigger>
        </div>
    )
}
