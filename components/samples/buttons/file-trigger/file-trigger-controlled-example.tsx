"use client"

import { useState } from "react"
import { FileTrigger } from "@/components/ui/file-trigger"

export default function FileTriggerDemo() {
  const [file, setFile] = useState<string[] | null>(null)
  return (
    <>
      <FileTrigger
        onSelect={(e) => {
          const files = Array.from(e ?? [])
          const filenames = files.map((file) => file.name)
          setFile(filenames)
        }}
      />
      {file && <pre>{JSON.stringify(file, null, 2)}</pre>}
    </>
  )
}
