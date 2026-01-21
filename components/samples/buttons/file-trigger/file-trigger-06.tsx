'use client'

import { useState } from 'react'
import { FileTrigger } from '@/components/ui/file-trigger'

const FileTriggerPending = () => {
  const [isLoading, setLoading] = useState(false)

  const handleSelect = async (files: FileList | null) => {
    if (!files || files.length === 0) return

    setLoading(true)
    await new Promise((r) => setTimeout(r, 4500))
    setLoading(false)
  }

  return (
    <FileTrigger isPending={isLoading} onSelect={handleSelect}>
      {isLoading ? 'Uploading...' : 'Upload a file'}
    </FileTrigger>
  )
}

export default FileTriggerPending
