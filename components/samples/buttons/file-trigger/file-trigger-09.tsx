'use client'

import type { DropEvent } from '@react-types/shared'
import { IconPhoto } from '@tabler/icons-react'
import { useState } from 'react'
import { isFileDropItem } from 'react-aria-components'
import { DropZone } from '@/components/ui/drop-zone'
import { FileTrigger } from '@/components/ui/file-trigger'

const FileTriggerDropZone = () => {
  const [droppedImage, setDroppedImage] = useState<string | undefined>(undefined)

  const onDropHandler = async (e: DropEvent) => {
    const item = e.items.filter(isFileDropItem).find((item) => item.type === 'image/jpeg' || item.type === 'image/png')
    if (item) {
      const file = await item.getFile()
      setDroppedImage(URL.createObjectURL(file))
    }
  }

  const onSelectHandler = async (e: any) => {
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
      {droppedImage ? (
        <img alt='' className='aspect-square size-full object-contain' src={droppedImage} />
      ) : (
        <div className='grid space-y-3'>
          <div className='mx-auto grid size-12 place-content-center rounded-full border bg-secondary/70 group-data-drop-target:border-primary/70 group-data-drop-target:bg-primary/20'>
            <IconPhoto className='size-5' />
          </div>
          <div className='flex justify-center'>
            <FileTrigger
              acceptedFileTypes={['image/png', 'image/jpeg']}
              allowsMultiple={false}
              onSelect={onSelectHandler}
            >
              Upload a file
            </FileTrigger>
          </div>
          <p className='text-center text-muted-foreground text-xs'>Or drag and drop PNG, JPG, GIF up to 10MB</p>
        </div>
      )}
      <input defaultValue={droppedImage} name='image' type='hidden' />
    </DropZone>
  )
}

export default FileTriggerDropZone
