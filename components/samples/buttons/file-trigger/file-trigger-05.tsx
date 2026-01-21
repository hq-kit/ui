'use client'

import type { DropEvent } from '@react-types/shared'
import { useEffect, useState } from 'react'
import { isFileDropItem } from 'react-aria-components'
import { twJoin } from 'tailwind-merge'
import { Avatar } from '@/components/ui/avatar'
import { DropZone } from '@/components/ui/drop-zone'
import { FileTrigger } from '@/components/ui/file-trigger'

const FileTriggerAvatar = () => {
  const [droppedImage, setDroppedImage] = useState<string | undefined>(undefined)

  useEffect(() => {
    return () => {
      if (droppedImage) {
        URL.revokeObjectURL(droppedImage)
      }
    }
  }, [droppedImage])

  const onDropHandler = async (e: DropEvent) => {
    const item = e.items.filter(isFileDropItem).find((item) => item.type === 'image/jpeg' || item.type === 'image/png')
    if (item) {
      const file = await item.getFile()
      setDroppedImage(URL.createObjectURL(file))
    }
  }

  async function onSelectHandler(e: any) {
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
        className={twJoin(
          'size-10 overflow-hidden rounded-full p-0 **:data-[slot=avatar]:bg-transparent **:data-[slot=avatar]:outline-hidden'
        )}
        getDropOperation={() => 'copy'}
        onDrop={onDropHandler}
      >
        {droppedImage ? <Avatar className='size-10' src={droppedImage} /> : <Avatar alt='IA' className='size-10' />}
        <input defaultValue={droppedImage} name='image' type='hidden' />
      </DropZone>
      <FileTrigger acceptedFileTypes={['image/png', 'image/jpeg']} onSelect={onSelectHandler} size='sm'>
        Upload avatar
      </FileTrigger>
    </div>
  )
}

export default FileTriggerAvatar
