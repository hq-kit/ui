"use client"

import { IconPlaceholder } from "@/components/icon-placeholder"
import { Card } from "@/components/ui/card"
import { Empty } from "@/components/ui/empty"
import { FileTrigger } from "@/components/ui/file-trigger"

export function FileUpload() {
  return (
    <Card>
      <Card.Header>
        <Card.Title>File Upload</Card.Title>
        <Card.Description>Drag and drop or browse</Card.Description>
      </Card.Header>
      <Card.Content>
        <Empty className="border">
          <Empty.Header>
            <Empty.Media variant="icon">
              <IconPlaceholder
                hugeicons="CloudUploadIcon"
                lucide="UploadCloudIcon"
                phosphor="CloudArrowUpIcon"
                remixicon="RiUploadCloudLine"
                tabler="IconCloudUpload"
              />
            </Empty.Media>
            <Empty.Title>Upload files</Empty.Title>
            <Empty.Description>PNG, JPG, PDF up to 10MB</Empty.Description>
          </Empty.Header>
          <Empty.Content>
            <FileTrigger>Browse Files</FileTrigger>
          </Empty.Content>
        </Empty>
      </Card.Content>
    </Card>
  )
}
