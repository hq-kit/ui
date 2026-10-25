"use client"

import { IconTrash, IconUpload } from "@tabler/icons-react"
import { useState } from "react"
import { Button } from "@/components/ui/button"

export default () => {
  const [isSaving, setIsSaving] = useState<boolean>(false)
  const [isUploading, setIsUploading] = useState<boolean>(false)
  const [isDeleting, setIsDeleting] = useState<boolean>(false)
  return (
    <div className="flex gap-2">
      <Button
        isPending={isSaving}
        onPress={() => {
          setIsSaving(true)
          setTimeout(() => setIsSaving(false), 4000)
        }}
      >
        {({isPending}) => (
          <>
            {isPending ? 'Saving' : 'Save'}
          </>
       )}
      </Button>
      <Button variant={'outline'}
        isPending={isUploading}
        onPress={() => {
          setIsUploading(true)
          setTimeout(() => setIsUploading(false), 4000)
        }}
      >
        {({isPending}) => (
          <>
            <IconUpload />
            {isPending ? 'Uploading' : 'Upload'}
          </>
       )}
      </Button>
      <Button
        isPending={isDeleting}
        onPress={() => {
          setIsDeleting(true)
          setTimeout(() => setIsDeleting(false), 4000)
        }}
        size={"icon"}
        variant={"destructive"}
      >
        <IconTrash />
      </Button>
    </div>
  )
}
