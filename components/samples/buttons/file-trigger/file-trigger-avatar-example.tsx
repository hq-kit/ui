"use client"

import type { DropEvent } from "@react-types/shared"
import { IconUser } from "@tabler/icons-react"
import { useEffect, useState } from "react"
import { isFileDropItem } from "react-aria-components/useDragAndDrop"
import { twJoin } from "tailwind-merge"
import { Avatar } from "@/components/ui/avatar"
import { DropZone } from "@/components/ui/drop-zone"
import { FileTrigger } from "@/components/ui/file-trigger"

export default function FileTriggerAvatarDemo() {
  const [droppedImage, setDroppedImage] = useState<string | undefined>(undefined)

  useEffect(() => {
    return () => {
      if (droppedImage) {
        URL.revokeObjectURL(droppedImage)
      }
    }
  }, [droppedImage])

  const onDropHandler = async (e: DropEvent) => {
    const item = e.items.filter(isFileDropItem).find((item) => item.type === "image/jpeg" || item.type === "image/png")
    if (item) {
      const file = await item.getFile()
      setDroppedImage(URL.createObjectURL(file))
    }
  }

  async function onSelectHandler(files: FileList | null) {
    if (files) {
      const file = files.item(0)

      if (file) {
        setDroppedImage(URL.createObjectURL(file))
      }
    }
  }

  return (
    <div className="flex items-center gap-2">
      <DropZone
        className={twJoin(
          "size-10 overflow-hidden rounded-full p-0 **:data-[slot=avatar]:bg-transparent **:data-[slot=avatar]:outline-hidden"
        )}
        getDropOperation={() => "copy"}
        onDrop={onDropHandler}
      >
        <Avatar>
          <Avatar.Image src={droppedImage} />
          <Avatar.Fallback>
            <IconUser />
          </Avatar.Fallback>
        </Avatar>
        <input name="image" type="hidden" value={droppedImage} />
      </DropZone>
      <FileTrigger acceptedFileTypes={["image/png", "image/jpeg"]} onSelect={onSelectHandler} size="sm">
        Upload avatar
      </FileTrigger>
    </div>
  )
}
