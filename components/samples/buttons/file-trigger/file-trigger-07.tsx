'use client'

import { useState } from 'react'
import { FileTrigger } from '@/components/ui/file-trigger'

const FileTriggerControlled = () => {
  const [file, setFile] = useState<string[] | null>(null)
  return (
    <>
      <FileTrigger
        onSelect={(e) => {
          const files = Array.from(e ?? [])
          const filenames = files.map((file) => file.name)
          setFile(filenames)
        }}
      >
        Upload
      </FileTrigger>
      {file && (
        <p className='mt-2 block max-w-60 truncate [&>strong]:font-medium [&>strong]:text-fg'>
          Your file: <strong>{file}</strong>
        </p>
      )}
    </>
  )
}

export default FileTriggerControlled
