'use client'

import type { DropEvent } from '@react-types/shared'
import { IconPhoto } from '@tabler/icons-react'
import Image from 'next/image'
import { useState } from 'react'
import { isFileDropItem } from 'react-aria-components'
import { Description, DropZone, FileTrigger } from '@/components/ui'

export default function DropZoneAndFileTriggerDemo() {
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
        <DropZone
            getDropOperation={(types) => (types.has('image/jpeg') || types.has('image/png') ? 'copy' : 'cancel')}
            onDrop={onDropHandler}
        >
            <div className='grid space-y-3'>
                <div className='mx-auto grid size-12 place-content-center overflow-hidden rounded-full border bg-muted/70 group-drop-target:border-primary/70 group-drop-target:bg-ring'>
                    {droppedImage ? (
                        <Image
                            alt='Uploaded Image'
                            className='aspect-square size-full object-cover'
                            height={20}
                            src={droppedImage}
                            width={20}
                        />
                    ) : (
                        <IconPhoto className='size-5' />
                    )}
                </div>
                <div className='flex justify-center'>
                    <FileTrigger
                        acceptedFileTypes={['image/png', 'image/jpeg']}
                        allowsMultiple={false}
                        onSelect={onSelectHandler}
                    >
                        Upload an image
                    </FileTrigger>
                </div>
                <Description>Or drag and drop PNG, JPG, GIF up to 10MB</Description>
            </div>
            <input name='image' type='hidden' value={droppedImage ?? ''} />
        </DropZone>
    )
}
