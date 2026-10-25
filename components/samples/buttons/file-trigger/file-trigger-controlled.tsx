"use client"

import { IconFile, IconX } from "@tabler/icons-react"
import { useState } from "react"
import { Attachment } from "@/components/ui/attachment"
import { FileTrigger } from "@/components/ui/file-trigger"

export default () => {
  const [files, setFiles] = useState<File[] | null>(null)
  return (
    <div className="grid gap-2">
      <FileTrigger
        allowsMultiple
        onSelect={(e) => {
          const files = Array.from(e ?? [])
          setFiles(files)
        }}
      />
      {files?.map((f, i) => (
        <Attachment className="w-full" key={i} state="done">
          <Attachment.Media>
            <IconFile />
          </Attachment.Media>
          <Attachment.Content>
            <Attachment.Title>{f.name}</Attachment.Title>
            <Attachment.Description>Uplodaed · {(f.size / 1024 / 1024).toFixed(2)} mb</Attachment.Description>
          </Attachment.Content>
          <Attachment.Actions>
            <Attachment.Action aria-label="Cancel upload" onPress={() => setFiles(files?.filter((file) => f !== file))}>
              <IconX />
            </Attachment.Action>
          </Attachment.Actions>
        </Attachment>
      ))}
    </div>
  )
}
